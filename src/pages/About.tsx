import { useState } from 'react';
import { COMPANY_INFO } from '../constants';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About SQ Motors</h1>
          <p className="text-lg text-gray-600">
            Your trusted partner for quality vehicles and exceptional service
          </p>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded with a passion for automobiles and a commitment to excellence, SQ Motors LLC has been serving the community with pride and dedication. We understand that buying a car is more than just a transaction—it's about finding the perfect vehicle that fits your lifestyle and budget.
              </p>
              <p>
                Our team of experienced professionals is dedicated to making your car buying experience smooth, transparent, and enjoyable. We take pride in our extensive inventory of quality vehicles, each carefully inspected and prepared to meet the highest standards.
              </p>
              <p>
                At SQ Motors, we're not just selling cars; we're building lasting relationships with our customers. Our commitment to honesty, integrity, and outstanding service has made us a trusted name in the automotive industry.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-gray-500">Our Dealership</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-16">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {['mission', 'values', 'team'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab === 'mission' ? 'Our Mission' : tab === 'values' ? 'Our Values' : 'Our Team'}
                </button>
              ))}
            </nav>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            {activeTab === 'mission' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide exceptional value and service to every customer by offering quality vehicles at competitive prices, 
                  ensuring transparency in all our dealings, and creating a car buying experience that exceeds expectations. 
                  We strive to be the most trusted automotive dealership in our community through integrity, expertise, and unwavering commitment to customer satisfaction.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Integrity</h4>
                      <p className="text-gray-600">We conduct business with honesty and transparency in all our interactions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Customer Focus</h4>
                      <p className="text-gray-600">Our customers' needs and satisfaction are at the heart of everything we do.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Excellence</h4>
                      <p className="text-gray-600">We strive for excellence in every aspect of our business operations.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Teamwork</h4>
                      <p className="text-gray-600">We work together to achieve common goals and support each other's growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'team' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Meet Our Team</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { name: 'Saad Qureshi', role: 'Founder & CEO', description: 'With years of experience in the automotive industry, Saad leads our team with vision and expertise.', headshot: '/src/assets/team/saad-headshot.jpeg' },
                    { name: 'Asad Ali', role: 'Sales Manager', description: 'Asad ensures every customer receives personalized attention and exceptional service.', headshot: '/src/assets/team/asad-headshot.jpg' },
                  ].map((member, index) => (
                    <div key={index} className="text-center">
                      <div className="rounded-full w-32 h-32 mx-auto mb-4 overflow-hidden bg-gray-200">
                        {member.headshot ? (
                          <img 
                            src={member.headshot} 
                            alt={`${member.name} headshot`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                      <p className="text-red-600 mb-2">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-red-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Find Your Dream Car?</h3>
          <p className="text-gray-600 mb-6">
            Visit us today and let our team help you find the perfect vehicle for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
            >
              Contact Us
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
