import React from "react";
import styles from "./Testymonials.module.css";
import Nameofpage from "./Nameofpage";
import { IoMdStar } from "react-icons/io";

function Testymonials() {
  return (
    <div className=" Testymonials grid justify-center">
      <h1 className=" mt-10 mb-10">
        <Nameofpage title={"Testymonials"} />
      </h1>
      <div className=" container">
        <div className=" grid sm:grid-cols-1 lg:grid-cols-2 gap-10 lg:grid-rows-2 justify-center">
          <div
            className={`${styles.media_width} card text-left border border-lightBlue rounded-3xl lg:w-[577px]  lg:h-[233px]`}
          >
            <div className=" flex justify-center  items-center">
              <img
                className=" rounded-full w-[80px] h-[80px] mr-4 mb-20 ml-5"
                src="https://s3-alpha-sig.figma.com/img/c4ed/f102/2e8d8e4f5e65a3d48109b8bdbea95a8b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rzl-cwKgd7fLmMHHxkuiKDfMF~M~1UXvGQXz9wfczYQgYTS3S5ab49wl5t4IkNkdDNknoq8fTBmHUYn4O~RWmZWEzU8pB~t7fMIxC~viUQ~-HEEWMrb~u6lNNGf6qXF4TaxHVEf2ERbSCK~tQ1LzxqAD~gawJ2tC1Gp2FTB~TwuEW0OKK~esDvnKbeHR1PXxFDGvblAEGKBsze4oWNBH0ANic5C3NNAWvc21jh1Rdf17rvKJDzg3p5Xaeo8asiF9Gn4kTitBbm1K5PBb6UaU8c2~pwj7Zsskt8ETrrGlXXJzL-4wDHRAvhLK~9dvhRjsFsvanG1oidA5kqhNHsOdZA__"
                alt="img"
              />
              <div className="title mt-6">
                <h1 className=" text-lightBlue text-[18px] mb-2">
                  Courtney Henry
                </h1>
                <p className=" text-[14px] text-boldBlue font-[400] pr-5 leading-normal">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div className=" flex">
                  <IoMdStar size={18} className=" text-lightBlue mt-5 flex" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.media_width} card text-left border border-lightBlue rounded-3xl lg:w-[577px]  lg:h-[233px]`}
          >
            <div className=" flex justify-center  items-center">
              <img
                className=" rounded-full w-[80px] h-[80px] mr-4 mb-20 ml-5"
                src="https://s3-alpha-sig.figma.com/img/c4ed/f102/2e8d8e4f5e65a3d48109b8bdbea95a8b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rzl-cwKgd7fLmMHHxkuiKDfMF~M~1UXvGQXz9wfczYQgYTS3S5ab49wl5t4IkNkdDNknoq8fTBmHUYn4O~RWmZWEzU8pB~t7fMIxC~viUQ~-HEEWMrb~u6lNNGf6qXF4TaxHVEf2ERbSCK~tQ1LzxqAD~gawJ2tC1Gp2FTB~TwuEW0OKK~esDvnKbeHR1PXxFDGvblAEGKBsze4oWNBH0ANic5C3NNAWvc21jh1Rdf17rvKJDzg3p5Xaeo8asiF9Gn4kTitBbm1K5PBb6UaU8c2~pwj7Zsskt8ETrrGlXXJzL-4wDHRAvhLK~9dvhRjsFsvanG1oidA5kqhNHsOdZA__"
                alt="img"
              />
              <div className="title mt-6">
                <h1 className=" text-lightBlue text-[18px] mb-2">
                  Courtney Henry
                </h1>
                <p className=" text-[14px] text-boldBlue  font-[400] pr-5   leading-normal">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div className=" flex">
                  <IoMdStar size={18} className=" text-lightBlue mt-5 flex" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.media_width} card text-left border border-lightBlue rounded-3xl lg:w-[577px]  lg:h-[233px]`}
          >
            <div className=" flex justify-center  items-center">
              <img
                className=" rounded-full w-[80px] h-[80px] mr-4 mb-20 ml-5"
                src="https://s3-alpha-sig.figma.com/img/c4ed/f102/2e8d8e4f5e65a3d48109b8bdbea95a8b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rzl-cwKgd7fLmMHHxkuiKDfMF~M~1UXvGQXz9wfczYQgYTS3S5ab49wl5t4IkNkdDNknoq8fTBmHUYn4O~RWmZWEzU8pB~t7fMIxC~viUQ~-HEEWMrb~u6lNNGf6qXF4TaxHVEf2ERbSCK~tQ1LzxqAD~gawJ2tC1Gp2FTB~TwuEW0OKK~esDvnKbeHR1PXxFDGvblAEGKBsze4oWNBH0ANic5C3NNAWvc21jh1Rdf17rvKJDzg3p5Xaeo8asiF9Gn4kTitBbm1K5PBb6UaU8c2~pwj7Zsskt8ETrrGlXXJzL-4wDHRAvhLK~9dvhRjsFsvanG1oidA5kqhNHsOdZA__"
                alt="img"
              />
              <div className="title mt-6">
                <h1 className=" text-lightBlue text-[18px] mb-2">
                  Courtney Henry
                </h1>
                <p className=" text-[14px] text-boldBlue  font-[400] pr-5   leading-normal">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div className=" flex">
                  <IoMdStar size={18} className=" text-lightBlue mt-5 flex" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.media_width} card text-left border border-lightBlue rounded-3xl lg:w-[577px]  lg:h-[233px]`}
          >
            <div className=" flex justify-center  items-center">
              <img
                className=" rounded-full w-[80px] h-[80px] mr-4 mb-20 ml-5"
                src="https://s3-alpha-sig.figma.com/img/c4ed/f102/2e8d8e4f5e65a3d48109b8bdbea95a8b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Rzl-cwKgd7fLmMHHxkuiKDfMF~M~1UXvGQXz9wfczYQgYTS3S5ab49wl5t4IkNkdDNknoq8fTBmHUYn4O~RWmZWEzU8pB~t7fMIxC~viUQ~-HEEWMrb~u6lNNGf6qXF4TaxHVEf2ERbSCK~tQ1LzxqAD~gawJ2tC1Gp2FTB~TwuEW0OKK~esDvnKbeHR1PXxFDGvblAEGKBsze4oWNBH0ANic5C3NNAWvc21jh1Rdf17rvKJDzg3p5Xaeo8asiF9Gn4kTitBbm1K5PBb6UaU8c2~pwj7Zsskt8ETrrGlXXJzL-4wDHRAvhLK~9dvhRjsFsvanG1oidA5kqhNHsOdZA__"
                alt="img"
              />
              <div className="title mt-6">
                <h1 className=" text-lightBlue text-[18px] mb-2">
                  Courtney Henry
                </h1>
                <p className=" text-[14px] text-boldBlue  font-[400] pr-5  leading-normal pr-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div className=" flex">
                  <IoMdStar size={18} className=" text-lightBlue mt-5 flex" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                  <IoMdStar size={18} className=" text-lightBlue mt-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testymonials;
