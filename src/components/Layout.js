import React from "react";
import styles from "./Layout.module.css";
import { TbCarSuv } from "react-icons/tb";
function Layout() {
  return (
    <div className={`${styles.layout}`}>
      <img
        src="https://s3-alpha-sig.figma.com/img/e27d/e81e/bcd4ea40fd6f4f4dff686cafacecaf9e?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kkgl~1v27OkkDAYxqS7iT51LkkFz-OMSByLV26KCWxdLsvBVOtWTGBuOULibMiXz7fitRbVDJhGAH~HEe6taUdqRA9R1awoWtP~GdXV85puhFHNtxheQ3TU6xQnx~YiPghNugsOWwWsLxB9AOdicnbDZCKA7y-9pTUeXrsFZUEwSU2XkGgURge9ersctEo0BjcBZlBQe-cqbCR0A-1TM3SRtMJ~oyWXzWk88WT9SAH0DAHmm6STw22jkrttIMSGBhEE6sm6hrNQrYM7n17oAEr-mqf~B9yfukvcPOiTuX8S6tqt-piLFTeKJXhjfu-4mu-4Xn4aD9t11PHS474Q3xA"
        className=" w-2/3"
        alt="img"
      />
      <div className={`${styles.content} mt-5 z-50 `}>
        <header>
          <TbCarSuv
            className=" absolute text-[#6D91EE] left-4 lg:left-14"
            size={50}
          />
          <h1 className=" text-4xl text-[#6D91EE]">Round Rock</h1>
          <span className=" text-2xl text-[#6D91EE] flex justify-center">
            <p className=" mr-2">Trush </p>
            <p>Hauling</p>
          </span>
        </header>
        <div className="title mt-4 lg:mt-28 text-center ">
          <button className=" bg-[#6D91EE] px-5 py-2 rounded-3xl text-white">
            Experts
          </button>
          <h1 className=" mt-4 lg:text-6xl text-2xl text-gray-600 font-light">
            Lorem
          </h1>
          <span className=" mt-2 text-gray-700 lg:text-7xl text-2xl ">
            Lorem Lorem
          </span>
          <p className=" text-xs w-80 font-bold mt-5 ml-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="bg-[#5180F6] px-16 mt-5 py-4 rounded-3xl text-white">
            Help Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Layout;
