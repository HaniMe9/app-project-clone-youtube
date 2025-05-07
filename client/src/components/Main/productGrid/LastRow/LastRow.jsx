import React from 'react';
import tradeInIcon from '../../../../assets/images/over-left/promo_logo_iphone_tradein_large_2x.png';
import cardLogo from '../../../../assets/images/over-right/card_logo_large_2x.png';
import styles from '../../../../styles/productGrid/LastRow.module.css';

export default function LastRow() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-3 last-flex">
      <div className={`flex-1 p-4 ${styles.lastFlexLeft}`}>
        <div className="mt-4">
          <div className="text-center md:w-[50%] mx-auto">
            <img
              className="w-[50%] md:w-[70%] mx-auto mb-3"
              src={tradeInIcon}
              alt="trade-in"
            />
            <p className="text-lg md:text-2xl">
              Get $170-$630 in credit when you trade in iPhone 12 or higher.
            </p>
          </div>
          <div className="mx-auto text-center mt-5">
            <a
              href="#"
              className="px-4 py-3 text-xl bg-blue-500 hover:bg-blue-600 text-white mr-3 rounded-3xl"
            >
              Get your estimate
            </a>
          </div>
        </div>
      </div>
      <div className={`flex-1 p-4 ${styles.lastFlexRight}`}>
        <div>
          <div className="text-center md:w-[50%] mx-auto">
            <img
              className="w-[50%] md:w-[70%] mx-auto mb-3"
              src={cardLogo}
              alt="card-logo"
            />
            <p className="text-lg md:text-2xl">
              Get up to 3% Daily Cash back with every purchase.
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
              className="py-2 px-3 text-2xl border border-solid border-blue-500 rounded-3xl text-blue-700 hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Apply now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
