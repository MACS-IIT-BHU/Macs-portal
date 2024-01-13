import React from 'react'
import Footer from '@/components/Footer'
import TeamMember from '@/components/teams/TeamMember'
import TeamMoto from '@/components/teams/TeamMoto'

import Navbar from '@/components/Navbar'
import { salsa } from '@/helpers/font'

function page() {
    return (
        <main className={` flex flex-col gap-10 overflow-hidden w-full ${salsa.className}`}>
            {/* <Navbar /> */}
            <TeamMoto />
            <TeamMember />
            {/* <Footer /> */}
        </main>
    )
}

export default page