/** @jsxImportSource @emotion/react */

import TombolAtas from "./Tombols/TombolAtas"
import TombolUser from "./Tombols/TombolUser"

const MenuAtas = () => {
  return (
    <div
      className="MenuAtas"
      css={{
        // background: `blue`,
        position: `fixed`,
        top: 0,
        left: 0,
        width: `100%`,
        height: 56,
        display: "flex", 
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 16,
        paddingRight: 16,
      }}
    >
      <TombolAtas />  
      <TombolUser />
    </div>
  )
}

export default MenuAtas
