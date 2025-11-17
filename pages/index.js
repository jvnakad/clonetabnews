function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-black text-white px-4">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-center animate-pulse">
          Building the pipeline... Portfolio will be live soon.
        </h1>

        <div className="mt-6 w-14 h-14 border-4 border-gray-500 border-t-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export default Home;
