import React from "react";
import './../../Styles/Form.css';

const AboutCard = ({ }) => {

  return (


    <>

        <section className="h-[60rem] flex flex-col w-full sm:max-w-6xl">
            
            <div className='flex w-full max-w-[320px] sm:max-w-6xl flex-col justify-center items-start sm:justify-start sm:items-start py-24 sm:py-32 pl-[10%]  sm:pl-20 text-left text-[1.5rem] min-[330px]:text-[2.5rem] min-[350px]:text-[3rem] min-[390px]:text-6xl sm:text-8xl font-semibold'>

                <h1 className='text-white'>What is </h1>
                <h1 className=' gradiant text-transparent bg-clip-text'>Authentia? </h1>

            </div>

            <div className='h-fit  flex flex-col sm:flex-row  justify-center items-center sm:space-x-4 pb-20 w-full max-w-[320px] min-[320px]:max-w-full sm:max-w-6xl'>


                <div className='h-fit sm:h-full w-full mt-4 flex flex-col  justify-center items-center space-y-5 text-xl md:text-2xl lg:text-3xl font-semibold text-left '>
                    <div className='h-full w-full rounded-2xl bg-[#EDEDED]  flex justify-center items-center p-8 '>
                        <p className='text-center sm:text-left  text-[#777777] '>Authentia is a platform where independent digital artists can claim property rights on their work. Free from intermediaries.</p>
                    </div>
                    <div className='rounded-2xl bg-[#4C4C4C] h-full w-full flex justify-center items-center p-8'>
                        <p className='text-center sm:text-left  text-white'>Prove the authenticity of your work easily with our interface, comparing digital signatures to incorruptible blockchain records.</p>
                    </div> 
                    <div className='rounded-2xl  bg-gradient-to-r from-orange-300 to-orange-400 h-full w-full flex justify-center items-center p-8'>
                        <p className='text-center sm:text-left text-white'>Sell the rights to use your assets with other people from our marketplace.</p>
                    </div>

                </div>

                <div className= "h-[30rem] rounded-2xl mt-4   sm:h-full w-full flex justify-center items-center p-9 bg-[url('/Images/cardBackground.jpg')] bg-cover bg-center ">
                    <div className='text-white text-3xl sm:text-4xl font-semibold text-center sm:text-left mt:[10%] sm:mt-[90%] sm:mr-[30%]  sm:p-8'>
                        <p>YOUR WORK. SECURED. FOREVER.</p>
                    </div>
                </div>

            </div>

        </section>
    </>

  );
};

export default AboutCard;
