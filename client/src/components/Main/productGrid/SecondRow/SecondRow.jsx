import React from 'react';
import ipodAir from '../../../../assets/images/over-left/promo_logo_ipadair_medium_2x.png';
import styles from '../../../../styles/productGrid/SecondRow.module.css';

export default function SecondRow() {
  return (
    <div className="flex flex-col md:flex-row w-full gap-4 mb-3 second-flex">
      <div
        className={`w-full p-4 flex flex-col justify-between pb-10 pt-7 ${styles.secondFlexLeft}`}
      >
        <div className="mt-4">
          <div className="text-center w-[70%] mx-auto">
            <img
              className="w-[50%] md:w-[60%] mx-auto mb-3"
              src={ipodAir}
              alt="ipad-air"
            />
            <p className="text-lg md:text-2xl">
              Now supercharged by the M3 chip.
            </p>
          </div>
          <div className="mx-auto text-center mt-5">
            <a
              href="#"
              className="px-4 py-3 text-xl bg-blue-500 hover:bg-blue-600 text-white mr-3 rounded-3xl"
            >
              Learn more
            </a>
            <a
              href="#"
              className="py-2 px-3 text-2xl br-blue-500 border border-solid border-blue-500 rounded-3xl text-blue-700 hover:bg-blue-500 hover:text-white transition duration-300"
            >
              buy
            </a>
          </div>
        </div>
        <div>
          <p className="mt-6 font-bold bg-gradient-to-r from-sky-400  via-red-400 to-pink-500 bg-clip-text text-transparent text-xl md:text-3xl text-center">
            Built for Apple Intelligence.
          </p>
        </div>
      </div>
      <div
        className={`w-full pb-10 flex flex-col justify-end ${styles.secondFlexRight}`}
      >
        <div className="container mx-auto md:p-6 text-white">
          <div className="hero-log mx-auto text-center">
            <h2 className="font-bold text-4xl md:text-5xl">AirPods Pro 2</h2>
          </div>
          <div className="hero-text">
            <h1 className="text-2xl my-3 text-center">
              Now with a Hearing Aid feature.
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
            >
              Buy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
