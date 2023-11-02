import React from 'react';
import Cod from '../img/Abouts.jpg';


function AboutUs() {
  return (
    <div>
      <div className="aboutus d-flex flex-column flex-md-row align-items-center justify-content-md-end">
        <div className="text-left p-3" style={{ marginLeft: '20px' }}>
          <h3>Selamat datang di "Lab Informatika UMM"</h3>
          <p>
            Laboratorium Teknik Informatika berfungsi sebagai pusat pembelajaran praktis dan eksperimental yang digunakan oleh mahasiswa dan pelayanan untuk riset dan konsultasi keteknikan mencakup desain perangkat lunak untuk animasi, administrasi, grafis, dll.
          </p>
          <p>
            a. Laboratorium Rekayasa Perangkat Lunak melakukan analisis kelayakan pembuatan, penerapan proyek perangkat lunak, analisis kebutuhan, perancangan, pembuatan, dan penjaminan kualitas perangkat lunak serta melakukan rekayasa ulang perangkat lunak.
          </p>
          <p>
            b. Laboratorium Sistem dan Keamanan Jaringan menganalisis permasalahan, memberikan solusi berupa perekayasaan, pembuatan, dan pengelolaan, serta melakukan evaluasi pada sistem jaringan.
          </p>
          <p>
            c. Laboratorium Sistem Informasi menganalisis permasalahan, memberikan solusi berupa perekayasaan, pembuatan, dan pengelolaan, serta melakukan evaluasi pada sistem informasi.
          </p>
          <p>
            d. Laboratorium Teknologi Informasi menganalisis permasalahan, memberikan solusi berupa perekayasaan, pembuatan, dan pengelolaan, serta melakukan evaluasi pada teknologi informasi.
          </p>
        </div>
        <img src={Cod} alt="" className="img-fluid" style={{ marginRight: '20px' }} />
      </div>
    </div>
  );
}

export default AboutUs;
