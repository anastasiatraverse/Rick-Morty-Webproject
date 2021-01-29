import "./Tag.scss"
import deadTag from "../assets/deadTag.png"

const Tag = () =>{
    return <div className="Tag">
        <img src={deadTag} className="Tag__img" />
        <p className="Tag__label">Dead</p>
    </div>
}

export default Tag
