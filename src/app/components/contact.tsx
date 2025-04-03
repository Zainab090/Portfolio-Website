import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[#181818] text-white">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Contact Me
      </h2>
      <p className="text-center mb-6">
        Interested in collaborating or just want to say hi? Drop me a message!
      </p>
      <form className="max-w-2xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-[#121212] text-white shadow-inner focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded bg-[#121212] text-white shadow-inner focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded bg-[#121212] text-white shadow-inner focus:outline-none"
          rows={5}
        ></textarea>
        <button type="submit" className="px-6 py-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:bg-opacity-80">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
