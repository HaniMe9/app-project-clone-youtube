import React, { useEffect } from 'react';
import $ from 'jquery';

export default function Footer() {
  useEffect(() => {
    let line = $('.footer-links-wrapper h3');
    line.on('click', function () {
      $(this).next('ul').slideToggle();
    });
  }, []);

  return (
    <footer className="bg-gray-100 text-gray-600 font-medium">
      <div className="max-w-screen-xl mx-auto w-[90%] md:w-[80%] py-10">
        {/* <!-- Upper Info Text --> */}
        <div className="text-md leading-relaxed mb-6">
          <p className="mb-2">
            1. Hearing Aid and Hearing Test: The Hearing Aid feature has
            received FDA authorization. The Hearing Test and Hearing Aid
            features are supported on AirPods Pro 2 with the latest firmware
            paired with a compatible iPhone or iPad with iOS 18 or iPadOS 18 and
            later and are intended for people 18 years old or older. The Hearing
            Aid feature is also supported on a compatible Mac with macOS Sequoia
            and later. It is intended for people with perceived mild to moderate
            hearing loss.
          </p>
          <p className="mb-2">
            Hearing Protection: The Hearing Protection feature works with
            AirPods Pro 2 with the latest firmware when paired with a compatible
            iPhone, iPad, or Mac with iOS 18, iPadOS 18, or macOS Sequoia and
            later. Feature is only available in the U.S. and Canada. See
            <u>support.apple.com/120850</u> for total attenuation and more
            information. The Hearing Protection feature is not suitable for
            protection against extremely loud impulse sounds, such as gunfire,
            fireworks, or jackhammers, or against sustained sounds louder than
            110 dBA.
          </p>
          <p className="mb-2">
            2. Trade‑in values will vary based on the condition, year, and
            configuration of your eligible trade‑in device. Not all devices are
            eligible for credit. You must be at least the age of majority to be
            eligible to trade in for credit or for an Apple Gift Card. Trade‑in
            value may be applied toward qualifying new device purchase, or added
            to an Apple Gift Card. Actual value awarded is based on receipt of a
            qualifying device matching the description provided when estimate
            was made. Sales tax may be assessed on full value of a new device
            purchase. In‑store trade‑in requires presentation of a valid photo
            ID (local law may require saving this information). Offer may not be
            available in all stores, and may vary between in‑store and online
            trade‑in. Some stores may have additional requirements. Apple or its
            trade‑in partners reserve the right to refuse, cancel, or limit
            quantity of any trade‑in transaction for any reason. More details
            are available from Apple’s trade-in partner for trade‑in and
            recycling of eligible devices. Restrictions and limitations may
            apply.
          </p>
          <p className="mb-2">
            To access and use all Apple Card features and products available
            only to Apple Card users, you must add Apple Card to Wallet on an
            iPhone or iPad that supports and has the latest version of iOS or
            iPadOS. Apple Card is subject to credit approval, available only for
            qualifying applicants in the United States, and issued by Goldman
            Sachs Bank USA, Salt Lake City Branch.
          </p>
          <p className="mb-2">
            If you reside in the U.S. territories, please call Goldman Sachs at
            877-255-5923 with questions about Apple Card.
          </p>
          <p className="mb-2">
            Learn more about how Apple Card applications are evaluated at
            support.apple.com/kb/HT209218.
          </p>
          <p className="mb-2">
            Apple Intelligence is available in beta on all iPhone 16 models,
            iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and
            Mac models with M1 and later, with Siri and device language set to
            Chinese (Simplified), English (Australia, Canada, India, Ireland,
            New Zealand, Singapore, South Africa, UK, or U.S.), French, German,
            Italian, Japanese, Korean, Portuguese (Brazil), or Spanish, as part
            of an iOS 18, iPadOS 18, and macOS Sequoia software update, with
            more languages coming over the course of the year, including
            Vietnamese. Some features may not be available in all regions or
            languages.
          </p>
          <p className="mb-2">
            A subscription is required for Apple Arcade, Apple Fitness+, Apple
            Music, and Apple TV+.
          </p>
          <p>
            Features are subject to change. Some features, applications, and
            services may not be available in all regions or all languages.
          </p>
        </div>

        {/* <!-- Footer Links --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 md:gap-6 md:text-lg border-t border-gray-300 pt-6 text-gray-600 footer-links-wrapper">
          {/* <!-- Shop and Learn Section --> */}
          <div>
            <h3
              className="md:font-semibold  mb-2 text-gray-800 border-b border-gray-400 md:border-none cursor-pointer flex items-center justify-between"
              onClick={() => toggleMenu(0)}
            >
              Shop and Learn
              <span id="arrow-0" className="text-gray-600 text-xl md:hidden">
                +
              </span>
            </h3>
            <ul id="menu-0" className="space-y-1 hidden md:block">
              <li>
                <a href="#" className="hover:underline">
                  Mac
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  iPad
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  iPhone
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Watch
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  TV
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Music
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  AirPods
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  HomePod
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  iPod touch
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Services Section --> */}
          <div>
            <h3
              className="md:font-semibold mb-2 text-gray-800 border-b border-gray-400 md:border-none cursor-pointer flex items-center justify-between"
              onClick={() => toggleMenu(1)}
            >
              Services
              <span id="arrow-1" className="text-gray-600 text-xl md:hidden">
                +
              </span>
            </h3>
            <ul id="menu-1" className="space-y-1 hidden md:block">
              <li>
                <a href="#" className="hover:underline">
                  Apple Music
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apple News+
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apple TV+
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apple Arcade
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apple Card
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  iCloud
                </a>
              </li>
            </ul>
            <h3
              className="md:font-semibold mt-4 mb-2 text-gray-800 border-b border-gray-400 md:border-none cursor-pointer flex items-center justify-between"
              onClick={() => toggleMenu(2)}
            >
              Account
              <span id="arrow-2" className="text-gray-600 text-xl md:hidden">
                +
              </span>
            </h3>
            <ul id="menu-2" className="space-y-1 hidden md:block">
              <li>
                <a href="#" className="hover:underline">
                  Manage Your Apple ID
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apple Store Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  iCloud.com
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Apple Store Section --> */}
          <div>
            <h3
              className="md:font-semibold mb-2 text-gray-800 border-b border-gray-400 md:border-none cursor-pointer flex items-center justify-between"
              onClick={() => toggleMenu(3)}
            >
              Apple Store
              <span id="arrow-3" className="text-gray-600 text-xl md:hidden">
                +
              </span>
            </h3>
            <ul id="menu-3" className="space-y-1 hidden md:block">
              <li>
                <a href="#" className="hover:underline">
                  Find a Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Genius Bar
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Today at Apple
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apple Camp
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Field Trip
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apple Store App
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refurbished and Clearance
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Financing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apple Trade In
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Order Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shopping Help
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- For Business Section --> */}
          <div>
            <h3
              className="md:font-semibold mb-2 text-gray-800 border-b border-gray-400 md:border-none cursor-pointer flex items-center justify-between"
              onClick={() => toggleMenu(4)}
            >
              For Business
              <span id="arrow-4" className="text-gray-600 text-xl md:hidden">
                +
              </span>
            </h3>
            <ul id="menu-4" className="space-y-1 hidden md:block">
              <li>
                <a href="#" className="hover:underline">
                  Apple and Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shop for Business
                </a>
              </li>
            </ul>
            <h3
              className="md:font-semibold mt-4 mb-2 text-gray-800 border-b border-gray-400 md:border-none cursor-pointer flex items-center justify-between"
              onClick={() => toggleMenu(5)}
            >
              For Education
              <span id="arrow-5" className="text-gray-600 text-xl md:hidden">
                +
              </span>
            </h3>
            <ul id="menu-5" className="space-y-1 hidden md:block">
              <li>
                <a href="#" className="hover:underline">
                  Apple and Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shop for College
                </a>
              </li>
            </ul>
            <h3
              className="md:font-semibold mt-4 mb-2 text-gray-800 border-b border-gray-400 md:border-none cursor-pointer flex items-center justify-between"
              onClick={() => toggleMenu(6)}
            >
              For Healthcare
              <span id="arrow-6" className="text-gray-600 text-xl md:hidden">
                +
              </span>
            </h3>
            <ul id="menu-6" className="space-y-1 hidden md:block">
              <li>
                <a href="#" className="hover:underline">
                  Apple in Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Health on Apple Watch
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Apple Values Section --> */}
          <div>
            <h3
              className="md:font-semibold mb-2 text-gray-800 border-b border-gray-400 md:border-none cursor-pointer flex items-center justify-between"
              onClick={() => toggleMenu(7)}
            >
              Apple Values
              <span id="arrow-7" className="text-gray-600 text-xl md:hidden">
                +
              </span>
            </h3>
            <ul id="menu-7" className="space-y-1 hidden md:block">
              <li>
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Environment
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Inclusion and Diversity
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Supplier Responsibility
                </a>
              </li>
            </ul>
            <h3
              className="md:font-semibold mt-4 mb-2 text-gray-800 border-b border-gray-400 md:border-none cursor-pointer flex items-center justify-between"
              onClick={() => toggleMenu(8)}
            >
              About Apple
              <span id="arrow-8" className="text-gray-600 text-xl md:hidden">
                +
              </span>
            </h3>
            <ul
              id="menu-8"
              className="space-y-1 hidden md:block border-b border-gray-400 md:border-none"
            >
              <li>
                <a href="#" className="hover:underline">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Apple Leadership
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Career Opportunities
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Ethics & Compliance
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className="mt-8 text-base text-gray-500 pt-4 text-center">
          <div className="text-left border-b md:border-gray-300 pb-5">
            More ways to shop:{' '}
            <a href="#" className="text-blue-400 hover:underline">
              Find an Apple Store
            </a>{' '}
            or{' '}
            <a href="#" className="text-blue-400 hover:underline">
              other retailer
            </a>{' '}
            near you. Or call{' '}
            <a href="#" className="text-blue-400 hover:underline">
              1-800-MY-APPLE.
            </a>
          </div>
          <div className="flex flex-col md:flex-row justify-between pt-5">
            <div>Copyright © 2025 Apple Inc. All rights reserved.</div>
            <div>
              Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site
              Map
            </div>
            <div className="pt-5 md:pt-0">United States</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
