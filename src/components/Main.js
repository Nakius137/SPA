import React from 'react'
import '../styles/Main.css'

class Main extends React.Component {

    render() {
        return (
            <div className="Main-container">
                <h2>O mnie</h2>
                <p>Zajmuję się haftem komputerowym - jednym z najbardziej szlachetnych form znakowania 
                    ubrań, ręczników oraz materiałów.</p>
                <iframe width="50%" height="325" allowfullscreen="" loading="lazy" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1230.0133113265172!2d16.372630929498413!3d51.93346795044437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705bf85444154d3%3A0x8bcf768f8b15cef!2sKurpi%C5%84skiego%2032A%2C%2064-140%20W%C5%82oszakowice!5e0!3m2!1spl!2spl!4v1623696480403!5m2!1spl!2spl"></iframe>    
            </div>
        )

    }
}

export default Main