import React from 'react';
import Link from 'next/link';
import MapComponent from './MapComponent';
import { FaArrowRight, FaHome } from "react-icons/fa";

const itemsidebar = [
  {
    name: 'Beranda',
    href: '/beranda',
    icon: FaHome,
  },
];

export default function Sidebar() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="header flex items-center justify-between px-4 py-2">
          <div className="list-item flex items-center space-x-2">
            <a href="#" className="flex items-center">
              <img src="/assets/img/logo.png" alt="" className="ikon w-8 h-8" />
              <span className="deskripsi-header text-lg font-semibold">UMKM Gebang Putih</span>
            </a>
          </div>
        </div>
        <div className="menu-bar mt-4">
          <div className="menu">
            <div className="menu-link">
              <li className="search-box flex items-center px-4 py-2">
                <a href="#" className="flex items-center space-x-2">
                  <i className='ikon text-xl'></i>
                  <input type="search" placeholder="Search..." className="bg-gray-700 text-white placeholder-gray-400 rounded-lg px-2 py-1" />
                </a>
              </li>
              <ul className="menu-link mt-4 space-y-2">
              {itemsidebar.map(({ name, href, icon: Icon }) => ( 
                <li className='item-sidebar' key={name}>
                  <Link href={href} className='klik'>
                  <span className='ikon'>
                  <Icon />  
                  </span>
                  <span className='text'>{name}</span>
                  </Link>
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main flex">
        <MapComponent />
      </div>
    </div>
  );
};

