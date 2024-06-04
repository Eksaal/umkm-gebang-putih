import React from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import Navbar from "@/app/beranda/components/Navbar";

const isian = [
  { name: "Nama Usaha", input: "text" },
  { name: "Kategori", input: "text" },
  { name: "Jenis Produk", input: "text" },
  { name: "Jenis Tempat Usaha", input: "text" },
  { name: "Alamat Usaha", input: "text" },
  { name: "Kontak Usaha", input: "text" },
  { name: "Nama Kontak", input: "text" },
  { name: "Hari Buka", input: "text" },
  { name: "Hari Tutup Khusus", input: "text" },
  { name: "Jam Buka - Jam Tutup", input: "text" },
  { name: "Layanan", input: "text" },
  { name: "Pembayaran", input: "text" },
  { name: "Fasilitas", input: "text" },
  { name: "Latitude", input: "text" },
  { name: "Longitude", input: "text" },
  { name: "Harga Makanan", input: "text" },
  { name: "Harga Minuman", input: "text" },
];

export default function DaftarForm() {
  return (
    <>
      <Navbar />
      <div className="bg-[#EEEEEE] absolute left-[50%] top-[97px] translate-x-[-50%] p-[31px_40px_27px_40px] w-[1058px] box-sizing-border h-[full]">
        <span className="break-words font-['Poppins'] font-medium text-[32px] text-[#000000]">
          REGISTRASI
        </span>
      </div>
      <span className="absolute left-[250px] top-[247px] break-words font-['Poppins'] font-medium text-[32px] text-[#1E1E1E]">
        Informasi Toko
      </span>
      <div className="absolute left-[50%] top-[343px] translate-x-[-50%] w-[1058px] space-y-6">
        {isian.map(({ name, input }, index) => (
          <div key={index} className="flex flex-col mb-4">
            <span className="break-words font-['Poppins'] font-light text-[20px] text-[#1E1E1E]">
              {name}
            </span>
            <input
              type={input}
              className="rounded-[15px] bg-[#EEEEEE] w-full h-[86px] mt-2 transition-all duration-300 hover:bg-[#DDDDDD] hover:shadow-lg hover:outline-dotted"
            />
          </div>
        ))}
         
         <div className="m-[0_0_20px_0] inline-block self-start break-words font-['Poppins'] font-light text-[20px] text-[#1E1E1E]">
            Foto Toko
          </div>
          <div className="rounded-[15px] bg-[#EEEEEE] hover:bg-[#CCCCCC] flex p-[0_0_25px_0] w-[1058px] h-[248px] box-sizing-border transition-all duration-300">
          <button type="submit" className="flex items-center justify-center w-full h-full">
            <MdOutlineCloudUpload className="text-[100px] mt-8 transition-transform duration-300 hover:scale-105" />
          </button>
          </div>

          <div className="m-[0_0_20px_0] inline-block self-start break-words font-['Poppins'] font-light text-[20px] text-[#1E1E1E]">
            Foto Produk
          </div>
          <div className="rounded-[15px] bg-[#EEEEEE] hover:bg-[#CCCCCC] flex p-[0_0_25px_0] w-[1058px] h-[248px] box-sizing-border transition-all duration-300">
          <button type="submit" className="flex items-center justify-center w-full h-full">
            <MdOutlineCloudUpload className="text-[100px] mt-8 transition-transform duration-300 hover:scale-105" />
          </button>
          </div>

          <div className="p-[0_0_0_500px]">
          <div className="rounded-[15px] bg-green-500 hover:bg-green-700 hover:scale-105 hover:shadow-lg transition-all duration-300 flex p-[13px_0_25px_30px] w-[100px] h-[50px] box-sizing-border">
            <button type="submit" className="text-white font-bold font-['Poppins'] text-[16px]">Kirim</button>
          </div>
          </div>


      </div>
    </>
  );
}
