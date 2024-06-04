/** @jsxImportSource @emotion/react */

'use client';

import { useAtom } from "jotai"
import Konfigurasi from "../../../Konfigurasi"
import Pencarian from "./Isi/Pencarian";
import Konten from "./Isi/Konten";
import Tampilkan from "./Isi/Tampilkan";


const Sidebar = () => {

  const [konfigurasi] = useAtom(Konfigurasi)

  return (
    <div
      className="Sidebar"
      css={{
        zIndex: 10,
        position: `fixed`,
        top: 0,
        left: konfigurasi.bukaSidebar ? 0 : -360,
        width: 360,
        height: `100%`,
        transition: ".4s",
        background: "#fafafa",
        display: "flex",
        flexDirection: "column",
        gap: 4,
        boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
      }}
    >
      <Pencarian />
      <Konten />
      <Tampilkan />
    </div>
  )
}

export default Sidebar
