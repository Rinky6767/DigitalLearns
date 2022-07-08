import { useState } from "react";
import "./coursesel.css";
import Items from "./Items";

function CourseSelection(){
   const [Category, setCategory]= useState();
    function changeHandler(event){
        setCategory(event.target.value);
    }
    return(<div id="couserselwrapper">
        <h1 className="selhead">Select a Course From a given Category</h1>
    <form>
        <select className="optionscour" onChange={changeHandler}>
        <option value="None">None</option>
            <option value="ArtsandHumanities">Arts and Humanities</option>
            <option value="Business">Business</option>
            <option value="ComputerScience">Computer Science</option>
            <option value="DataScience">Data Science</option>
            <option value="Health">Health</option>
        </select>
    </form>
{
    Category==="None" && Category===undefined?(<></>):(<Items catname={Category}/>)
}
    </div>)
}
export default CourseSelection;