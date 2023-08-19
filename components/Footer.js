import React from 'react'
import Our_team from './Home/our_team'

const Footer = () => {
    return (
        <div className='bg-[#1E1E1E] min-h-[300px] flex flex-col gap-4 '>
            <div>
                <div className='text-white text-4xl text-center m-5'>Our Team</div>
                <div className="grid grid-cols-5 gap-4">
                    <div><Our_team title="Prof. Sanjay Kumar Pandey" img="https://iitbhu.ac.in/contents/mat/img/people/mat_faculty_sanjay.jpg"/></div>
                    <div><Our_team title="Dr. Abhash Kumar Jha" img="https://iitbhu.ac.in/contents/mat/img/people/mat_faculty_abhash.jpg"/></div>
                    <div><Our_team title="Dr. Sunil Kumar" img="https://iitbhu.ac.in/contents/mat/img/people/mat_faculty_sunil.jpg"/></div>
                    <div><Our_team title="Dr. Anoop Singh" img="https://iitbhu.ac.in/sites/default/files/mat/img/people/mat_faculty_anoop.jpg"/></div>
                    <div><Our_team title="Dr. Amit Kumar" img="https://iitbhu.ac.in/sites/default/files/mat/img/people/mat_faculty_amitkr.jpg"/></div>
                </div>

                
            </div>
            <div className='flex flex-col items-center'>
            
                </div>
            <div className="grid grid-cols-3 gap-4">
                <div className='mx-auto'>
                    </div>
                <div className="flex flex-col space-x-4 space-y-3 mx-auto py-5">

                    <div className='flex mx-auto gap-4'>
                        <div className='containimg'><a href="https://www.linkedin.com/in/macs-mathematics-and-computing-society-535735192"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="linkedin"><path fill="#FFFFFF" d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path></svg></a></div>
                        <div className='containimg'><a href="https://www.facebook.com/macs.mat.iitbhu?mibextid=ZbWKwL"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="facebook-f"><path fill="#FFFFFF" d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path></svg></a></div>
                        <div className='containimg'><a href="https://www.instagram.com/macs_iitbhu/"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="instagram"><path fill="#FFFFFF" d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path></svg></a></div>
                    </div>
                    
                        <div className='flex mx-auto gap-2 text-white font-montserrat text-xl font-normal'>
                            <a href="#">Contact us</a> | <a href="#">Support</a> | <a href="#">Services</a>
                        </div>
                        <div className='flex mx-auto text-white gap-2 font-montserrat text-xl font-normal '>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <a href="#">Join us</a> |
                            <a href="#">Contribute</a>
                        </div>

                </div>

                <div></div>

            </div>
            <div className='flex flex-col items-center text-white gap-2'>
                <hr style={{
                    
                    backgroundColor: 'white',
                    height: 1,
                    width: '80%',
                }}
                />
                <br /><br />
                <div className="flex items-center ">
                    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4219 0C5.62287 0 0.921875 5.37256 0.921875 12C0.921875 18.6274 5.62287 24 11.4219 24C17.2209 24 21.9219 18.6274 21.9219 12C21.9219 5.37256 17.2209 0 11.4219 0ZM16.3812 16.7784C16.3138 16.8687 14.6971 18.9912 11.7302 18.9912C8.14448 18.9912 5.61296 15.9302 5.61296 11.9476C5.61296 8.01358 8.23813 5.00884 11.6997 5.00884C14.5345 5.00884 16.0167 6.8144 16.0784 6.89129C16.1544 6.98598 16.2008 7.10681 16.2103 7.23485C16.2198 7.36289 16.1918 7.49091 16.1308 7.59885L15.1833 9.27571C15.0119 9.57895 14.6425 9.6314 14.4113 9.38676C14.4014 9.3764 13.2881 8.23127 11.7914 8.23127C9.83887 8.23127 8.66186 9.85587 8.66186 11.9127C8.66186 13.8289 9.74209 15.7687 11.8067 15.7687C13.445 15.7687 14.5705 14.3975 14.5817 14.3836C14.799 14.1144 15.1769 14.1401 15.3653 14.4346L16.4046 16.059C16.472 16.1645 16.5064 16.2928 16.5022 16.4234C16.4979 16.5539 16.4553 16.6789 16.3812 16.7784Z" fill="white" />
                    </svg>
                    <div className='text-white'>
                        &nbsp; MACS 2023</div>
                </div>
                <br /><br /><br />
            </div>
        </div>

    )
}

export default Footer