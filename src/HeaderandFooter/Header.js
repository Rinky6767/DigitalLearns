import './header.css';
import { FcReadingEbook } from "react-icons/fc";
import { FaListUl, FaTimes } from "react-icons/fa";
import { Anchor } from 'antd';
import React, { useState } from 'react';
const { Link } = Anchor;
function Header() {
    let [dply, setDply] = useState("hide");
    let [name, setName] = useState("show");
    function clickHandler() {
        setDply("hide");
        setName("show");
    }
    return (<div id="headwrapper">
        <h2 id="nameheader" className={name}>DigitalLearns <FcReadingEbook id="book" /></h2>
        <Anchor onClick={clickHandler}>
            <div id="navs" >
                <Link href="#couserselwrapper" title="Courses" className='links' />
                <Link href="#popwrap" title="Popular Courses" className='links' />
                <Link href="#newcourseswrapper" title="New Courses" className='links' />
                <Link href="#formwrapper" title="Contact us" className='links' />
            </div>
        </Anchor>

        <div id="dismenu" className={dply}>
            <Anchor>
                <div id="nav" className={dply} onClick={clickHandler}>
                    <FaTimes id="cross" style={{ position:"relative",marginLeft: "15px", cursor: "pointer", top:"15px"}} onClick={() => {
                        setDply("hide");
                        setName("show");
                    }} />
                    <Link href="#couserselwrapper" title="Courses" className='links'/>
                    <Link href="#popwrap" title="Popular Courses" className='links' />
                    <Link href="#newcourseswrapper" title="New Courses" className='links' />
                    <Link href="#formwrapper" title="Contact us" className='links' />
                </div>
            </Anchor>
        </div>
        <FaListUl id="menus" onClick={() => {
            if (dply === "hide") {
                setDply("show");
                setName("hide");
            } else {
                if (dply === "show") {
                    setDply("hide");
                    setName("show");
                }
            }
        }} />
    </div>)
}
export default Header;
