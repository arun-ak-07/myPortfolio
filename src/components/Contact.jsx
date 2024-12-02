import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setIsLoading(true);

    const serviceID = "service_csr74dj";
    const templateID = "template_tvfnqjh";
    const userID = "YlzO1LfOT9UNDi2b7";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setIsSubmitted(true);
        setIsLoading(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setError("Failed to send message. Please try again later.");
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center p-6" id="contact">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 p-6 rounded-md shadow-lg"
      >
        <InputField label="Name" name="name" value={formData.name} onChange={handleChange} />
        <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />
        <TextAreaField label="Message" name="message" value={formData.message} onChange={handleChange} />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {isSubmitted && <p className="text-green-500 text-sm mb-4">Message sent successfully!</p>}

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full ${isLoading ? "bg-blue-400" : "bg-blue-600"} hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300`}
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

const InputField = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium mb-1">
      {label}
    </label>
    <input
      type={name === "email" ? "email" : "text"}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required
      className="w-full p-2 rounded-md border border-gray-700 bg-gray-700 text-white"
    />
  </div>
);

const TextAreaField = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium mb-1">
      {label}
    </label>
    <textarea
      name={name}
      id={name}
      rows="4"
      value={value}
      onChange={onChange}
      required
      className="w-full p-2 rounded-md border border-gray-700 bg-gray-700 text-white"
    ></textarea>
  </div>
);

export default Contact;
