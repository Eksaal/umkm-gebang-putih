/** @jsxImportSource @emotion/react */

import { useAtom } from "jotai"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"

import Konfigurasi from "../../../../Konfigurasi"

const Tampilkan = () => {

  const [konfigurasi, setKonfigurasi] = useAtom(Konfigurasi)

  return (
    <div
      onClick={() => {
        setKonfigurasi({...konfigurasi, bukaSidebar: !konfigurasi.bukaSidebar})
      }}
      css={{
        background: `#40b868`,
        borderTopRightRadius: 8, 
        borderBottomRightRadius: 8, 
        position: `absolute`,
        height: 48,
        width: 24,
        right: -24,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        top: "calc(50% - 24px)",
        borderLeft: `1px solid #dddddd`,
        ":hover": {
          cursor: "pointer",
          background: "#eaeaea",
        },
      }}
    >
    {konfigurasi.bukaSidebar ? <FaCaretLeft color="#2633a4"/> : <FaCaretRight color="#2633a4"/>}
    </div>
  )
}

export default Tampilkan
