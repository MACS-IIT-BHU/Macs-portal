'use client'
import React from 'react'
import classes from '../../components/Home/announcements.css'
import { useState } from 'react'
import Modal from '../../app/announcements/modal'
import data from '../../public/database.json'

const Announcements = () => {
    const [jsonData, setJsonData] = useState(data);
    const [modalv, setmodal] = useState(0);
    const [modaluse, setmodaluse] = useState(false);
    const [data2, setdata] = useState(jsonData.announcements.filter((ann) => ann.id <= 3));
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
                                <img src="https://www.svgrepo.com/show/493649/circle-filled-circle-radio-filled-round-bullet.svg" alt="Picture"></img>
                            </div>

                            <div className="cd-timeline-content">
                                <div className='header'><h2>{element.title}</h2></div>
                                <p>{element.body.substr(0, 101) + "..."}<a href="#" onClick={() => modal_opener(element.id)}>Read More</a></p>
                                {/* <a class="btn" href="#open-modal">Read More</a> */}
                                <span className="cd-date">{element.date}</span>
                            </div>
                        </div>}
                    </div>))}
                {modaluse && <Modal id={modalv} modal_check={setmodaluse} />}
                <div className="cd-timeline-block">
                    <form action='/announcements'><button type='submit'>
                        <div className="cd-timeline-img cd-picture">
                            <img src="https://www.svgrepo.com/show/80156/down-arrow.svg" alt="Picture"></img>
                        </div>
                    </button></form>
                </div>
            </section>
        </div>
    );
}

export default Announcements;
