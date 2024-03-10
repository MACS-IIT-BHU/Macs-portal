'use client'
import React from 'react'
import classes from '../../components/Home/announcements.css'
import { useState, useEffect } from 'react'
import data from '../../public/database.json'
import Modal from './modal.js'
import { set } from 'mongoose'
import axios from 'axios'
import { useSession } from "next-auth/react";

const Announcements = () => {

    const { data: session } = useSession();
    const [showButton, setShowButton] = useState(false)


    const [jsonData, setJsonData] = useState(data);
    const [allEvents, setAllEvents] = useState(null)
    const [eventModal, setEventModal] = useState(false)



    const [num, setNum] = useState(3);
    const [modalv, setmodal] = useState(0);
    const [modaluse, setmodaluse] = useState(false);

    
    // const [data2, setdata] = useState(jsonData.announcements.filter((ann) => ann.id <= num));
    // const button_handle = () => {
    //     // e.preventDefault()
    //     setNum(num + 3 < jsonData.announcements.length ? num + 3 : jsonData.announcements.length);
    //     setdata(jsonData.announcements.filter((ann) => ann.id <= num));
    //     if (num == jsonData.announcements.length) {
    //         const abcd = document.getElementById("forward");
    //         abcd.style.visibility = "hidden";
    //     }
    //     console.log(num)
    // }

    const modal_opener = (element) => {
        // e.preventDefault()
        setDataModal(element);
        setmodaluse(true);
        console.log("hello opp" + element.title);
    }


    // 

    const [inputValues, setInputValues] = useState({
        title: '',
        content: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        if (session) {
            // console.log(session.user.email);
            if (session.user.email === 'mayank.bharti.mat21@itbhu.ac.in') {
                setShowButton(true);
            }
            else {
                setShowButton(false);
            }
        } else {
            console.log('session is not available');
        }

        const getEvents = async () => {
            try {
                const res = await axios.get("/api/event");
                console.log(res.data.events);
                setAllEvents(res.data.events);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        getEvents();
    }, [session, allEvents]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleEventSubmit = async (e) => {
        try {
            const response = await axios.post('/api/event',
                {
                    title: inputValues.title,
                    event: inputValues.content,
                    email: inputValues.email,
                    password: inputValues.password,
                    date: (new Date()).toLocaleString()
                });

            // Handle success
            console.log('Data sent successfully', response.data);
            if (response.status == 200) {
                setEventModal(false);
            }

        } catch (error) {
            // Handle errors
            console.error('Error sending data to server', error);
        }
    }

    const [dataModal, setDataModal] = useState(null)

    return (
        <div className="relative w-screen ">
            {showButton && <div className='absolute top-24 right-20'>
                <button className="border px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-500 active:bg-blue-600" onClick={() => {
                    setEventModal(true)
                }}>add event</button>
            </div>}
            {
                eventModal &&
                <div className='fixed w-screen h-screen z-50'>
                    <div className='fixed w-screen h-screen bg-[rgba(49,49,49,0.8)]'></div>
                    <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white rounded-md'>
                        <div className="flex  p-4">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => setEventModal(false)}>close</button>
                        </div>
                        <form className='flex flex-col border m-3 p-4  text-black bg-blue-400 gap-5'>
                            <div className='flex flex-1 flex-col'>
                                <span>Title</span>
                                <input
                                    type="text"
                                    name="title"
                                    value={inputValues.title}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className='flex flex-col'>
                                <span>Content</span>
                                <textarea
                                    type="text"
                                    name="content"
                                    value={inputValues.content}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className='flex flex-col'>
                                <span>Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={inputValues.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className='flex flex-col'>
                                <span>password</span>
                                <input
                                    type="password"
                                    name="password"
                                    value={inputValues.password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <button type='submit' className='w-full border bg-green-500 py-2 hover:bg-green-400 active:bg-green-500'
                                onClick={() => handleEventSubmit()}
                            >
                                submit
                            </button>
                        </form>
                    </div>
                </div>
            }



            {/* display event */}

            <section id="cd-timeline" className="cd-container">
                {allEvents?.map((element) => (
                    <div className="cd-timeline-block" key={element.id}>
                        {<div>
                            <div className="cd-timeline-img cd-picture grid place-items-center">
                                <div className='w-6 h-6 rounded-full bg-black'></div>
                            </div>

                            <div className="cd-timeline-content">
                                <div className='header'><h2>{element.title}</h2></div>
                                <p>{element.eventContent.substr(0, 101) + "..."}
                                    <button onClick={() => modal_opener(element)}>Read More</button>
                                </p>
                                <span className="cd-date">{element.date}</span>
                            </div>

                        </div>
                        }

                    </div>))}
                {modaluse && <Modal modal_check={setmodaluse} element={dataModal} />}

                <div className="cd-timeline-block">
                    <button id="forward" type='submit' >
                        <div className="cd-timeline-img cd-picture">
                            <img src="https://www.svgrepo.com/show/80156/down-arrow.svg" alt="Picture"></img>
                        </div>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Announcements;
