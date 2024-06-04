import React from 'react';

const Hallo = () => {
  return (
    <section className="bg-[url('/assets/img/Gbecak1.png')] h-[40vh] w-full bg-no-repeat bg-cover mt-5" style={{marginTop:'5%', marginBottom:'3%'}}>
      <div className="container h-full w-full mx-auto">
        <div className="w-full">
          <div className="justify-between py-6 px-11" style={{marginLeft:'100px'}}>
            <h2 className="text-[40px] font-extrabold text-[#262626] mt-4 ml-10">Hallo Sobat!!</h2>
            <p className="text-[16px] font-normal text-black w-1/2 mt-5 ml-10">
              UMKM Gebang Putih adalah project pengembangan website berbasis lokasi sebagai pemetaan UMKM di Kelurahan Gebang Putih, Kecamatan Sukolilo Surabaya sekaligus menjadi wadah promosi UMKM yang ada
            </p>
            <div>
              <p className="text-[16px] font-medium text-[#4DD553] ml-10 mt-2">Jelajahi website untuk menemukan informasi menarik di setiap UMKMnya!!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hallo;
