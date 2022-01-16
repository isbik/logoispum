import Image from "next/image";
import Header from "../components/Header";
import banner from "../assets/banner.png";

import london from "../assets/london.png";
import spain from "../assets/spain.png";
import america from "../assets/america.png";
import france from "../assets/france.png";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <div className="mb-24 relative mx-auto container">
        <div className="w-full h-full absolute">
          <Image
            className="md:rounded-xl"
            src={banner}
            alt="banner"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className="sm:p-20 py-20 p-4 relative z-1">
          <div className="mb-12 max-w-md">
            <h1 className="mb-12 font-bold text-5xl">
              Easy way to find a perfect property
            </h1>
            <p className="text-xl text-gray-600">
              We provide a complete service for the sale, purchase or rental of
              real estate.
            </p>
          </div>

          <button className="backdrop-blur-sm bg-white/80 tracking-widest font-semibold py-2 px-8 bg-white rounded-t-lg uppercase">
            Rent
          </button>
          <button className="tracking-widest font-semibold py-2 px-8 uppercase text-gray-500">
            Buy
          </button>
          <button className="tracking-widest font-semibold py-2 px-8 uppercase text-gray-500">
            Sell
          </button>

          <div className="backdrop-blur-sm p-6 flex flex-col gap-8 md:gap-0 md:flex-row bg-white/80 rounded-b-lg rounded-r-lg max-w-fit">
            <div className="mr-8 pr-4 md:border-r-2 border-gray-300">
              <p className="font-bold">Location</p>
              <div className="flex items-center justify-between">
                <span className="mr-8">Select your city</span>
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 7.66669C13 12.3334 7 16.3334 7 16.3334C7 16.3334 1 12.3334 1 7.66669C1 6.07539 1.63214 4.54926 2.75736 3.42405C3.88258 2.29883 5.4087 1.66669 7 1.66669C8.5913 1.66669 10.1174 2.29883 11.2426 3.42405C12.3679 4.54926 13 6.07539 13 7.66669Z"
                    stroke="#8F90A6"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 9.66669C8.10457 9.66669 9 8.77126 9 7.66669C9 6.56212 8.10457 5.66669 7 5.66669C5.89543 5.66669 5 6.56212 5 7.66669C5 8.77126 5.89543 9.66669 7 9.66669Z"
                    stroke="#8F90A6"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="mr-8 pr-4 md:border-r-2 border-gray-300">
              <p className="font-bold">Property type</p>
              <div className="flex justify-between items-center">
                <span className="mr-8">Choose Property Type</span>
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="#8F90A6"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="mr-16">
              <p className="font-bold">Price Range</p>
              <div>Choose Price Range</div>
            </div>
            <button className="flex items-center justify-center rounded-lg w-12 h-12 bg-blue-500 aspect-square">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.3684 18.2632C14.7286 18.2632 18.2632 14.7286 18.2632 10.3684C18.2632 6.0083 14.7286 2.4737 10.3684 2.4737C6.00829 2.4737 2.47369 6.0083 2.47369 10.3684C2.47369 14.7286 6.00829 18.2632 10.3684 18.2632Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.2369 20.2369L15.9441 15.9441"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mb-24 container px-4 mx-auto">
        <h2 className="mx-auto max-w-md mb-20 text-4xl font-bold text-center">
          We are available in many well-known countries
        </h2>

        <div className="grid place-items-center justify-center sm:flex  gap-8">
          <div className="m-auto relative">
            <p className="text-xl text-center w-full top-10 z-10 font-bold absolute uppercase">
              america
            </p>
            <Image src={america} />
          </div>
          <div className="m-auto relative">
            <p className="text-xl text-center w-full top-10 z-10 font-bold absolute uppercase">
              london
            </p>
            <Image src={london} />
          </div>
          <div className="m-auto relative">
            <p className="text-xl text-center w-full top-10 z-10 font-bold absolute uppercase">
              spain
            </p>
            <Image src={spain} />
          </div>
          <div className="m-auto relative">
            <p className="text-xl text-center w-full top-10 z-10 font-bold absolute uppercase">
              france
            </p>
            <Image src={france} />
          </div>
        </div>
      </div>

      <div className="mb-24 container px-4 mx-auto">
        <div className="mb-20 flex justify-between items-center">
          <h2 className="text-4xl font-bold">Recently added</h2>
          <button className="font-bold text-blue-500">See all</button>
        </div>

        <div className="columns-1 lg:columns-2 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              className="flex flex-col sm:flex-row gap-8 mb-4 p-4 border border-gray-200 rounded-2xl"
              key={index}
            >
              <Image
                src={require(`../assets/place${index + 1}.png`)}
                objectFit="contain"
              ></Image>

              <div className="flex flex-grow flex-col">
                <h3 className="mb-4 flex-grow text-2xl font-bold">
                  103/143 West Street, Crows Nest
                </h3>
                <div className="mb-4 flex flex-grow gap-4">
                  <span className="text-gray-500">10 Bedrooms</span>
                  <span className="text-gray-500">150m</span>
                  <span className="text-gray-500">2 Garage</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Posted by X Builder</span>
                  <span className="p-1 px-2 bg-gray-500 text-white rounded-lg">
                    $56,565
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-sky-100 md:rounded-xl mb-24 relative mx-auto container px-4">
        <div className="w-full h-full absolute">
          <Image
            className="rounded-xl"
            src={require("../assets/building.png")}
            alt="banner"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
        <div className="sm:p-20 py-20 relative z-1">
          <div className="mb-12 max-w-md">
            <h1 className="mb-12 font-bold text-5xl">
              Find your best Real Estate
            </h1>
            <p className="text-xl text-gray-600">
              We provide a complete service for the sale, purchase or rental of
              real estate.
            </p>
          </div>
          <button className="bg-blue-500 rounded-xl px-8 py-2 text-white uppercase tracking-widest">
            Contact us
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
