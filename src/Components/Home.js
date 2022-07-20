import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
          <div className="card hover:scale-105 duration-200">
            <img
              className="h-full w-full"
              src="https://blog.ofix.com/wp-content/uploads/2018/09/kirtasiye_alisverisleri_ofix_blog_1_3.jpg"
              alt="PetShop"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Let Start Shopping!
            </h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>

            <a
              className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
              href="/Product"
            >
              <Link to="/Product">
                <span className="text-sm font-medium"> Get Started </span>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
