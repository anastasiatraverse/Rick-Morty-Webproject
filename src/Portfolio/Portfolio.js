import "./Portfolio.scss"
import PortfolioImg from "../assets/Rick.png"
import Tag from "../Tag"

const Portfolio = () =>{
    return <div className="Portfolio">
        <img src={PortfolioImg} className="Portfolio__img"/>
        <div className="Portfolio__info">
            <h1>Armothy</h1>
            <Tag />
            <Tag />

            <p className="Portfolio__label">Last known location:</p>
            <p className="Portfolio__value">Post-Apocalyptic Earth</p>

            <p className="Portfolio__label">First seen in:</p>
            <p className="Portfolio__value">Rickmancing the Stone</p>


        </div>


    </div>
}

export default Portfolio
