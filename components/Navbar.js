import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-screen navbar-hero'>
            <div className='flex justify-between items-center px-16 w-full py-2'>
                <div className='flex gap-6 items-center justify-between'>
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/events">
                        Events
                    </Link>
                    <Link href="/announcements">
                        Announcements
                    </Link>
                </div>
                <div>Logo</div>
                <div>
                    <button className='px-3 py-2 bg-red-300 rounded-xl'>Login/Signup</button>
                </div>

            </div>

        </div>
    )
}

export default Navbar