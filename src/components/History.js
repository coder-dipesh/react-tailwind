import { useState } from "react";

const History = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const handleLeft = () => {
    setLeft(left + 1);
  };

  const handleRight = () => {
    setRight(right + 1);
  };

  const history = [];
  for (let i = 0; i < left; i++) {
    history.push("L , ");
  }
  for (let i = 0; i < right; i++) {
    history.push("R , ");
  }

  return (
    <>
      <div class="max-w-sm rounded overflow-hidden shadow-lg h-60 bg-slate-200  mx-auto my-auto ">
        <div class="flex justify-center py-5">
          <span class="px-4 py-2 rounded-full text-gray-500 bg-gray-300 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
            {left}
          </span>
          <button
            type="button"
            class="inline-block px-6 mx-5 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            onClick={handleLeft}
            id="left"
          >
            Left
          </button>
          <button
            type="button"
            class="inline-block mx-5 px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
            onClick={handleRight}
          >
            Right
          </button>
          <span class="px-4 py-2 rounded-full text-gray-500 bg-gray-300 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
            {right}
          </span>
        </div>
        {/* History */}
        <div class="row px-4">
          <div class="col-12 font-semibold">Button Press History :</div>
          <span class="py-2  flex-wrap-reverse text-blue-900 font-semibold text-sm align-center ">{history}</span>
        </div>
      </div>
    </>
  );
};

export default History;
