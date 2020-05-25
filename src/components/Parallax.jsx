import React, {useEffect} from 'react';
import M from 'materialize-css';
import img1 from "./images/img2.jpg";
import img2 from "./images/img3.png";


const Parallax = () => {
    useEffect(() =>{
        let elements = document.querySelectorAll(".parallax");
        M.Parallax.init(elements);
    },[]);

    return (
        <div>
            <div className="parallax-container">
                <div className="parallax">
                    <img src={img1} alt="paralax_1"  />
                </div>
            <div className="section white">
                <h2> CyberSecurity Club </h2>
                <p> Mejor comunidad de ciberseguridad en el Perú </p>
            </div>
            </div>
            <div className="parallax-container">
                <div className="parallax">
                    <img src={img1} alt="paralax_2" />
                </div>
                <div className="section white">
                    <h2> Best club  </h2>
                    <p> By Humbert Bernal</p>
                </div>
             </div>
            <div className="section white">
                <div className="row container">
                    <h2 className="header">Parallax</h2>
                    <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content
                        or image in this case, is moved at a different speed than the foreground content while
                        scrolling.</p>
                </div>
            </div>
        </div>
    );
};

export default Parallax;
