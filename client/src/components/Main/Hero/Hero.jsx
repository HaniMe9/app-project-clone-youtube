import React, { useEffect, useState } from 'react';
import WatchSeries from '../../../assets/images/hero-watch/over/hero_logo_apple_watch_series_10_small_2x.png';
import bgSmall from '../../../assets/images/hero-watch/hero_apple_watch_series_10_small_2x.jpg';
import bgBig from '../../../assets/images/hero-watch/hero_apple_watch_series_10_large_2x.jpg';
import styles from '../../../styles/Hero.module.css';

export default function Hero() {
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
      className={`bg-gray-100 py-16 w-full text-center mb-3 hero-section heroSection ${styles.heroSection}`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto p-8">
        <div className="hero-log mx-auto">
          <img
            className="hero-logo h-16 md:h-24 mx-auto"
            src={WatchSeries}
            alt="watch-logo"
          />
        </div>
        <div className="hero-text">
          <h1 className="text-3xl md:text-5xl my-4 text-center text-gray-800">
            Thinstant classNameic.
          </h1>
        </div>
        <div className="hero-links mx-auto text-center mt-7">
          <a
            href="#"
            className="px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white text-xl mr-3 rounded-3xl"
          >
            Learn more
          </a>
          <a
            href="#"
            className="py-2 px-8 text-2xl br-blue-500 border border-solid border-blue-500 rounded-3xl text-blue-700 hover:bg-blue-500 hover:text-white transition duration-300"
            style={{ textDecoration: 'none' }}
          >
            buy
          </a>
        </div>
      </div>
    </section>
  );
}
