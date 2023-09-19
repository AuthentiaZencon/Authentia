import ZenicChainLogo from 'Images/ZenicChainLogo.png';
import React from 'react';
import { useState} from 'react';
import Link from 'next/link'
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Login = () => {
    const navbarLinks = [
        { label: 'About', link: '/About' },
        { label: 'Services', link: './../StillInProgress' },
        { label: 'Login', link: './../StillInProgress|' },
    ]
    

    return(

        <>

            <main className="w-full  h-full flex flex-col justify-center items-center mt-10">

            <div className="flex h-fit rounded-2xl w-[95%]  max-w-[320px] min-[320px]:max-w-full sm:max-w-6xl bg-[url('/Images/backgroundMain.jpg')] bg-cover bg-center ">
                            <nav className="py-4 w-full overflow-y-hidden">
                                
                                <section className="px-5 ">
                                    <div className="flex justify-between items-center">
                                        <Link className="flex items-center gap-4" href="./../../../../">
                                                                    
                                            {/* <KeyboardArrowLeftIcon fontSize="large" className="text-white" />                                 */}
                                            <p className='text-[#E2E2E2] text-xl'>Go Back</p>
        
                                        </Link>
        
                                        <div className="grande flex gap-10 justify-center items-center">
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
        
                                        </div>
        
                                    </div>
                                    
                                </section>
        
        
                            </nav>
                        </div>
    
                        <section className="h-full w-[95%]  max-w-[320px] min-[320px]:max-w-full sm:max-w-6xl flex flex-col md:flex-row justify-center space-y-4 space-x-6 items-center">
                            <div className="flex flex-row md:flex-col justify-start items-start">
                                <h1 className="text-2xl text-center sm:text-left sm:text-7xl text-white">This page is under construction...</h1>
                                <p className=" text-white sm:text-5xl text-center ">Come back later.</p>
        
                            </div>
        
                            <img src='Images/ZenconLogo.png' className="sm:h-[25rem]  md:h-[30rem] md:w-[30rem] h-[15rem] sm:w-[15rem] w-[15rem]" alt="" />
        
                        </section>     

            </main>
        </>

    );

}

export default Login;
