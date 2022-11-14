import React from "react";
import Hero from "../assets/Hero.svg";
import Image from "../assets/Image.svg";

const Jumbotron = () => {
  return (
    <>
      <div
        class="bg-cover bg-center h-auto text-white py-24 px-10 object-fill"
        style={{
          backgroundImage: `url(${Hero})`,
        }}
      >
        <div class="grid grid-cols-2 gap-2">
          <div className="flex justify-around">
            <div class="md:w-1/2">
              {/* <p class="font-bold text-sm uppercase">Services</p> */}
              <p class="text-3xl font-bold">Reselling lebih Untung dengan Penghasilan Lebih dari 10jt/ bulan</p>
              <p class="text-xl font-thin mb-10 leading-none">
                Dapatkan harga khusus premium  yang lebih murah hingga 60%+  dengan menjadi Reseller Premium
              </p>
              {/* <a
            href="#"
            class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
          >
            Contact us
          </a> */}
              <a className="bg-white hover:text-red-800 text-red-500 font-semibold rounded-lg py-3 px-10">
                Daftar Sekarang
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img className="" src={Image} alt="" />
          </div>
        </div>
      </div>
      {/* <div class="md:container md:mx-auto">
        aaaa
      </div> */}
    </>
  );
};

export default Jumbotron;
