const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About SQ Motors
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                At SQ Motors LLC, we pride ourselves on providing high-quality pre-owned vehicles that meet the highest standards of excellence and reliability. With years of experience in the automotive industry, our team is dedicated to helping you find the perfect vehicle that fits your needs and budget.
              </p>
              <p>
                Every vehicle in our inventory undergoes a comprehensive inspection process to ensure it meets our strict quality standards. We believe in transparency and building long-term relationships with our customers based on trust and exceptional service.
              </p>
              <p>
                Located in the heart of the community, we're committed to making your car buying experience as smooth and stress-free as possible. From our extensive warranty coverage to flexible financing options, we're here to support you every step of the way.
              </p>
            </div>
            <button className="mt-8 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Learn More
            </button>
          </div>

          {/* Right Content - Dealership Image Placeholder */}
          <div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-gray-500">Dealership Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
