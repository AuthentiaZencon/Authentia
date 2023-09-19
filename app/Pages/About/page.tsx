import React from 'react';
import { useState} from 'react';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ZenicChainLogo from './../../Images/AuthentiaLogo.svg';
import ZenconLogo from '/Images/zeniclogo.png';
import page from '../../page';

const zeniclogo = '/Images/zeniclogo.png';

const About = () => {
  
    const navbarLinks = [
        { label: 'Services', link: '/StillInProgress' },
        { label: 'Login', link: '/StillInProgress' },
    ]
    
    return(

        <>

          <main className="w-full  h-full flex flex-col justify-center items-center mt-10">

              <section className=" top-5 flex h-fit rounded-2xl w-[95%] max-w-[320px] min-[320px]:max-w-full sm:max-w-6xl bg-[url('/Images/backgroundMain.jpg')] bg-cover bg-center z-50">
                
              <nav className="py-4 w-full overflow-y-hidden">
                      
                      <section className="px-5 ">
                          <div className="flex justify-between items-center">
                          <a className="flex items-center gap-4" href={zeniclogo}>
                                                      
                                {/* <KeyboardArrowLeftIcon fontSize="large" className="text-white" />                                 */}
                              <p className='text-[#E2E2E2] text-xl'>Go Back</p>

                          </a>

                              <div className="grande flex gap-10 justify-center items-center">
                                  {navbarLinks.map((link, index) => (
                                      <a
                                      href={link.link}

                                      key={index}
                                      className="text-white text-xl hover:text-[#FDE4C3] cursor-pointer"
                                      >
                                      {link.label}
                                      </a>
                                      
                                  ))}
                                  <a href='/StillInProgress' className="bg-white  rounded-md py-1 px-4 text-black text-lg font-semibold hover:bg-[#FDE4C3] cursor-pointer">
                                      Sign Up
                                  </a>
                              </div>

                          </div>
                          
                      </section>

                  </nav>
              </section>
                  
              <section className="h-full w-[95%] max-w-[320px] min-[320px]:max-w-full sm:max-w-6xl justify-center flex flex-col items-start p-4 m-16 overflow-y-auto">
              
                <h1 className="text-2xl font-semibold text-left sm:text-4xl md:text-5xl lg:text-7xl text-white">About Authentia</h1>
                
                <div className="h-full w-full grid grid-cols-3 justify-center gap-x-6 gap-y-4">
                  <div className="col-span-3 md:col-span-2 flex flex-col justify-start items-start space-y-14 h-full pt-9 sm:pt-20">
                    <div className="flex flex-col space-y-5 text-white text-2xl sm:text-4xl text-justify">
                      <p>
                        Authentia uses blockchain technology to create immutable authenticity certificates for multimedia assets, ensuring their authenticity and ownership. Uploaded assets are assigned a unique digital fingerprint through cryptographic hashing, recorded in a blockchain smart contract along with relevant metadata.
                      </p>

                      <p>
                        With a focus on user experience, Authentia provides an intuitive interface and robust functionalities. User security and privacy are prioritized through strong data protection measures and encryption.
                      </p>

                      <p>
                        Authentia offers an intuitive user interface for easy asset verification, accessible to all users. An open API allows integration of authenticity verification into other platforms. A marketplace is integrated, enabling users to sell rights to their authentic assets. Sellers can list assets, set prices, customize licenses, and manage transactions securely. Buyers can explore and acquire usage rights for authentic assets.
                      </p>
                    </div>
                  </div>

                  <div className="h-full col-span-3 md:col-span-1 flex flex-col space-y-14 justify-start pt-20 items-center">
                    <img src='./../../Images/AuthentiaLogo.svg' className="md:w-[15rem] w-[10rem]" alt="" />
                    <img src='./../../Images/zeniclogo.png' className="md:w-[15rem] w-[10rem]" alt="" />
                  </div>
                </div>

            </section>


          </main>

</>

    );

}

export default About;
