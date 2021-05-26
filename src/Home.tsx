import React from "react";
import AudioPlayer from './AudioPlayer'
function Home() {
  return (
    <div
      className="relative z-10 w-[94vw] h-[94vh] bg-white rounded-2xl shadow-2xl"
      style={{ boxShadow: "0px 0px 800px 500px #00000099" }}
    >
      <svg
        className="absolute top-16 SS:top-20 sm:top-16 md:top-20 left-0 w-[calc(848px*(2/6))] h-[calc(398px*(2/6))] SS:w-[calc(848px*(3/6))] SS:h-[calc(398px*(3/6))] Sl:w-[calc(848px*(3.5/6))] Sl:h-[calc(398px*(3.5/6))] sm:w-[calc(848px*(4/6))] sm:h-[calc(398px*(4/6))] md:w-[calc(848px*(5/6))] md:h-[calc(398px*(5/6))] lg:w-[calc(848px*(1))] lg:h-[calc(398px*(1))]"
        width="1536"
        height="692"
        viewBox="0 0 768 346"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M-8 312L-4.20888 310.523C37.9687 294.086 75.5363 267.675 105.28 233.551V233.551C118.058 218.89 129.276 202.939 138.752 185.955L177.5 116.5L204.896 65.8516C236.893 6.69546 321.983 7.29309 353.147 66.8928L360.162 80.3103C386.454 130.594 422.551 175.102 466.323 211.21V211.21C507.408 245.101 554.498 270.967 605.14 287.459L624.74 293.841C661.786 305.906 700.116 313.599 738.948 316.764L840 325"
            stroke="white"
            stroke-width="10"
          />
          <path
            d="M-8 312L-4.20888 310.523C37.9687 294.086 75.5363 267.675 105.28 233.551V233.551C118.058 218.89 129.276 202.939 138.752 185.955L177.5 116.5L204.896 65.8516C236.893 6.69546 321.983 7.29309 353.147 66.8928L360.162 80.3103C386.454 130.594 422.551 175.102 466.323 211.21V211.21C507.408 245.101 554.498 270.967 605.14 287.459L624.74 293.841C661.786 305.906 700.116 313.599 738.948 316.764L840 325"
            stroke="url(#paint0_radial)"
            stroke-width="10"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="-24.5417"
            y="0.836609"
            width="879.11"
            height="345.14"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="7" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <radialGradient
            id="paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(278 98) rotate(90.8021) scale(250.024 532.715)"
          >
            <stop stop-color="#00C2FF" />
            <stop offset="0.223958" stop-color="#A5FAFF" />
            <stop offset="0.446609" stop-color="#00FFB2" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <div
        className="absolute font-round top-6 left-14 SS:top-16 SS:left-16 Sl:top-10 sm:top-14 md:top-10 Sl:left-20 text-blueGray-900 text-[125px] Sl:text-[100px] sm:text-[125px] md:text-[150px] lg:text-[200px]"
        style={{ textShadow: "28px 26px 10px rgba(86, 86, 86, 0.26)" }}
      >
        Ohm
      </div>
      <div
        className="absolute z-[-1] w-0 h-0 rounded-full -left-10 -top-10 bg-rose-500"
        style={{
          background:
            "radial-gradient(#fff 0%,#00fff070 10%,rgba(170, 252, 255, 0.5) 64.58%,rgb(255, 255, 255) 100%)",
          boxShadow: "0px 0px 800px 800px #902ff033",
        }}
      ></div>
      <div
        className="absolute z-[-1] w-0 h-0 rounded-full right-10 top-10 bg-rose-500"
        style={{
          background:
            "radial-gradient(#fbff00 0%,#ffca1a 64.58%,rgba(255, 255, 255, 0.16) 100%)",
          boxShadow: "0px 0px 800px 402px #ffe60099",
        }}
      ></div>
      <div
        className="absolute z-[-1] w-0 h-0 rounded-full left-40 -bottom-10 bg-rose-500"
        style={{
          background:
            "radial-gradient(#000000 0%,#646464 64.58%,rgba(203, 203, 203, 0.16) 100%);",
          boxShadow: "0px 0px 800px 412px rgba(48, 48, 48, 0.27)",
        }}
      ></div>
      <div
        className="absolute z-[-1] w-0 h-0 rounded-full right-40 -bottom-10 bg-rose-500"
        style={{
          background:
            "radial-gradient(#000000 0%,#646464 64.58%,rgba(203, 203, 203, 0.16) 100%);",
          boxShadow: "0px 0px 800px 412px rgba(255, 255, 255, 1)",
        }}
      ></div>
      <section className="lg:pt-32 lg:pr-32 Xl:pr-20 Xl:pt-28 md:pr-20 md:pt-72 sm:pr-10 sm:pt-[15rem] Sl:pr-16 Sl:pt-44 SS:pr-6 SS:pt-56 pr-4 pt-48">
        <article className="relative z-20 grid grid-cols-1 ml-auto w-max gap-y-4">
          <h1 className="px-2 py-1 text-sm text-white rounded-lg bg-blueGray-800 sm:bg-yellow-200 Sl:text-base sm:shadow-xl Xl:shadow-none Xl:text-lg lg:text-xl sm:text-amber-600">
            The Sound of infinity.
          </h1>
          <h1 className="px-2 py-1 text-sm text-white rounded-lg bg-blueGray-800 sm:bg-yellow-200 Sl:text-base sm:shadow-xl Xl:shadow-none Xl:text-lg lg:text-xl sm:text-amber-600">
            The Sound Which lies in everything.
          </h1>
          <h1 className="px-2 py-1 text-sm text-white rounded-lg bg-blueGray-800 sm:bg-yellow-200 Sl:text-base sm:shadow-xl Xl:shadow-none Xl:text-lg lg:text-xl sm:text-amber-600">
            The Sound Which is itself a mistery.
          </h1>
          <h1 className="px-2 py-1 text-sm text-white rounded-lg bg-blueGray-800 sm:bg-yellow-200 Sl:text-base sm:shadow-xl Xl:shadow-none Xl:text-lg lg:text-xl sm:text-amber-600">
            The Sound from which mind experiences <br/> calmness and peace .
          </h1>
          <h1 className="px-2 py-1 text-sm text-white rounded-lg bg-blueGray-800 sm:bg-yellow-200 Sl:text-base sm:shadow-xl Xl:shadow-none Xl:text-lg lg:text-xl sm:text-amber-600">
            The Sound which Resembles<br/> the dance of infinite .
          </h1>
        </article>
      </section>
      <AudioPlayer/>
    </div>
  );
}
export default Home;
