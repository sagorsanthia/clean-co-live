import React from "react";
import BucketGirl from "../../assets/images/bucketgirl.png";
const Landing = () => {
  return (
    <>
      <div class="hero lg:h-[60vh]  bg-accent">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <p class="text-xl">Best Quality </p>
            <h1 class="lg:text-5xl text-3xl font-bold">
              Professional Cleaning Service
            </h1>
            <p class="py-6 max-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
            <button class="btn btn-primary">Get Started</button>
          </div>
          <div className="h-[60vh] shrink-0">
            <img src={BucketGirl} class="max-w-sm " alt=" " />
          </div>
        </div>
      </div>
      <div className="rounded mx-auto shadow-2xl w-5/6 p-10 relative mt-[-50px] bg-base-100">
        <h1 className="text-2xl text-primary mb-5">Get Free Estimate</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-primary mt-5">Get a Quote</button>
      </div>
    </>
  );
};

export default Landing;
