import React, { useEffect, useState } from "react";
import Nameofpage from "./Nameofpage";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      phone,
      name,
    };
    fetch(`http://upskilling-egypt.com:3001/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(
        (data) => (
          name,
          email,
          phone
            ? alert(`Email sent successfully ${name}`)
            : alert(` pleas put all your information`)
        )
      );
  };

  return (
    <div className="">
      <h1 className=" mt-10 mb-10">
        <Nameofpage title={"Contact Us"} />
      </h1>
      <div className=" container">
        <div className=" flex justify-center">
          <div className="inputs grid border-none ml-auto">
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
                type="text"
                placeholder="Name"
                className=" bg-[#CEDCFF] font-bold rounded-full lg:p-5 p-1 border-none focus:outline-none mb-4 lg:w-full w-[170px] text-[12px]"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                type="text"
                placeholder="Email"
                className=" bg-[#CEDCFF] font-bold rounded-full lg:p-5 p-1  border-none focus:outline-none mb-4 lg:w-full w-[170px] text-[12px]"
              />
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                name="phone"
                type="number"
                placeholder="Phone"
                className=" bg-[#CEDCFF] font-bold rounded-full lg:p-5 p-1 border-none focus:outline-none lg:w-full w-[170px] text-[12px]"
              />
              <button
                type="submit"
                className=" border-4 border-[#5180F6] w-fit mt-10 mb-10 m-auto px-10 py-3 rounded-full font-light block"
              >
                Send
              </button>
            </form>
          </div>
          <div className=" mt-[50px] mr-auto ml-10">
            <div className="flex">
              <AiOutlineMail className=" text-[#5180F6] mr-4" size={20} />
              <p className=" lg:text-[12px] text-left mb-4 text-[10px] text-[#333333] font-[400]">
                upskilling.eg1@gmail.com
              </p>
            </div>
            <div className="flex">
              <MdOutlinePhone size={20} className="text-[#5180F6] mr-4 " />
              <p className=" lg:text-[12px] text-left text-[10px] text-[#333333] font-[400]">
                +20 115 493 2137
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#0C1E49] w-full h-[145px]"></div>
    </div>
  );
}

export default ContactUs;
