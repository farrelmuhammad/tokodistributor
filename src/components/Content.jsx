import React from 'react'
import Hero from "../assets/Hero.svg";
import ContentImg from "../assets/Content.svg";

const Content = () => {
    return (
        <>
            <div
                class="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill"
            // style={{
            //     backgroundImage: `url(${Hero})`,
            // }}
            >
                <div class="grid grid-cols-2 gap-2">
                    <div className="flex justify-around">
                        <div class="md:w-1/2">
                            {/* <p class="font-bold text-sm uppercase">Services</p> */}
                            <p class="text-3xl text-black font-bold">Harga lebih murah hingga 60%+</p>
                            <p class="text-xl text-black font-thin mb-10 leading-none">
                                Dapatkan harga khusus Reseller Premium yang lebih murah hingga 60%+ dari harga normal. Dengan harga lebih murah tentunya margin kamu bisa lebih besar, dong!
                            </p>
                            {/* <a
            href="#"
            class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
          >
            Contact us
          </a> */}
                            {/* <a className="bg-white hover:text-red-800 text-red-500 font-semibold rounded-lg py-1.5 px-6 ml-5">
                                Daftar Sekarang
                            </a> */}
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <img className="" src={ContentImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content