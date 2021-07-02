import React from 'react'
import '../styles/Details.css'

class Details extends React.Component {

    render() {
        return (
            <div className="Details-container">
             <h2>Oferta</h2> 
             <p>Zajmuję się wyszywaniem napisów na ręcznikach oraz ubraniach, nie oznacza to jednak, 
                 że nie podejmę się czegoś innego, w sprawie innych zamówień zapraszam do kontaktu. <br />
                 Cena zależy głównie od tego co zostało zamówione i jest do uzgodnienia.</p>     
             <h2>Jak zamówić</h2>
             <p> Poniżej możesz zobaczyć krótka informację jak zamówić haft lub produkt:
                 <br /> ↓ <br />
                 Krok I: Napisz do mnie na <a href="https://www.facebook.com/Haft-Martynow-100200595641640/" target="blank">Facebooku</a> lub <a href=
                 "mailto:haftwloszakowice@gmail.com" target="blank">e-mail</a>
                 <br /> ↓ <br />
                 Krok II: Odbierz gotowy produkt w Sklepie Przy Torach we Włoszakowicach </p>
            </div>
        )

    }
}

export default Details