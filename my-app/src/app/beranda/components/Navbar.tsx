"use client";

import React, { useState } from 'react';
import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-[#E5FFE6] fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <a href="#" className="flex items-center font-bold text-lg">
          <img src="assets/img/logo.png" alt="Logo" width="15" className="inline-block align-text-top mr-2" style={{marginLeft:'20px'}} />
          <span className="text-green-500 mr-1" 
          style={{marginLeft:'10px'}}>UMKM </span> GEBANG PUTIH
        </a>

          <ul className="lg:flex lg:items-center lg:space-x-6 flex lg:flex-row">
            <li>
              <a className="font-bold text-sm text-green-500" href="/">Beranda</a>
            </li>
            <li>
              <a className="text-sm text-green-500" href="/umkm">UMKM</a>
            </li>
            <li className="relative">
              <button
                className="text-sm text-gray-800 font-medium bg-transparent border-none"
                onClick={toggleDropdown}
              >
                Semua Kategori
              </button>
              <ul className={`absolute ${dropdownOpen ? 'block' : 'hidden'} text-gray-700 pt-1 bg-white shadow-lg`}>
                <li><a className="block px-4 py-2" href="#">Makanan</a></li>
                <li><a className="block px-4 py-2" href="#">Minuman</a></li>
              </ul>
            </li>
            <li>
              <input type="text" className="form-control search text-sm p-2 border border-gray-300 rounded" placeholder="cari produk, toko" />
            </li>
            <li>
              <button className="text-sm p-2 border border-gray-300 rounded" type="button">
                Cari
              </button>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <a href="/Login" className="button-secondary flex items-center text-sm text-gray-800">
              <IoLogOutOutline width="20" className="inline-block align-text-top mr-2" 
              style={{marginLeft:"30px", marginTop:"3px"}}/>
              Login
            </a>
            <a href="/Daftar" className="button-primary bg-green-500 text-white font-bold text-sm px-4 py-2 rounded">
              DAFTAR
            </a>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
