import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About SQ Motors
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                At SQ Motors LLC, we specialize in selling high-quality cars at fair and competitive prices. Our commitment to customer satisfaction is our number one priority.
              </p>
              <p>
                We believe in providing an exceptional car buying experience with transparency, honesty, and outstanding service. Every customer deserves to drive away happy in a vehicle they love.
              </p>
            </div>
            <Link 
              to="/about-us" 
              className="mt-8 inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Learn More
            </Link>
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
