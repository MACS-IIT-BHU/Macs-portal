import React from 'react'
import Footer from '@/components/Footer'
import TeamMember from '@/components/teams/TeamMember'
import TeamMoto from '@/components/teams/TeamMoto'
import { Bitter, Monomaniac_One, Montserrat, Nanum_Brush_Script } from 'next/font/google';

import Navbar from '@/components/Navbar'
const montserrat = Montserrat({ subsets: ['latin'] })

function page() {
    return (
        <main className={` flex flex-col gap-10 overflow-hidden w-full ${montserrat.className}`}>
            {/* <Navbar /> */}
            <TeamMoto />
            <TeamMember />
            {/* <Footer /> */}
        </main>
    )
}

export default page