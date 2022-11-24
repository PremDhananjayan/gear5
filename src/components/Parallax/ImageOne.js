import { Parallax } from "react-parallax";
import image from "../../assets/images/harr.jpg";
import image2 from "../../assets/images/some.jpg";
import image3 from "../../assets/images/gar1.jpg";
import image4 from "../../assets/images/last.jpg";
import image5 from "../../assets/images/eng.jpg";

import "../../styles/parallax.css";

const ImageOne = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <Parallax className="image" speed={-10} bgImage={image} strength={800}>
        <div className="content">
          <span className="img-txt">For every spare, we care.</span>
        </div>
      </Parallax>
      <div className="text-box">
        <h3>“Four wheels move the body, two wheels move the soul.”</h3>
        <p>Valentino Rossi</p>
      </div>
      <Parallax className="image" speed={-10} bgImage={image2} strength={800}>
        <div className="content">
          <span className="img-txt"> Fear the gear.</span>
        </div>
      </Parallax>
      <div className="text-box">
        <h3>“Ride Big, Ride Long, Ride Free.”</h3>
        <p> Foster Kinn</p>
      </div>
      <Parallax className="image" speed={-10} bgImage={image5} strength={800}>
        <div className="content">
          <span className="img-txt">Ignite your core.</span>
        </div>
      </Parallax>
      <div className="text-box">
        <h3>“Never twist the throttle with your ego.”</h3>
        <p>Jane Foster</p>
      </div>
      <Parallax className="image" speed={-10} bgImage={image3} strength={800}>
        <div className="content">
          <span className="img-txt">We serve Excellence</span>
        </div>
      </Parallax>
      <div className="text-box">
        <h3>“God didn’t create metal so that man could make paper clips!” </h3>
        <p> Harley Davidson</p>
      </div>
      <Parallax className="image" speed={-10} bgImage={image4} strength={800}>
        <div className="content1">
          <span className="img-txt1">gear5 Automobiles.</span>
        </div>
      </Parallax>
      <div className="text-box">
        <p>
          {" "}
          gear5 &copy; {year} <br />
          Developed by Prem Dhananjayan & Jithin Mohan.
        </p>
      </div>
    </div>
  );
};

export default ImageOne;
