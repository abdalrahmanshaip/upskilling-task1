import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={`${styles.about} relative`}>
      <img
        className=" bg-no-repeat m-auto"
        width={1000}
        height={1000}
        alt="img"
        src="https://s3-alpha-sig.figma.com/img/4344/9ec7/5ab4770fb0ff3123d0ae01db31c409a7?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yngw2hM6wnUa5zeNIRclNw2SnD7jr2wA2oUVqhpc5gLdvGCf14d24YFFk4jOrWT27qmi-mxF7B6sbYtEuLGPnQrouoN5du77PMKeuHY3PAXIFmg14hLJsR7que6bKxyHCY~3bQZVW9YMZyCCiGSiIHjHm7WJfatloEfJ1cSGnAS1P3enXE7JO92R0e6yV2j4SRRmBJOkbE9X4GaE5MoO9LVtPg-i472qOYWND2FcV02wspWNR5kHyPhHhAUqIwkJGKddKSH9hDXKycI5fkpNOoWGXtsKsUPHu-ZYi3nUA7tLN05FBQMPNEP-Nm7mnyiQ9rahr0VYHAePDSxSTgNMfw__"
      />
      <button className=" ">Help Me</button>
      <div
        className={`container absolute grid grid-cols-2 top-20  min-w-full left`}
      >
        <div className={`${styles.leftSide} about-us   w-full`}>
          <div className="line-clamp-3">
            <h1 className=" text-left  sm:text-3xl lg:text-5xl text-white">
              About us
            </h1>
            <p className=" text-left text-white w-1/2 text-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an
            </p>
            <img
              src="https://s3-alpha-sig.figma.com/img/2374/e1aa/fd6f05b7e4f0277ac5571d9a15a12ddb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PGWgWiUQIPAyb1p3dYX-urQAo8T65kMkYzTWnJEUr~lRFPZd1amZda~J6It40tJpbtO65L94tiIutcS8z5lyprcTy5FtjiOYSyY5dEvctJUntCdeH8buMddABojPaXLSBcadeBYz5KTK~w0IBnXdn~Qr1PmTUYGoJ6rwFlWxpvZjDVjaVVXY0d-hL6HvElR4ICr4QULikz5dsHFOmIbn2O7Qwp2U7taA~1RCjn9rcLBACGTg3Kj6w887KAy~-kgeUyUxPKIxwM83O7qkp5uNFyKrbZTqKySM6tDbdpfEaWJ2VcWOScsjynm72qV4Cg90OgijciXRCrg31WipzlRKwg"
              className=" bg-cover rounded-2xl mt-4"
              width={400}
              height={400}
              alt="img"
            />
          </div>
        </div>
        <div className={`${styles.rightSide} where w-full relative `}>
          <h1 className=" text-center sm:text-3xl lg:text-5xl text-white z-50">
            Where
          </h1>
          <p className=" text-right text-xs text-white w-1/2 line-clamp-3 z-50 line-clamp-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
