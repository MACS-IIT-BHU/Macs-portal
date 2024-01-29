'use client'
import React from 'react'
import classes from '../../components/Home/announcements.css'
import { useState } from 'react'
import data from '../../public/database.json'
import Modal from './modal.js'
import { set } from 'mongoose'

const Announcements = () => {
    const [jsonData, setJsonData] = useState(data);
    const [num, setNum] = useState(3);
    const [modalv, setmodal] = useState(0);
    const [modaluse, setmodaluse] = useState(false);
    const [data2, setdata] = useState(jsonData.announcements.filter((ann) => ann.id <= num));
    const button_handle = () => {
        setNum(num + 3 < jsonData.announcements.length ? num + 3 : jsonData.announcements.length);
        setdata(jsonData.announcements.filter((ann) => ann.id <= num));
        if(num == jsonData.announcements.length)
        {const abcd = document.getElementById("forward");
         abcd.style.visibility="hidden";
        }
        console.log(num)
    }
    const modal_opener = (id) => {
        setmodal(id);
        setmodaluse(true);
        console.log("hello opp" + id);
    }
    return (
        <div className="w-screen">
            <section id="cd-timeline" className="cd-container">
                {data2.map((element) => (
                    <div className="cd-timeline-block" key={element.id}>
                        {<div>
                            <div className="cd-timeline-img cd-picture">
                                <img src={"https://www.svgrepo.com/show/493649/circle-filled-circle-radio-filled-round-bullet.svg"} alt="Picture"></img>
                            </div>

                            <div className="cd-timeline-content">
                                <div className='header'><h2>{element.title}</h2></div>
                                <p>{element.body.substr(0, 101) + "..."}<a href="#" onClick={() => modal_opener(element.id)}>Read More</a></p>
                                <span className="cd-date">{element.date}</span>
                            </div>

                        </div>
                        }

                    </div>))}
                {modaluse && <Modal id={modalv} modal_check={setmodaluse} />}

                <div className="cd-timeline-block">
                    <button id="forward" type='submit' onClick={button_handle}>
                        <div className="cd-timeline-img cd-picture">
                            <img  src="https://www.svgrepo.com/show/80156/down-arrow.svg" alt="Picture"></img>
                        </div>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Announcements;
