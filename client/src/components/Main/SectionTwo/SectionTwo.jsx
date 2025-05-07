import React, { useEffect, useState } from 'react';
import styles from '../../../styles/SectionTwo.module.css';
import bgSmall from '../../../assets/images/hero-iphone/hero_iphone_family_small_2x.jpg';
import bgBig from '../../../assets/images/hero-iphone/hero_iphone_family_large_2x.jpg';

export default function SectionTwo() {
  const [bgImage, setBgImage] = useState(
    window.innerWidth >= 768 ? bgBig : bgSmall
  );

  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth >= 768 ? bgBig : bgSmall);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className={`bg-gray-100 py-12 w-full text-center mb-3 iphone-section ${styles.sectionTwo}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto p-6">
        <div className="hero-log mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold">iPhone</h2>
        </div>
        <div className="hero-text">
          <h1 className="text-3xl my-3 text-center text-gray-800">
            Meet the iPhone 16 family.
          </h1>
        </div>
        <div className="hero-links mx-auto text-center mt-5">
          <a
            href="#"
            className="px-4 py-3 text-xl bg-blue-500 hover:bg-blue-600 text-white mr-3 rounded-3xl"
          >
            Learn more
          </a>
          <a
            href="#"
            className="py-2 px-3 text-2xl br-blue-500 border border-solid border-blue-500 rounded-3xl text-blue-700 hover:bg-blue-500 hover:text-white transition duration-300"
            style={{ textDecoration: 'none' }}
          >
            Shop iPhone
          </a>
        </div>

        <p className="mt-6 font-bold bg-gradient-to-r from-sky-400  via-red-400 to-pink-500 bg-clip-text text-transparent text-2xl md:text-3xl">
          Built for Apple Intelligence.
        </p>
      </div>
    </section>
  );
}
