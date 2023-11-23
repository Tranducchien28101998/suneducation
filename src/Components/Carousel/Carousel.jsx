/* eslint-disable no-unused-vars */
// import React from "react";
import { useState, useEffect } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function Carousel() {
  const [curr, setCurr] = useState(0);
  const nextImg = () => {
    setCurr((curr) => (curr === slider.length - 1 ? 0 : curr + 1));
  };
  const prevImg = () => {
    setCurr((curr) => (curr === 0 ? slider.length - 1 : curr - 1));
  };
  const slider = [
    {
      id: 1,
      img: "https://ocean.edu.vn/images/private/2020/Tin%20t%E1%BB%A9c%20s%E1%BB%B1%20ki%E1%BB%87n/h%E1%BB%8Dc%20ti%E1%BA%BFng%20anh%20t%E1%BB%AB%20a%20%C4%91%E1%BA%BFn%20z.jpg",
    },
    {
      id: 2,
      img: "https://ocean.edu.vn/images/private/2021/z2661057668054_aaaa25974e0a88a7ec17325e43245bde.jpg",
    },
    {
      id: 3,
      img: "https://therealielts.vn/wp-content/uploads/2023/08/Ant-Edu-Network-Banner-2.jpg",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      nextImg();
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center m-auto relative">
      <button onClick={prevImg}>
        <ArrowBackIosIcon />
      </button>
      <div
        className="relative xl:w-[75%] w-[90%] block h-56 bg-cover rounded-lg md:h-96 transition duration-500 ease-in-out mt-5 my-5 "
        style={{
          backgroundImage: `url(${slider[curr].img} ) `,
        }}
      ></div>
      <button onClick={nextImg}>
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
}

export default Carousel;
