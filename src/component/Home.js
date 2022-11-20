import React from "react";
import Landing from "../assets/icon.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full self-center px-20 lg:w-1/2">
          <h1 className="text-base font-semibold text-primary md:text-xl">
            Selamat Datang di
            <span className="block font-extrabold text-slate-900 text-5xl lg:text-7xl">
              <span className="text-mental">Mental</span>
              <span className="text-meds"> Meds</span>
            </span>
          </h1>
          <p className="font-normal text-slate-700 mb-8 leading-relaxed">Sebuah klinik layanan psikologi. Berfokus pada kesehatan mental dewasa, remaja & anak melalui berbagai layanan konseling dan terapi.</p>
          <a href="/" class="text-sm font-semibold text-white bg-secondary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
            Jadwalkan Konsultasi
          </a>
        </div>
        <div className="w-full self-end lg:right-0 lg:w-1/2">
          <div className="relative mt-10 lg:mt-6">
            <img width="420" height="420" src={Landing} alt="Gambar" class="max-w-full mx-auto lg:mx-44" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
