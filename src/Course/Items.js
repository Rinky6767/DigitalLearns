import "./items.css";
import cdata from "../Data/Cdata.js";
import Card from "./Card";

function Items(prop){
    let name= prop.catname;
    let data= cdata();
    let list= data[name];
    console.log("datalist: "+JSON.stringify(list));
return(<div id="itemswrapper">
    {
       Array.isArray(list)?(<>{
        list.map((vals)=>{
            return (<Card data={vals}/>)
      })
       }</>) :(<></>)
    }
</div>)
}
export default Items;