import './header.css';
import { FcReadingEbook } from "react-icons/fc";
import { FaListUl, FaTimes } from "react-icons/fa";
import { Anchor } from 'antd';
import React, { useState } from 'react';
const { Link } = Anchor;

function Header() {
    let [dply, setDply] = useState("hide");
    let [name, setName] = useState("show");
    let [list, setlist] = useState("show");
    window.addEventListener("scroll", () => {
        if (dply ===w23 "show") {
            setDply("hide");
            setName("show");
            setlist("show");
        }
    })
    function clickHandler() {
        setDply("hide");
        setName("show");
        setlist("show");
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
                    <FaTimes id="cross" style={{ marginLeft: "15px", cursor: "pointer" }} onClick={() => {
                        setDply("hide");
                        setName("show");
                        setlist("show");
                    }} />
                    <div id="navlinks">
                        <Link href="#couserselwrapper" title="Courses" className='links' />
                        <Link href="#popwrap" title="Popular Courses" className='links' />
                        <Link href="#newcourseswrapper" title="New Courses" className='links' />
                        <Link href="#formwrapper" title="Contact us" className='links' />
                    </div>
                </div>
            </Anchor>
        </div>
        <FaListUl id="menus" className={list} onClick={() => {
            if (dply === "hide") {
                setDply("show");
                setName("hide");
                setlist("hide");
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