import { CardLeft } from '../components/CardLeft';
import { CardRight } from '../components/CardRight';
import { BahasaMuna } from '../components/BahasaMuna';

export const DayaTarik = () => {
  return (
    <div className="daya-tarik">
      <div className="daya-tarik-jumbotron">
        <h1>DayaTarik</h1>
      </div>

      <div className="daya-tarik-button">
        <button>Alam Desa</button>
        <button>Sosial Budaya</button>
        <button>Makanan Khas</button>
        <button>Bahasa Muna</button>
      </div>
      <div className="daya-tarik-content">
        <CardLeft></CardLeft>
        <CardRight></CardRight>
      </div>
      <BahasaMuna></BahasaMuna>
    </div>
  );
};
