import "./popcourses.css"
import Cdata from "../Data/Cdata";
import Card from "./Card";


function PopCourses() {
    let pop = Cdata();
    let data = pop.popular;
    return (<div id="popwrap">
        <h1 className="selhead"> Popular Courses</h1>
        <div id="popcorseswrapper">
            {
                data.map((vals) => {
                    return (<Card data={vals}></Card>)
                })
            }
        </div>
    </div>
    )
}
export default PopCourses;