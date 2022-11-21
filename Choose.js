import "./Choose.css";
// import image36 from "./assets/image36.png";
// import image23 from "./assets/image23.png";
// import image22 from "./assets/image22.png";
// import image31 from "./assets/image31.png";
// import image28 from "./assets/image28.png";
// import image29 from "./assets/image29.png";
// import group16 from "./assets/group16.svg";
// import image20 from "./assets/image20.png";
// import group9 from "./assets/group9.svg";
// import image27 from "./assets/image27.png";
// import image32 from "./assets/image32.png";
// import image82 from "./assets/image82.png";
import {Link} from 'react-router-dom'
const Choose = () => {
  return (
    <div className="mac-book-air-14">
      <div className="image-105">
        <span className="choose">CHOOSE</span>
        <div className="flex-container">
      
          <div className="rectanglee-25">
            <img className="group-16" />
            <span className="food">FOOD</span>
            <img className="image-36" />
          </div>
          <a><Link to="/Kr">
          <div className="rectanglee-22">
            <img className="image-32" />
            <span className="clothing">CLOTHING</span>
            <img className="image-31" />
          </div></Link></a>
        </div>
        <div className="flex-container-1">
          <div className="rectangle-22-1">
            <img className="image-20" />
            <span className="groceries">GROCERIES</span>
            <img className="image-82" />
          </div>
          <div className="rectangle-23">
            <img className="image-22" />
            <span className="fruits-and-vegetable">FRUITS AND VEGETABLES</span>
            <img className="image-23" />
          </div>
        </div>
        <div className="flex-container-2">
          <div className="rectangle-22-2">
            <img className="image-28" />
            <span className="footwears">FOOTWEARS</span>
            <img className="image-29" />
          </div>
          <div className="rectangle-22-3">
            <img className="group-9" />
            <span className="accessories">ACCESSORIES</span>
            <img className="image-27" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Choose;
