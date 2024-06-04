import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-[40vh] bg-no-repeat bg-cover mt-[6%] mx-[5%]"
      style={{ backgroundImage: 'url(/assets/img/Frame.png)' }}
    >
      <div className="container h-full mx-auto">
        <div className="flex items-center h-full">
          <div className="hero-tagline text-left ml-[10%]">
            <h1 className="text-white font-extrabold text-[50px] leading-[75px]">
              <span className="text-[#30583C]">UMKM </span>GEBANG PUTIH
            </h1>
            <p className="text-white text-[30px]">Temukan UMKM di Gebang Putih</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
