import "./card.css";
import {FaStar} from "react-icons/fa";

function Card(prop){
    return (<div className="cardwrapper">
    <img src={prop.data.imgurl} alt="courseimg" className="piccard"/>
    <div className="containerby"><img src={prop.data.byimgurl} alt="universitypic"className="picuniv"/><span className="courseun" style={{fontSize:"0.9rem",marginTop:"0px"}}>{prop.data.byname}</span></div>
    <h2 className="coursename course">{prop.data.name}</h2>
    <p className="course courseskill"><b>Skills you'll gain:</b>{prop.data.skills}</p>
    <h4 className="courseby course">{prop.data.by}</h4>
    <div className="ratwrapper">
    <h6 className="courserating course"><FaStar style={{backgroundColor:"yellow"}}/>{prop.data.rating}</h6>
    <h5 className="courseview course">({prop.data.views})</h5>
    </div>
    <h5 className="coursetype course">{prop.data.type}</h5>
    <button className="elbtn">ENROLL</button>
    </div>)
}
export default Card;