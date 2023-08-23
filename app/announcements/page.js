'use client'
import React from 'react'
import classes from '../../components/Home/announcements.css'
import { useState } from 'react'
import data from '../../public/database.json'

const Announcements = () => {
    const [jsonData, setJsonData] = useState(data);
    
    return (
        <section id="cd-timeline" class="cd-container">
                    {jsonData.announcements.map((element) => (
                        
                        <div class="cd-timeline-block">
                            <div class="cd-timeline-img cd-picture">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg" alt="Picture"></img>
                            </div> 

                            <div class="cd-timeline-content">
                                <div classname='header'><h2>{element.title}</h2></div>
                                <p>{element.minibody}</p>
                                <a class="btn" href="#open-modal">Read More</a>
                                <span class="cd-date">{element.date}</span>
                            </div>
                        </div> ))}

                        <div id="open-modal" class="modal-window">
                            <div>
                                <a href="#" title="Close" class="modal-close">Close</a>
                                <h1>Exploratory Project Guide Allotment</h1>
                                <div>Dear Students,
                                    Please provide your choices of supervisor for your exploratory project in the google form. 
                                    Below is the link to google form: https://forms.gle/H8Pum42rxWxhGB666 
                                    The deadline to submit your choices is July 18, 2023.
                                    with regards,
                                    Convener DUGC
                                    Department of Mathematical Sciences,
                                    IIT(BHU) Varanasi - 221005
                                </div>
                            </div>
                        </div>    
        </section>
    );
}

export default Announcements;