import './../../Styles/Navbar.css'
import React from 'react';
import Link from 'next/link'
import { Button } from '@/components/ui/button'


export const Navbar = () => {

  
    const navbarLinks = [
        { label: 'About', link: './../../Pages/About/' },
        { label: 'Services', link: '../../Pages/About/StillInProgress' },
        { label: 'Login', link: '../../Pages/About/Login/page.tsx' },
    ]
    

  return (

    <>

        <div className="flex h-[30rem] rounded-2xl w-full  max-w-[320px] min-[320px]:max-w-full sm:max-w-6xl bg-[url('/Images/backgroundMain.jpg')] bg-cover bg-center">
            <nav className="pt-4 w-full overflow-hidden">

            <section className="px-5 ">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                
                                <div
                                    className="w-12 h-12 flex justify-center items-center"
                                    >
                                    <img className='text-sm' alt="Logo " src="/Images/AuthentiaLogo.svg" />
                                </div>
                                <p className='text-[#E2E2E2] text-3xl'>Authentia</p>

                            </div>

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
                                <a href='../../Pages/About/StillInProgress' className="bg-white  rounded-md py-1 px-4 text-black text-lg font-semibold hover:bg-[#FDE4C3] cursor-pointer">
                                    Sign Up
                                </a>
                            </div>

                        </div>
                        
                    </section>
                    
                <section className='w-full h-full p-8 pt-[9%]' >
                    <div className='flex flex-col space-y-10'>
                        <p className='text-white min-[310px]:text-3xl text-2xl sm:text-[2rem] font-semibold max-w-xs'>From ideas to immutable proof: your creative legacy, safeguarded forever.</p>
                        {/* <a href='../../Pages/About/' className='bg-black rounded-full py-1 px-2 flex justify-center items-center  min-[310px]:px-4 text-white text-lg font-semibold hover:text-white cursor-pointer max-w-[8rem]'>Learn more</a> */}
                        <Button className='justify-center items-center bg-black  py-1 px-2 flex rounded-full text-lg font-semibold max-w-[8rem]'>Learn more</Button>
                    </div>

                </section>
            </nav>
        </div>

    </>

  )
}
