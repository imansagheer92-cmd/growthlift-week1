function Contact() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-16">
      <div className="max-w-xl mx-auto">
        <p className="text-blue-400 font-semibold mb-3 text-center">GET IN TOUCH</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">Contact Me</h1>

        <form className="bg-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8 space-y-5">
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
