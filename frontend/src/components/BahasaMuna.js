import KONTEN from '../data/kamus-bahasa-muna.json';

export const BahasaMuna = () => {
  return (
    <div className="bahasa-muna">
      <div className="sejarah-singkat">
        <h2>Sejarah Singkat</h2>
        <div className="sejarah-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta aut obcaecati id assumenda nobis, tenetur aspernatur nihil magni iste error pariatur. Ullam molestiae laboriosam dolor esse odio vero dolores dolorem harum
            doloremque necessitatibus voluptas quos vitae, blanditiis, a mollitia? Sunt ut minus iste impedit at molestiae temporibus molestias numquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta aut obcaecati id assumenda nobis, tenetur aspernatur nihil magni iste error pariatur. Ullam molestiae laboriosam dolor esse odio vero dolores dolorem harum
            doloremque necessitatibus voluptas quos vitae, blanditiis, a mollitia? Sunt ut minus iste impedit at molestiae temporibus molestias numquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dicta aut obcaecati id assumenda nobis, tenetur aspernatur nihil magni iste error pariatur. Ullam molestiae laboriosam dolor esse odio vero dolores dolorem harum
            doloremque necessitatibus voluptas quos vitae, blanditiis, a mollitia? Sunt ut minus iste impedit at molestiae temporibus molestias numquam?
          </p>
        </div>
      </div>
      <div className="aturan-bahasa">
        <h2>Aturan Bahasa</h2>
        <div className="aturan-content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum iste laboriosam reprehenderit aperiam quisquam quaerat pariatur similique dolores, facere esse enim eius, accusantium tempore. Distinctio nesciunt magnam suscipit
            provident nostrum iusto reiciendis quidem eos voluptatem. Odit, iste, reiciendis minus reprehenderit consequuntur aliquid assumenda, nemo aspernatur ea commodi earum optio distinctio!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum iste laboriosam reprehenderit aperiam quisquam quaerat pariatur similique dolores, facere esse enim eius, accusantium tempore. Distinctio nesciunt magnam suscipit
            provident nostrum iusto reiciendis quidem eos voluptatem. Odit, iste, reiciendis minus reprehenderit consequuntur aliquid assumenda, nemo aspernatur ea commodi earum optio distinctio!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum iste laboriosam reprehenderit aperiam quisquam quaerat pariatur similique dolores, facere esse enim eius, accusantium tempore. Distinctio nesciunt magnam suscipit
            provident nostrum iusto reiciendis quidem eos voluptatem. Odit, iste, reiciendis minus reprehenderit consequuntur aliquid assumenda, nemo aspernatur ea commodi earum optio distinctio!
          </p>
        </div>
      </div>
      <div className="mini-kamus">
        <h2>Mini Kamus</h2>
        <div className="mini-kamus-content">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Kata Bahasa Indonesia</th>
                <th>Kata Bahasa Muna</th>
                <th>Kalimat Bahasa Indonesia</th>
                <th>Kalimat Bahasa Muna</th>
              </tr>
            </thead>
            <tbody>
              {KONTEN.map((data) => {
                return (
                  <tr>
                    <td>{data['No.']}</td>
                    <td>{data['Kata Indo']}</td>
                    <td>{data['Kata Muna']}</td>
                    <td>{data['Kalimat Indo']}</td>
                    <td>{data['Kalimat Muna']}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
