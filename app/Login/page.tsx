import ZenicChainLogo from 'Images/ZenicChainLogo.png';
import React from 'react';
import { useState} from 'react';
import Link from 'next/link'

import { GeneralNavbar } from '../Components/GeneralNavbar/GeneralNavbar';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Login = () => {
    const navbarLinks = [
        { label: 'About', link: '/About' },
        { label: 'Services', link: './../StillInProgress' },
        { label: 'Login', link: './../StillInProgress|' },
    ]
    

    return(

        <>

            <main className="w-full  h-full flex justify-between items-center">


                <section className='bg-slate-700 grid w-2/6 h-full'>

                    <img src='Images/ZenconLogo.svg' className="sm:h-[25rem]  md:h-[30rem] md:w-[30rem] h-[15rem] sm:w-[15rem] w-[15rem]" alt="" />

                </section>

                <section className='bg-slate-500 flex flex-col w-4/6 h-full'>
                    <nav className="py-4 px-5 flex gap-2 justify-end items-end h-fit w-fit overflow-y-hidden">
                    
                                    {navbarLinks.map((link, index) => (
                                        <Link
                                        href={link.link}

                                        key={index}
                                        className="text-white text-xl hover:text-[#FDE4C3] cursor-pointer"
                                        >
                                        {link.label}
                                        </Link>
                                        
                                    ))}
                                    <Link href='/StillInProgress' className="bg-white  rounded-md py-1 px-4 text-black text-lg font-semibold hover:bg-[#FDE4C3] cursor-pointer">
                                        Sign Up
                                    </Link>
                    </nav>


                    <div className="h-full w-[95%]  max-w-[320px] min-[320px]:max-w-full sm:max-w-6xl flex flex-col md:flex-row justify-center space-y-4 space-x-6 items-center">
                        <div className="flex flex-row md:flex-col justify-start items-start">
                            <h1 className="text-2xl text-center sm:text-left sm:text-7xl text-white">ola</h1>
                            <p className=" text-white sm:text-5xl text-center ">Come back later.</p>

                        </div>

                        <img src='Images/ZenconLogo.svg' className="sm:h-[25rem]  md:h-[30rem] md:w-[30rem] h-[15rem] sm:w-[15rem] w-[15rem]" alt="" />

                    </div>   

                </section>



            </main>
        </>

    );

}

export default Login;
