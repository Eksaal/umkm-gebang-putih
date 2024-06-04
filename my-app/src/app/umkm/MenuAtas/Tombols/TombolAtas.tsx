/** @jsxImportSource @emotion/react */

import { useAtom } from "jotai"
import { FaBed, FaStar, FaFish, FaMoneyCheckAlt, FaMountain } from "react-icons/fa"
import { LuClock3 } from "react-icons/lu";

import Konfigurasi from "../../../../Konfigurasi"

const menu = [
  {
    judul: "Jam Buka",
    icon: <LuClock3 />,
  },
  {
    judul: "Rating",
    icon: <FaStar />,
  },
]

const TombolAtas = () => {

  const [konfigurasi, setKonfigurasi] = useAtom(Konfigurasi)

  return (
    <div
      className="MenuAtasAnekaTombol"
      css={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
        paddingLeft: (konfigurasi.bukaSidebar ? 360 : 0),
        transition: ".4s",
        flexGrow: 1,
      }}
    >
    {menu.map((tiapMenu, urutan) => (
      <div
        key={urutan}
        className="MenuAtasAnekaTombol_menu"
        css={{
          borderRadius: 16,
          background: "#fafafa",
          display: "flex",
          flexDirection: "row",
          gap: 4,
          padding: 4,
          paddingLeft: 8,
          paddingRight: 8,
          fontSize: `0.85rem`,
          boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`,
          ":hover": {
            cursor: "pointer",
            background: "#eaeaea",
          },
        }}
      >
        {tiapMenu.icon}
        {tiapMenu.judul}
      </div>
    ))}
    </div>
  )
}

export default TombolAtas
