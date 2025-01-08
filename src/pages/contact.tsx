const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 mb-10 bg-gradient-to-r from-blue-50 to-indigo-100 relative shadow-2xl rounded-3xl transform "
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-center text-gray-800">
        Get In Touch
      </h2>
      <p className="text-lg sm:text-xl text-center mb-10 text-gray-600 max-w-2xl mx-auto">
        I&apos;d love to hear from you! Feel free to drop a message, and
        I&apos;ll get back to you as soon as possible.
      </p>
      <form className="max-w-lg mx-auto bg-white shadow-2xl p-8 rounded-lg space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-500 outline-none"
          rows={5}
        ></textarea>
        <button
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
