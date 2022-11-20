import React from "react";
import BG from "../assets/bg.jpg";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Layanan = () => {
  const [rsPsikologi, setRsPsikologi] = useState([]);
  const [details, setDetails] = useState([]);

  const getRsPsikologi = async () => {
    try {
      let response = await axios.get("https://6377cfde5c47776512277c1f.mockapi.io/api/v3/psikologi");
      setRsPsikologi(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getRsPsikologi();
  }, []);

  const getDetails = async () => {
    try {
      let response = await axios.get("https://6377cfde5c47776512277c1f.mockapi.io/api/v3/detailrs");
      setDetails(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <div className="mt-4 z-0 flex items-center justify-between relative max-w-full">
        <div className="px-4">
          <img src={BG} alt="" />
        </div>
      </div>

      <div className="w-full px-4 pt-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h3 className="font-bold text-secondary text-sm mb-2 lg:text-lg">Daftar Klinik & Rumah Sakit</h3>
          <h2 className="font-bold text-primary text-3xl mb-4 lg:text-6xl">Kesehatan Mental</h2>
        </div>
      </div>
      <div className="div w-full px-4 mx-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
        {rsPsikologi.map((item, index) => {
          return <Card key={index} id={item.id} imgUrl={item.gambar_rs} nama={item.nama_rs} lokasi={item.lokasi_rs} />;
        })}
      </div>
      <div className="hidden w-full px-4 mx-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
        {details.map((item, index) => {
          return <Card key={index} id={item.id} profil={item.profil} detail={item.detail} />;
        })}
      </div>
    </>
  );
};

export default Layanan;
