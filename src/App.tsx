import React, { useEffect, useRef, useState } from "react";
// import Home from "./Home";
import { RefreshIcon } from "@heroicons/react/outline";
function App() {
  const [randomNumber, setRandomNumber] = useState(
    Math.ceil(Math.random() * 10)
  );
  const [blocks, setBlocks] = useState(createRandomNumberedList);
  interface randomNumberBlocks {
    number: number;
    isRandom: boolean;
  }

  function createRandomNumberedList() {
    let numberedBlock: any[] = [];
    for (let i = 1; i <= 10; i++) {
      numberedBlock = [
        {
          number: i,
          isRandom: i === randomNumber ? true : false,
        },
        ...numberedBlock,
      ];
    }
    return numberedBlock;
  }
  function changeColorOnClick(y: React.MouseEvent, block: randomNumberBlocks) {
    block.isRandom
      ? // If it is Random then On Click it's Color will Change to Dark Green
        (y.currentTarget.classList.replace("bg-emerald-400", "bg-emerald-900"),
        y.currentTarget.classList.replace("text-white", "text-cyan-400"))
      : // If it is not Random then On Click it's Color will Change to White
        (y.currentTarget.classList.replace("bg-emerald-400", "bg-white"),
        y.currentTarget.classList.replace("text-white", "text-rose-600"));
  }
  useEffect(() => {
    setBlocks(createRandomNumberedList());
  }, [randomNumber]);
  return (
    <>
      <div className="w-full h-screen bg-green-100 grid grid-cols-2 place-items-center">
        {/*<Home />*/}
        <button
          className="absolute"
          onClick={() => {
            setRandomNumber(Math.ceil(Math.random() * 10));
          }}
        >
          <RefreshIcon className="text-emerald-600 w-10 h-10" />
        </button>
        {blocks.reverse().map((block, index) => {
          return (
            <button
              id="Button"
              key={index}
              className={`focus:outline-none bg-emerald-400 grid place-items-center text-xl w-[4ch] font-jetMono rounded-full text-white`}
              onClick={(y) => {
                changeColorOnClick(y, block);
              }}
            >
              {block.number}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default App;
