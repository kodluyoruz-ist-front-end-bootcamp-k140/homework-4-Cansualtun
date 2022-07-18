import React from "react";

function Home() {
  return (
    <div>
      <section>
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
            <div
              class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
              className="card hover:scale-105 duration-200"
            >
              <img
                class="absolute border-10  w-full h-full"
                src="https://blog.ofix.com/wp-content/uploads/2018/09/kirtasiye_alisverisleri_ofix_blog_1_3.jpg"
                alt="PetShop"
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl">
                Let Start Shopping!
              </h2>

              <p class="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <a
                class="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                href="/Product"
              >
                <span class="text-sm font-medium"> Get Started </span>

                <svg
                  class="w-5 h-5 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;