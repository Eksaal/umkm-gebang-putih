import { useEffect } from 'react';
import { useAtom } from 'jotai';
import Konfigurasi from '../../../Konfigurasi';

const MenuUser = () => {
  const [konfigurasi, setKonfigurasi] = useAtom(Konfigurasi);

  useEffect(() => {
    // Code for handling menu visibility
  }, []);

  return (
    <div
      style={{
        zIndex: 10,
        position: 'fixed',
        top: 56,
        right: 32,
        width: 360,
        height: 640,
        opacity: konfigurasi.bukaMenuUser ? 1 : 0,
        borderRadius: 8,
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        background: '#fafafa',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 16,
        gap: 8,
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          background: '#02808f',
          fontSize: '2.5rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff',
        }}
      >
        E
      </div>
      <span
        style={{
          fontWeight: 'bold',
          fontSize: '1rem',
        }}
      >
        Eka Salma Salsabilla
      </span>
      <span
        style={{
          fontSize: '0.85rem',
          color: '#999999',
        }}
      >
        eksall@gmail.com
      </span>
    </div>
  );
};

export default MenuUser;
