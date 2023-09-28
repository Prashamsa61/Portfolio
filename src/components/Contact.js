import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// a custom hook for form handling
function useForm(initialValues, onSubmit) {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Optionally,  clear the form after submission
    setFormData(initialValues);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  // Use  of the custom hook for form handling
  const { formData, handleChange, handleSubmit } = useForm(
    initialValues,
    (formData) => {
      // Handle form submission here
      console.log(formData);
    }
  );

  // Define a list of contact options
  const contactOptions = [
    {
      title: "Email",
      content: "contact@example.com",
    },
    {
      title: "Phone",
      content: "+1 (123) 456-7890",
    },
    {
      title: "Office Address",
      content: "123 Main Street, City, Country",
    },
  ];
  return (
    <section className="py-16 lg:py-32" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 justify-start  items-center"
          >
            <h4
              className="text-xl uppercase text-accent font-medium mb-2 
              tracking-wide"
            >
              Get in touch
            </h4>
            <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
              Let's work
              <br /> together!
            </h2>

            {/* Render the list of contact options */}
            <ul>
              {contactOptions.map((option, index) => (
                <li key={index}>
                  <strong>{option.title}: </strong>
                  {option.content}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 p-6 items-start"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full
              placeholder:text-white focus:border-accent transition-all resize-none
              mb-6"
              placeholder="Your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button className="btn btn-lg" type="submit">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
