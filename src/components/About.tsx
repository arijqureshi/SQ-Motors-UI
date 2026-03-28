import { Link } from 'react-router-dom';
import dealershipMain1280 from '../assets/images/optimized/dealership-main-1280.jpg';
import dealershipMain1920 from '../assets/images/optimized/dealership-main-1920.jpg';

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
            <div className="rounded-lg h-96 overflow-hidden">
              <img
                src={dealershipMain1280}
                srcSet={`${dealershipMain1280} 1280w, ${dealershipMain1920} 1920w`}
                sizes="(min-width: 1024px) 42rem, (min-width: 768px) 50vw, 100vw"
                width={1280}
                height={960}
                alt="SQ Motors dealership"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
