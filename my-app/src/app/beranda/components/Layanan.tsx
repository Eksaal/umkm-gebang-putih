import React from 'react';

const Layanan = () => {
  return (
    <section className="py-12 w-full">
      <div className="container mx-auto">
        <div className="w-full">
          <div className="text-center">
            <h2 className="text-[20px] font-bold text-[#262626]">Apa yang Anda dapatkan di sini</h2>
          </div>
        </div>
        <div className="flex justify-around mt-5 flex-wrap">
          <div className="text-center mx-4 mb-6 flex-1 min-w-[200px]">
            <div className="card-layanan w-full">
              <div className="relative mx-auto my-auto">
                <img src="/assets/img/produk.png" alt="Produk" className="mx-auto" />
              </div>
              <h3 className="mt-4 text-[20px] font-bold text-[#262626] transition-all duration-200 ease-in">Produk</h3>
              <p className="mt-4 text-[16px] font-normal text-[#262626] transition-all duration-300 ease-in">Temukan makanan dan minuman yang anda butuhkan</p>
            </div>
          </div>

          <div className="text-center mx-4 mb-6 flex-1 min-w-[200px]">
            <div className="card-layanan w-full">
              <div className="relative mx-auto my-auto">
                <img src="/assets/img/lokasi2.png" alt="Lokasi" className="mx-auto" />
              </div>
              <h3 className="mt-4 text-[20px] font-bold text-[#262626] transition-all duration-200 ease-in">Lokasi</h3>
              <p className="mt-4 text-[16px] font-normal text-[#262626] transition-all duration-300 ease-in">Tersedia lokasi UMKM sehingga anda bisa mendatangi penjual secara langsung</p>
            </div>
          </div>

          <div className="text-center mx-4 mb-6 flex-1 min-w-[200px]">
            <div className="card-layanan w-full">
              <div className="relative mx-auto my-auto">
                <img src="/assets/img/Good Quality.png" alt="Ulasan" className="mx-auto" />
              </div>
              <h3 className="mt-4 text-[20px] font-bold text-[#262626] transition-all duration-200 ease-in">Ulasan</h3>
              <p className="mt-4 text-[16px] font-normal text-[#262626] transition-all duration-300 ease-in">Anda dapat melihat dan memberi ulasan pada toko</p>
            </div>
          </div>

          <div className="text-center mx-4 mb-6 flex-1 min-w-[200px]">
            <div className="card-layanan w-full">
              <div className="relative mx-auto my-auto">
                <img src="/assets/img/infografis2.png" alt="Infografis" className="mx-auto" />
              </div>
              <h3 className="mt-4 text-[20px] font-bold text-[#262626] transition-all duration-200 ease-in">Infografis</h3>
              <p className="mt-4 text-[16px] font-normal text-[#262626] transition-all duration-300 ease-in">Khusus mitra terdaftar, terdapat informasi yang berbentuk tabel, dan infografis untuk pemilik UMKM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layanan;
