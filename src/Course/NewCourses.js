import "./newcourses.css";
import Cdata from "../Data/Cdata";
import Card from "./Card";
function NewCourses(){
    let data= Cdata();
    let newcou= data.newCourse;
    return(<div id="newcourseswrapper">
        <h1 className="selhead">New Courses</h1>
        <div className="newcontainer">
            {
                newcou.map((vals)=>{
                    return (<Card data={vals}></Card>)
                })

            }
        </div>
    </div>)
}
export default NewCourses;