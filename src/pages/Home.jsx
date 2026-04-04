const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">

      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm Your Name
      </h1>

      <p className="text-lg md:text-xl mb-6">
        Frontend Developer
      </p>

      <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
        View Projects
      </button>

    </div>
  );
};

export default Home;