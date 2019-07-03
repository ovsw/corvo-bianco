import React from 'react'

const CTANews = () => (
  <section className="bg-gray-300">
    <div className="container mx-auto font-sans  rounded  p-4 py-8 text-center flex">
      <div className="w-1/2">
        <h2 className="font-bold break-normal text-2xl md:text-4xl">Seasonal Specials Newsletter</h2>
        <h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">
          Zero Spam. Much seasonal goodness.
        </h3>
      </div>
      <div className="w-1/2 text-center pt-4">
        <form action="#">
          <div className="max-w-sm mx-auto p-1 pr-0 flex flex-wrap items-center">
            <input
              type="email"
              placeholder="youremail@example.com"
              className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"
            />
            <button
              type="submit"
              className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-gray-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-gray-400"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
)

export default CTANews
