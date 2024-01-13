import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutLinkedin } from 'react-icons/ai';
function Student({ key, event, student }) {
    // console.log(student);
    return (
        <div
            key={key}
            className="bg-white flex md:w-1/5 mx-14 md:mx-0 flex-col items-center justify-center p-6 mb-4 rounded-lg shadow-md"
        >
            <div className='relative rounded-full border h-[100px] w-[100px] overflow-hidden'>
                <Image src={'/home/pexels-pixabay-220453.jpg'} alt={'img not found'} width={100} height={100} className='absolute -top-5' />
            </div>
            <p className='mt-2 text-xl font-bold'>
                {
                    student.name.replace('5-Year IDD Mathematical Sciences', '')
                }
            </p>
            <h1 className='text-sm text-gray-400'>
                year of Joining: {student.yearOfJoining}
            </h1>
            <div className='flex gap-2 mt-4'>
                <Link href={student.github}>
                    <AiOutlineGithub size={30} />
                </Link>
                <Link href={student.linkedin}>
                    <AiOutlineLinkedin size={30} />
                </Link>
            </div>
            <h2 className='outline-none p-2 mt-3 rounded-md bg-gray-400/80 active:bg-gray-300 text-white cursor-pointer'
                onClick={() => event(student)}>show profile</h2>
        </div>

    )
}

export default Student