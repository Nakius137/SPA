import React from 'react'
import img1 from '../images/haft_komputerowy_1_2.jpg'
import img2 from '../images/haft_komputerowy_1.jpg'
import img3 from '../images/haft_komputerowy_2_2.jpg'
import img4 from '../images/jg_diff_1.jpg'
import img5 from '../images/jg_diff_2.jpg'

class Photos extends React.Component {

    render() {
        return (
            <>
            <p>GALERIA</p>
            <div className="photo_container">
                <img src={img1} alt="galeria"></img>
                <img src={img2} alt="galeria"></img>
                <img src={img3} alt="galeria"></img>
                <img src={img4} alt="galeria"></img>
                <img src={img5} alt="galeria"></img>
            </div>
            </>
        )

    }
}

export default Photos