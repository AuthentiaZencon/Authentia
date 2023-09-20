import './../../Styles/Navbar.css'
import React from 'react';
import Link from 'next/link'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  

export const GeneralNavbar = () => {

  
    const navbarLinks = [
        { label: 'About', link: './../../About/' },
        // { label: 'Services', link: '../../StillInProgress' },
        // { label: 'Login', link: '../../Login/' },
    ]

    return (
        <div className="flex h-fit rounded-2xl w-[95%]  max-w-[320px] min-[320px]:max-w-full sm:max-w-6xl bg-[url('/Images/backgroundMain.jpg')] bg-cover bg-center ">
            <nav className="py-4 w-full overflow-y-hidden">
                
                <section className="px-5 ">
                    <div className="flex justify-between items-center">
                        <Link className="flex items-center gap-4" href="/">
                                                    
                            {/* <KeyboardArrowLeftIcon fontSize="large" className="text-white" />                                 */}
                            <p className='text-[#E2E2E2] text-xl'>Go Back</p>

                        </Link>

                        <div className="grande flex gap-10 justify-center items-center">
                            {/* {navbarLinks.map((link, index) => (
                                <Link
                                href={link.link}

                                key={index}
                                className="text-white text-xl hover:text-[#FDE4C3] cursor-pointer"
                                >
                                {link.label}
                                </Link>
                                
                            ))} */}
                            <Link href='./../dash/marketplace' className="bg-white  hidden sm:block rounded-md py-1 px-4 text-black text-lg font-semibold hover:bg-[#FDE4C3] cursor-pointer">
                                Try It Out
                            </Link>

                            <Menubar className='overflow-hidden block sm:hidden'>
                                <MenubarMenu>
                                    <MenubarTrigger className='w-8 p-0'><img className='w-8 h-8' src='/Images/cardapio.png'></img></MenubarTrigger>
                                    <MenubarContent>
                                    <MenubarItem>
                                    <a href='./../dash/marketplace' className="">
                                    Try it Out
                                    </a>
                                    </MenubarItem>
                               
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>

                        </div>

                    </div>
                    
                </section>


            </nav>
        </div>

    )
    
}