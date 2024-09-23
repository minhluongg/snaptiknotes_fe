import Link from "next/link";
import React from "react";
// import SchemaSite from "../common/SchemaSite";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="container w-full mx-auto">
          <div className="grid grid-cols-2 py-6 pt-16 gap-x-8 gap-y-4 lg:pt-20 lg:py-8 md:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Help center
              </h2>
              <ul className="font-medium text-gray-500">
                <li className="mb-4">
                  <Link
                    href={{ pathname: "/static/contact-us" }}
                    locale="en"
                    className="hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="font-medium text-gray-500">
                <li className="mb-4">
                  <Link
                    href={{ pathname: "/static/privacy-policy" }}
                    locale="en"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href={{ pathname: "/static/terms-of-service" }}
                    locale="en"
                    className="hover:underline"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                More Apps
              </h2>
              <ul className="font-medium text-gray-500">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="px-4 py-6 mb-4 rounded-lg shadow">
            <span className="block text-sm text-center text-gray-500">
              © 2024 <Link href={{ pathname: "/" }}>SnaptikNotes.App™</Link>.
              All Rights Reserved.
            </span>
          </div>
        </div>

        {/* <SchemaSite></SchemaSite> */}
      </footer>
    </>
  );
};

export default Footer;
