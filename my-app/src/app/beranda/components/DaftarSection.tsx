import Link from 'next/link';

const DaftarSection = () => {
  return (
    <section id="daftar" className="bg-no-repeat bg-cover mb-5" style={{ backgroundImage: "url('/assets/img/ceri.jpg')" }}>
      <div className="container mx-auto h-full py-12">
        <div className="flex flex-wrap w-full h-full">
          <div className="w-full md:w-5/12 flex items-center justify-center md:justify-start mb-4 md:mb-0">
            <Link href="/Daftar">
                <button className="w-[282px] h-[76px] bg-[#E5FFE6] text-[#262626] rounded-[50px] text-[24px] font-extrabold border-none"
                style={{marginLeft:'70%'}}>
                  DAFTARKAN UMKM!
                </button>
            </Link>
          </div>
          <div className="w-full md:w-7/12 text-center flex flex-col justify-center items-center md:items-start px-9">
            <h4 className="text-[50px] font-extrabold text-white"
            style={{marginLeft:'12%'}}>
              DAFTAR UMKM!</h4>
            <p className="text-[20px] font-bold text-white mt-2"
            style={{marginRight:'30%'}}>
              Daftarkan UMKM anda untuk mendapatkan pelanggan dan bantuan promosi agar usaha anda dapat dikenal oleh banyak orang
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DaftarSection;
