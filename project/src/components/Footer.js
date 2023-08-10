import React from "react";
import NewsletterSignup from "./Newsletter";

export default function Footer() {
    return (
        <footer >
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: "80px" }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >

                </svg>
            </div>
            
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold">
                            Let's keep in touch!
                        </h4>
                        <NewsletterSignup/>
                    </div>
                </div>
                
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-gray-600 font-semibold py-1">
                            Copyright © {new Date().getFullYear()}{" "}Tailwind Starter Kit by{" "}
                            <a
                                href="https://www.creative-tim.com"
                                className="text-gray-600 hover:text-gray-900"
                            >
                                Creative Tim
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
