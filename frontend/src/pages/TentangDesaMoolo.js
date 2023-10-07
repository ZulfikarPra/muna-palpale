import imgProfilMoolo from '../asset/galeri/12 kalimalima.webp';
import imgKepalaDesaMoolo from '../asset/kepala-desa-moolo.jpg';

export const TentangDesaMoolo = () => {
  return (
    <div className="tentang-desa">
      <div className="jumbotron">
        <h1>
          Tentang <br />
          Desa
        </h1>
      </div>
      <section id="judulDesa">
        <h2>Desa Moolo</h2>
        <div className="img">
          <img src={imgProfilMoolo} alt="" />
        </div>
      </section>
      <section id="visiMisi">
        <h2>Visi</h2>
        <h4>“Mewujudkan Desa Moolo lebih maju, mandiri, dan religious melalui Pembangunan partisipatif dan tata kelola pemerintahan yang baik.”</h4>
        <h2>Misi</h2>
        <h4>“Menjadikan Desa Moolo maju di bidang pertanian, pariwisata, transparasi, empati, berprestasi, aspiratif, dan bernafaskan islami.” </h4>
      </section>
      <section id="videoProfile">
        <h2>Video Profile</h2>
        <div className="img">
          <img src="" alt="" />
        </div>
      </section>
      <section id="kepalaDesa">
        <h2>Kepala Desa</h2>
        <div className="img">
          <img src={imgKepalaDesaMoolo} alt="" />
        </div>
        <div className="text">
          <h3>Natsir S.Sos</h3>
          <h4>2023 - 2028</h4>
        </div>
      </section>
      <section id="kondisiGeografi">
        <h2>Kondisi Geografi</h2>
        <div className="img">
          <img src="" alt="" />
        </div>
        <h4>( Desa Moolo, Kec.Batukara, Kab.Muna, Sulawesi Tenggara )</h4>
      </section>
      <section id="kondisiDemografi">
        <h2>Kondisi Demografi</h2>
        <h4>Jumlah Penduduk : </h4>
        <h4>Luas Desa : </h4>
        <h4>Kepadatan Penduduk : </h4>
        <h4>Banyaknya Rumah Tangga : </h4>
      </section>
      <section id="peraturanDesa">
        <h2>Peraturan Desa</h2>
        <div className="pdfViewer"></div>
      </section>
    </div>
  );
};
