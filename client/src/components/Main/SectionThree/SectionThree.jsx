import React from 'react';
import styles from '../../../styles/SectionThree.module.css';
import tvLogo from '../../../assets/images/hero-tv/over/hero_logo_apple_tv_plus_small_2x.png';
import tvImage from '../../../assets/images/hero-tv/over/hero_logo_tv_plus_small_2x.png';

export default function SectionThree() {
  return (
    <section
      className={`bg-gray-100 w-full text-center mb-3 tv-section ${styles.sectionThree}`}
    >
      <div className="container mx-auto p-6 h-full flex flex-col justify-end align-end">
        <div className="hero-log mx-auto text-center">
          <img className="mb-3 h-10 md:h-auto" src={tvLogo} alt="" />
        </div>
        <div className="hero-text text-center">
          <img className="mx-auto mb-3 h-20 md:h-auto" src={tvImage} alt="" />
        </div>
        <div className="tv-text">
          <p className="text-white text-2xl md:text-3xl mb-3">
          Mother’s Day
          </p>
          <p className="text-white text-2xl md:text-3xl mb-3">
          It’s not too late to find the perfect gift for Mom.</p>
          <button className="bg-white py-2 px-3 md:py-3 md:px-4 md:text-xl rounded-3xl mb-5">
            Shop
          </button>
        </div>
      </div>
    </section>
  );
}
