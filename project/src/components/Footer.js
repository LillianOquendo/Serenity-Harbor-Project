import React from "react";
import NewsletterSignup from "./Newsletter";

export default function Footer() {
    return (
        <footer className=" bg-gradient-to-r from-cyan-500 to-blue-500 pt-11 ">
                <div className="container mx-auto px-4 flex justify-center items-center">
                <div className="w-full lg:w-6/12 px-4 text-center">
                
                        <NewsletterSignup/>
                    </div>
                </div>
        
            
        </footer>
    );
}
