'use client'
import React from 'react'
import classes from '../../components/Home/announcements.css'
import { useState } from 'react'
import data from '../../public/database.json'

const Announcements = () => {
    const [jsonData, setJsonData] = useState(data);
    const [num, setNum] = useState(3);

    const button_handle = () => {
        setNum(num+3 < jsonData.announcements.length ? num+3: jsonData.announcements.length);
        console.log(num)
    }
    return (
        <section id="cd-timeline" class="cd-container">
                    {jsonData.announcements.map((element) => (
                        <div class="cd-timeline-block">
                            {element.id <= num && <div>
                            <div class="cd-timeline-img cd-picture">
                                <img src="https://www.svgrepo.com/show/493649/circle-filled-circle-radio-filled-round-bullet.svg" alt="Picture"></img>
                            </div> 

                            <div class="cd-timeline-content">
                                <div classname='header'><h2>{element.title}</h2></div>
                                <p>{element.body.substr(0,101) + "..."}<a href = "#open-modal">Read More</a></p>
                                {/* <a class="btn" href="#open-modal">Read More</a> */}
                                <span class="cd-date">{element.date}</span>
                            </div>
                            <div id="open-modal" class="modal-window">
                                <div>
                                    <a href="#" title="Close" class="modal-close"><img src="https://img.icons8.com/?size=512&id=7703&format=png" className="cross" alt='close'></img></a>
                                    <h1>{element.title}</h1>
                                    <div className='modal-body'>{element.body}</div>
                                </div>
                            </div>
                            </div>}
                        </div>))}

                        <div class="cd-timeline-block">
                            <button type='submit' onClick = {button_handle}>
                                <div class="cd-timeline-img cd-picture">
                                    <img src="https://www.svgrepo.com/show/80156/down-arrow.svg" alt="Picture"></img>
                                </div>
                            </button>
                        </div>

                           
        </section>
    );
}

export default Announcements;
