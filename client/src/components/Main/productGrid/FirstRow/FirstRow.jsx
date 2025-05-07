import React from 'react';
import styles from '../../../../styles/productGrid/FirstRow.module.css';

export default function FirstRow() {
  return (
    <div className="flex flex-col md:flex-row w-full gap-4 mb-3 first-flex">
      <div
        className={`w-full p-6 md:p-8 flex flex-col justify-end ${styles.firstFlexLeft}`}
      >
        <div className="w-[60%] mx-auto text-center text-xl md:text-3xl">
          <p>Apple Worldwide</p>
          <p className="mb-2">
            Developers Conference. Join us online June 9-13.
          </p>
          <button className="px-4 py-3 text-xl bg-blue-500 hover:bg-blue-600 text-white mr-3 rounded-3xl">
            Learn more
          </button>
        </div>
      </div>

      <div
        className={`w-full px-4 py-10 flex flex-col justify-between pb-10 pt-7 ${styles.firstFlexRight}`}
      >
        <div className="pt-5">
          <div className="text-center md:w-[70%] mx-auto">
            <h2 className="font-bold text-4xl md:text-6xl">MacBook Air</h2>
            <p className="text-2xl">Sky blue color.</p>
            <p className="text-2xl">Sky high performance with M4.</p>
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
          <p className="mt-6 font-bold bg-gradient-to-r from-sky-400 orange-400 via-red-400 to-pink-500 bg-clip-text text-transparent text-xl md:text-3xl text-center">
            Built for Apple Intelligence.
          </p>
        </div>
      </div>
    </div>
  );
}
