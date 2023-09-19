import ZenicChainLogo from 'Images/ZenicChainLogo.png';
import React from 'react';
import { useState} from 'react';
import Link from 'next/link'

import { GeneralNavbar } from '../Components/GeneralNavbar/GeneralNavbar';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const StillInProgress = () => {
    const navbarLinks = [
        { label: 'About', link: '/About' },
        { label: 'Services', link: './../StillInProgress' },
        { label: 'Login', link: './../StillInProgress|' },
    ]
    

    return(

        <>

            <main className="w-full  h-full flex flex-col justify-center items-center mt-10">

                <GeneralNavbar />

                <section className="h-full w-[95%]  max-w-[320px] min-[320px]:max-w-full sm:max-w-6xl flex flex-col md:flex-row justify-center space-y-4 space-x-6 items-center">
                    <div className="flex flex-row md:flex-col justify-start items-start">
                        <h1 className="text-2xl text-center sm:text-left sm:text-7xl text-white">This page is under construction...</h1>
                        <p className=" text-white sm:text-5xl text-center ">Come back later.</p>

                    </div>

                    <img src='Images/ZenconLogo.svg' className="sm:h-[25rem]  md:h-[30rem] md:w-[30rem] h-[15rem] sm:w-[15rem] w-[15rem]" alt="" />

                </section>     

            </main>
        </>

    );

}

export default StillInProgress;
