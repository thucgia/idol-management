import { useState } from 'react';
import './App.css';
import FilmList from './components/FilmList';
import FilmModal from './components/FilmModal';

function App() {
  const actors = [
    {id: 1, name: "Au Duong Chan Hoa", image: "https://kenh14cdn.com/k:24cQAWffDLigkpHyGLtSuPaY8eyO/Image/2013/02/TD2/130214starauduonganh-464a2/au-duong-chan-hoa-bi-dot-quy-phai-cap-cuu.jpg"},
    {id: 2, name: "Luc Tieu Linh Dong", image: "https://znews-stc.zdn.vn/static/topic/person/ltld.jpg"},
    {id: 3, name: "Hoac Kien Hoa", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Wallace_Huo_image_taken_in_November_2016.png/250px-Wallace_Huo_image_taken_in_November_2016.png"},
    {id: 4, name: "Trieu Le Dinh", image: "https://vcdn1-giaitri.vnecdn.net/2022/05/30/trieu-le-dinh-4636-1653891690.jpg"},
    {id: 5, name: "Tran Hao Dan", image: "https://tinviet.net.vn/wp-content/uploads/2018/07/tran-hao-dan-va-pham-van-phuong-dong-phim-hoat-phat-te-cong-3.jpg"}
  ]

  const films = [
    {id: 1, fname:"Tay Du Ki", release_year: 1996, image: "https://vnn-imgs-f.vgcloud.vn/2019/08/30/20/chi-phi-quay-tay-du-ky-len-toi-hon-3-ty-moi-tap.jpg", actors : [2], description:"Phim hay lam", isFavorite : false},
    {id: 3, fname:"Hoa Thien Cot", release_year: 1997, image: "https://ss-images.saostar.vn/2020/04/10/7318751/7.jpg", actors : [3, 4], description:"Phim hay lam", isFavorite : false},
    {id: 5, fname:"Bang Chung Thep", release_year: 1999, image: "https://static.fptplay.net/static/img/share/video/08_09_2021/forensicheroes_2006_hk_b_25t13170_image_header_origin08-09-2021_01g17-15.jpg", actors : [1], description:"Phim hay lam", isFavorite : false},
  ]

  const [isShowing, setShowing] = useState(false)
  const [filmItems, setFilmItems] = useState(films)

  return (
    <div>
      <h1>BoDien Cinema</h1>
      <button onClick={() => setShowing(!isShowing)}>Create Film</button>
      <FilmList filmItems={filmItems} setFilmItems={setFilmItems} actorsList={actors}/>
      <FilmModal setShowing={setShowing} isShowing={isShowing} actorsList={actors} filmItems={filmItems} setFilmItems={setFilmItems}/>
    </div>
  );
}

export default App;
