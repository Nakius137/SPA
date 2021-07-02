import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import '../styles/Photos.css'
import img1 from '../images/haft_komputerowy_1_2.jpg'
import img2 from '../images/haft_komputerowy_1.jpg'
import img3 from '../images/haft_komputerowy_2_2.jpg'
import img4 from '../images/jg_diff_1.jpg'
import img5 from '../images/jg_diff_2.jpg'



class Photos extends React.Component {

    render() {
        return (
         <div>
          <div className="gallery">
            <AliceCarousel autoPlay autoPlayInterval="2000">
              <img src={img1} className="sliderimg" alt=""/>
              <img src={img2} className="sliderimg" alt=""/>
              <img src={img3} className="sliderimg" alt=""/>
              <img src={img4} className="sliderimg" alt=""/>
              <img src={img5} className="sliderimg" alt=""/>
            </AliceCarousel>
            </div>
          </div>
        )

    }
}
export default Photos