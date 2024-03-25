import React from "react";
import Nameofpage from "./Nameofpage";
import styles from "./Services.module.css";

function Services() {
  return (
    <div className={`${styles.services} flex justify-center`}>
      <div className=" container">
        <h1 className=" relative">
          <Nameofpage title={"Services"} />
        </h1>
        <div className=" grid sm:grid-col-1 text-center lg:grid-cols-3 gap-5">
          <article className=" overflow-hidden rounded-2xl shadow-2xl transition text-left">
            <img
              alt=""
              src="https://s3-alpha-sig.figma.com/img/3b2c/d230/b51e46d3d5bb005d1e122864372c48f7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RnuOWrsAbApH0GXd5uEASaneQvPTdPKHDBLjjEqI6dYkXhe55FSLg-nZXpvWeGypE15NR7Z7euAvE50Hj9rzuWfwNWJLGPbopEbKe~YHwdawq9J8eufcfb9714Ml0Hjo-zBxR~MO9O3vTye4nUUtD8l5~HHvkolV9ANZWhSOXUgDkID5IbS7QbobLz2E2DLpANp9h9BqV4PbBXN7krJ2oJ~Kg7sPOT~9PbXqWz9ax7UPKyvKPCTW66C-5OqvmYHvIza8U~vkpJGOKn5vhflidS4GixPelw9-QW0w6qGlAiRJfV7n90F6Pt3pvW5dNgj-1DB0W1Vlo38xjJFOp-c2EQ__"
              className=" h-96 w-full object-cover"
            />
            <div className="bg-white p-4 sm:p-6">
              <h3 className="mt-0.5 text-lg text-boldBlue">Lorem Ipsum</h3>
              <p className="mt-2  text-sm/relaxed font-light  text-boldBlue">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl shadow-2xl transition text-left">
            <img
              alt=""
              src="https://s3-alpha-sig.figma.com/img/2f88/a637/fba758a9dda73825ff383b42c06233e8?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PxomNfCLFKc4E6Tya0gDho0OxpO7i9~i8nXv~3WK9qs2w7X1hhdP6iYG8bc0VzPBCjushUPbxj~2sH3MfaMrp51Zs1t8hXGmW2CZweajS71yS2M4FrkOedMAAsiCBIMW3FC~5-QjGXw-jV-ITnAU5t7pmXWMSliejMqZD8VDSIvG9L8DMS6xaR4jpB8rRGmGJhaiwuEFklUOkYstHgNQHGch4Q2BIff7jMTFbyus-6I-0Su2PwEZDquyTP1Owo06ZJuI-2KuTA6Dwu8pddHgKFfW0AMBFXS~iHti9AVpTSNcKOLQIdtpArBLQCmUX9tlvRiAko6A~PaiT5SDAdatiQ__"
              className=" h-96 w-full object-cover"
            />
            <div className="bg-white p-4 sm:p-6">
              <h3 className="mt-0.5 text-lg text-boldBlue">Lorem Ipsum</h3>
              <p className="mt-2  text-sm/relaxed font-light  text-boldBlue">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl shadow-2xl transition text-left">
            <img
              alt=""
              src="https://s3-alpha-sig.figma.com/img/03a4/8f10/5c96be21672060676b836291c441e6b3?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=STHBwG~YXplaKfegIezjwKRHZxQXdNnjXcqan9EnKxxqaHSRh~okCk8hePgUjXjc6wb2dnLStYKwneYJVEa-~fr6XHS3nA-jlVbGK89ne8GhJ95S5WMI4CehiOm-9Mrua9LPiON1Ze7D6eV-xSgQmQygz5pCVhTDKENqQuknTjD-k01ocIB-BlbGz~gdUp53vTtmCkMxVL14RKN~o2ATsApaFrL8fThIlJtkgAcVSlPjmkiiO-eDvD8b7QKy05C8j59odRiW3wfy43PMYSUo6Vp~tXqjBnpyBD~RNQgkZQEmsO5DbUcryA3AbNmMnc5h-dh8PicqLoU4iZWu4yua5Q__"
              className=" h-96 w-full object-cover"
            />
            <div className="bg-white p-4 sm:p-6">
              <h3 className="mt-0.5 text-lg text-boldBlue">Lorem Ipsum</h3>
              <p className="mt-2  text-sm/relaxed font-light  text-boldBlue">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>
            </div>
          </article>
        </div>
        <button className=" w-[280px] h-[86px] bg-lightBlue rounded-full text-white block m-auto mt-10">
          Help Me
        </button>
      </div>
    </div>
  );
}

export default Services;
