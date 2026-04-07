const About = () => {
  return (
    <div className="px-6 md:px-16 py-12">

      {/* About Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Image */}
          <div className="w-40 h-40 md:w-60 md:h-60">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              I am a passionate frontend developer focused on building clean,
              responsive, and user-friendly web interfaces. I enjoy turning ideas
              into real-world applications using modern technologies like React
              and Tailwind CSS.
            </p>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-200 transition">HTML</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-200 transition">CSS</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-200 transition">JavaScript</span>
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-200 transition">React</span>
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full hover:bg-green-200 transition">Node.js</span>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full hover:bg-green-200 transition">Express</span>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Tools</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full hover:bg-purple-200 transition">Git</span>
              <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full hover:bg-purple-200 transition">VS Code</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;