import React from "react";
//import { Button } from "@material-tailwind/react";

function Homepage(){

    return(
        <div >
          
    {/* <div className="flex w-max gap-4">
          <Button variant="gradient" color="indigo">Button</Button>
          </div> */}
            <div>
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-black md:mb-6 lg:text-5xl py-8">Welcome!</h2>
      
            <p class="mx-auto max-w-screen-md text-center text-black md:text-xl">We at Serenity Harbor are committed to the wellbeing 
            of our Brooklyn, NY residents. We assist with housing, food insecurity, legal matters, healthcare and housing. </p>
            <br></br>
            <p class="mx-auto max-w-screen-md text-center text-black md:text-xl"> Let us know how we can help you.</p>
          </div>
          {/* <!-- text - end --> */}
      
          <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {/* <!-- card - start --> */}
            <div>
              <a href="/consultations" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                <img src="https://i.ibb.co/k4FxSgh/abuse-image10.jpg" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              </a>
      
              <div class="flex items-start justify-between gap-2 px-2">
                <div class="flex flex-col">
                  <a href="/consultations" class="text-lg font-bold text-black transition duration-100 lg:text-xl text-center hover:text-customTeal">Request A Consultation</a>
                  
                </div>
      
            
              </div>
            </div>
            {/* <!-- card - end --> */}
      
            {/* <!-- card - start --> */}
            <div>
              <a href="/id_abuse" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                <img src="https://i.ibb.co/VCzWvmy/abuse-image8.jpg" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div class="flex items-start justify-between gap-2 px-2">
                <div class="flex flex-col">
                  <a href="/id_abuse" class="text-lg font-bold text-black transition duration-100 hover:text-customTeal lg:text-xl">Identify Abuse</a>
                
                </div>
    
            
              </div>
            </div>
            {/* <!-- card - end --> */}
      
            {/* <!-- card - start --> */}
            <div>
              <a href="/agencies" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                <img src="https://i.ibb.co/WPz2f1n/abuse-image3.jpg"  class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div class="flex items-start justify-between gap-2 px-2">
                <div class="flex flex-col">
                  <a href="/agencies" class="text-lg font-bold text-black transition duration-100 hover:text-customTeal lg:text-xl">Locate Resources in Brooklyn, NY</a>
              
                </div>
      
              </div>
            </div>
            {/* <!-- card - end --> */}
      
            {/* <!-- card - start --> */}
            <div>
              <a href="safety_plan" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                <img src="https://i.ibb.co/9nzBQ4z/abuse-image11.jpg" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div class="flex items-start justify-between gap-2 px-2">
                <div class="flex flex-col">
                  <a href="#" class="text-lg font-bold text-black transition duration-100 hover:text-customTeal lg:text-xl">Create a Safety Plan</a>
                
                </div>
      
              </div>
            </div>
            {/* <!-- card - end --> */}
          </div>
        </div>
      </div></div>
    )
}
export default Homepage;

