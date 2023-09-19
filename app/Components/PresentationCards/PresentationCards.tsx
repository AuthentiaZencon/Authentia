
import React from 'react';
import ZenicLogo from '/Images/zeniclogo.png';
import ZenicChainLogo from '/Images/Logo.svg';

const zenicChain = '/Images/Logo.svg';


export const PresentationCards = () => {
  return (
    <>

    <section className=' w-full  max-w-[320px] min-[320px]:max-w-full sm:max-w-6xl space-y-5'>



      <div className=' flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 md:space-y-0 space-y-4 h-full justify-center items-center '>
            <div className="h-fit sm:h-[150px] rounded-2xl space-x-2 md:space-x-5 space-y-5 sm:space-y-2  p-4 flex-col md:flex-row flex justify-center items-center  text-[#595B5D] w-full sm:w-7/12 bg-[#FDE4C3] ">
              <img className='w-16 md:w-28 ' src='/Images/Logo.svg' alt='logo zenic'/>
                <p className='text-2xl md:text-4xl lg:text-4xl font-bold text-center' >Using Zeniq SmartChain</p>
            </div>     

            <div className='rounded-2xl  flex justify-center items-center h-fit sm:h-[150px] p-4 w-full sm:w-7/12 text-[#ffffff] bg-gradient-to-r from-orange-300 to-orange-400'>
                <p className='text-2xl sm:text-[1.4rem] md:text-2xl font-bold text-left p-2' >Unleash the potential of your genius: exchange and capitalize on your most valuable ideas.</p>
            </div>
                  
      </div>

      <div className='py-32 text-3xl min-[500px]:text-5xl sm:text-6xl md:text-7xl sm:space-x-4  flex flex-col sm:flex-row items-center justify-center text-white '>
          <h1 className=''>Introducing </h1>
          <a className='text-[#FDE4C3]' href=""> Authentia</a>
      </div>


      <div className='h-full  flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 md:space-y-0 space-y-4  '>
          <div className="rounded-2xl flex-auto flex justify-center items-center space-x-3 text-white p-4  min-h-[18rem] w-full  sm:w-7/12 relative">
                <div 
                  className="bg-transparent text-transparent ring-transparent rounded-2xl absolute inset-0 bg-gradient-to-r from-black from-10% via-transparent via-30% to-black to-90% opacity-50 z-10" />
                <div
                  className="rounded-2xl absolute inset-0   bg-[url('/Images/imagennueva2.jpg')] bg-cover bg-center z-0"
                ></div>
                <p className="text-2xl font-bold text-left relative z-20 ">
                  Protect your artistic works with an immutable and indelible certificate of authenticity.
                </p>
          </div>  

          <div className="rounded-2xl flex-auto flex flex-col md:flex-row justify-center items-center space-x-0 space-y-5 sm:space-y-2 sm:space-x-5 text-[#141414] bg-[#ffffff] p-8">
              <p className='text-2xl font-bold text-left ' >Using ZENIQ SMART CHAIN, we build a secure, transparent environment to protect intellectual property and combat piracy.</p>
              <img className='w-40' src={zenicChain} alt='logo zenic'/>

          </div> 

      </div>


      <div className="flex rounded-2xl overflow-hidden w-full  max-w-[320px] min-[320px]:max-w-full sm:max-w-6xl justify-center items-center  h-[496px] bg-[url('/Images/imagennueva1.jpg')] bg-cover bg-center">

          <p className='text-3xl sm:text-5xl text-white font-medium text-center sm:text-left mr-0 sm:mt-[10%] md:mt-[20%] sm:mr-[40%] md:mr-[50%] p-8 '>Sign and protect your work with the immutable certification of <a className='bg-[#D2C9A9]'>Authentia.</a></p>

      </div>
    </section>


    </>

  )
}
