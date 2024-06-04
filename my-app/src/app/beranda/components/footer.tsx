import React from "react";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex items-center h-full bg-[#E5FFE6] text-[#262626] py-10" style={{marginTop:'50px'}}>
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-7/12 mt-4">
            <h3 className="text-xl font-bold ml-11">Tentang Kami</h3>
            <h6 className="text-base mt-2 ml-11" style={{width:'70%'}}>
              UMKM Gebang Putih adalah project pengembangan website berbasis lokasi sebagai pemetaan UMKM di Kelurahan Gebang Putih, Kecamatan Sukolilo, Surabaya sekaligus menjadi wadah promosi UMKM yang ada
            </h6>
          </div>

          <div className="w-full md:w-5/12 mt-4">
            <div className="flex items-center mb-4">
              <MdOutlineEmail className="w-6 h-6 mr-2" />
              <a href="mailto:umkmgebangputih@gmail.com" className="text-base">umkmgebangputih@gmail.com</a>
            </div>

            <div className="flex items-center">
              <MdOutlineLocalPhone className="w-6 h-6 mr-2" />
              <a href="tel:+6282250907901" className="text-base">+6282250907901</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
