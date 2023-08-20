import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../actions/userActions';
import imageBeranda1 from '../asset/beranda-image-1.png';
import imageBeranda2 from '../asset/beranda-image-2.png';
import logoKKN from '../asset/logoKKN.png';
import imageDayaTarik1 from '../asset/beranda-dayatarik-1.png';
import imageDayaTarik2 from '../asset/beranda-dayatarik-2.png';
import petaWilayahImage from '../asset/petaWilayahImage.png';
import imagesection1 from '../asset/imageSlide/imageSlide1.png'
import ImageSlider from '../components/imageSlider'
import imageDayaTarik3 from '../asset/beranda-dayatarik-3.png';
import arrow from '../asset/arrow.png';
// import im from '../asset/imageSlide/imageSlide1'
// import imageBeranda2 from '../asset/beranda-image2.png'
export const Home = () => {
  const slides = [
    {url : 'http://localhost:3000/static/media/imageSlide1.a2de519407371de0abd4.png', title : 'Foto Warga'},
    {url : 'http://localhost:3000/static/media/imageSlide2.29e6cc33bb52fd9f90fb.png', title : 'Foto Warga'},
  ]
  // const slides = [{
  //   {url : '../asset/imageSlide/imageSlide1', title 'foto Warga'},

  // }]
  // const dispatch = useDispatch();
  return (
    <div className="beranda">
      <div className="beranda-jumbotron">
        <div className="beranda-jumbotron-title">
          <h1 className="kembara">Kembara</h1>
          <h1 className="batukara">Batukara</h1>
          <button>Let's Explore</button>
        </div>
      </div>
      <div className="beranda-intro">
        <p>
          Yuk jelajahi dan temukan pesona tersembunyi di Desa Lanobake dan Desa Moolo, Kec. Batukara, Kab. Muna, Sulawesi Tenggara oleh <strong>Tim KKN PPM UGM Muna 2023</strong>
        </p>
        <div className="image">
          <div className="img-1">
            <img src={imageBeranda1} alt="" />
          </div>
          <div className="img-2">
            <img src={imageBeranda2} alt="" />
          </div>
        </div>
      </div>
      <h2 className='tentangDesa'>Tentang Desa</h2>
      <div className="beranda-video-profile">
        <div className="lanobake">
          <h4>Desa Lanobake</h4>
          <div className="video">
            <img src="" alt="" />
          </div>
        </div>
        <div className="moolo">
          <h4>Desa Moolo</h4>
          <div className="video">
            <img src="" alt="" />
          </div>
        </div>
        <Link className="readMore">
          <p>Read More</p>
          <div className="img">
            <img src={arrow} alt="" />
          </div>
        </Link>
      </div>
      <h2 className='dayaTarik-h2'>Daya Tarik</h2>
      <div className="dayaTarik">
        <div className="dayaTarik-inner">
          <div className="cardContainer">
            <div className="card">
              <div className="img">
                <img src={imageDayaTarik1} alt="" />
              </div>
              <h4>KABHANTAPI : PERCANTIK DIRI BERBALUT KRIYA ALA MUNA</h4>
            </div>
            <div className="card">
              <div className="img">
                <img src={imageDayaTarik2} alt="" />
              </div>
              <h4>KABHANTAPI : PERCANTIK DIRI BERBALUT KRIYA ALA MUNA</h4>
            </div>
            <div className="card">
              <div className="img">
                <img src={imageDayaTarik3} alt="" />
              </div>
              <h4>KABHANTAPI : PERCANTIK DIRI BERBALUT KRIYA ALA MUNA</h4>
            </div>
          </div>
            <Link className="rm-dayatarik">
            <p>Read More</p>
            <div className="img">
              <img src={arrow} alt="" />
            </div>
          </Link>
        </div>
      </div>
      <div className="petaWilayah">
        <h2><span>Peta</span> <br /> Wilayah</h2>
        <div className="img">
            <img src={petaWilayahImage} alt="" />
        </div>
      </div>
      <div className="imageSliderContainer">
        <ImageSlider slides={slides}></ImageSlider>
      <footer>
        <div className="footerContainer">
          <div className="img">
            <img src={logoKKN} alt="" />
          </div>
          <div className="content">
            <h4>Muna Merona <br /> KKN-PPM UGM Periode 2 Tahun 2023</h4>
          </div>
        </div>
      </footer>
      </div>
      {/* <imageSlider slides = {slides}> */}
    </div>
  );
};