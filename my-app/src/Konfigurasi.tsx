import { atom } from "jotai"

const konfigurasiBawaan = {
  bukaSidebar: true,
  bukaMenuUser: true,
}

const konfigurasiAtom = atom(konfigurasiBawaan)

export default konfigurasiAtom
