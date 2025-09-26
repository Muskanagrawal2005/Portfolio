import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    emailjs.init("VroDQNpLp9LP6vzXE");
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required.';
    } else if (!/^[A-Za-z ]+$/.test(formData.name.trim())) {
      errors.name = 'Name should only contain alphabets.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!formData.email.includes('@')) {
      errors.email = 'Email should contain @.';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required.';
    }
    return errors;
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await emailjs.send(
        'service_6qa6ajv',
        'template_aa00zxk',
        {
          to_email: 'muskanblp05@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email
        }
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('Thank you for your message! We will get back to you soon.');
      }
    } catch (error) {
      setSubmitStatus('error');
      alert('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="w-full max-w-3xl mx-auto p-6 bg-gray-900 rounded-lg shadow"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">Contact Me</h2>
      <div className="mb-3">
        <label className="block text-white mb-1">Name</label>
        <input
          type="text"
          name="name"
          className="w-full px-3 py-2 rounded bg-gray-800 text-white"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {formErrors.name && <span className="text-red-400 text-sm">{formErrors.name}</span>}
      </div>
      <div className="mb-3">
        <label className="block text-white mb-1">Email</label>
        <input
          type="email"
          name="email"
          className="w-full px-3 py-2 rounded bg-gray-800 text-white"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {formErrors.email && <span className="text-red-400 text-sm">{formErrors.email}</span>}
      </div>
      <div className="mb-3">
        <label className="block text-white mb-1">Subject</label>
        <input
          type="text"
          name="subject"
          className="w-full px-3 py-2 rounded bg-gray-800 text-white"
          value={formData.subject}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {formErrors.subject && <span className="text-red-400 text-sm">{formErrors.subject}</span>}
      </div>
      <div className="mb-3">
        <label className="block text-white mb-1">Message</label>
        <textarea
          name="message"
          className="w-full px-3 py-2 rounded bg-gray-800 text-white"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
        />
        {formErrors.message && <span className="text-red-400 text-sm">{formErrors.message}</span>}
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {submitStatus === 'success' && (
        <p className="text-green-400 mt-3">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-400 mt-3">Failed to send message.</p>
      )}
    </form>
  );
};

export default ContactForm;
