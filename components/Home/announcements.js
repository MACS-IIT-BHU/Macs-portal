'use client';
import React, { useState, useEffect } from 'react';
import classes from '../../components/Home/announcements.css';
import Modal from '../../app/announcements/modal';
import axios from 'axios';

const Announcements = () => {
    const [allEvents, setAllEvents] = useState([]);
    const [modalv, setModal] = useState(0);
    const [modalUse, setModalUse] = useState(false);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get('/api/event');
                setAllEvents(res.data.events);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchEvents();
    }, []);

    const modalOpener = (element) => {
        setModal(element);
        setModalUse(true);
        console.log('Modal opened for:', element);
    };

    return (
        <div className="w-screen">
            <section id="cd-timeline" className="cd-container">
                {allEvents.map((element) => (
                    <div className="cd-timeline-block" key={element.id}>
                        <div>
                            <div className="cd-timeline-img cd-picture">
                                <img
                                    src="https://www.svgrepo.com/show/493649/circle-filled-circle-radio-filled-round-bullet.svg"
                                    alt="Picture"
                                />
                            </div>
                            <div className="cd-timeline-content">
                                <div className="header">
                                    <h2>{element.title}</h2>
                                </div>
                                <p>
                                    {element.eventContent.substr(0, 101) + '...'}
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        modalOpener(element);
                                    }}>
                                        Read More
                                    </a>

                                </p>
                                <span className="cd-date">{element.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
                {modalUse && <Modal modal_check={setModalUse} element={modalv} />}
                <div className="cd-timeline-block">
                    <form action="/announcements">
                        <button type="submit">
                            <div className="cd-timeline-img cd-picture">
                                <img
                                    src="https://www.svgrepo.com/show/80156/down-arrow.svg"
                                    alt="Picture"
                                />
                            </div>
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Announcements;
