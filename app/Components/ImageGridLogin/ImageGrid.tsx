import React from 'react';

export const ImageGrid = () => {

  return (

    <>

        <section className='min-w-[300px] sm:w-3/12 sm:h-[100vh] sm:flex-col flex '>

            <div className='h-1/2 w-full flex flex-row'>
                <div className='h- w-1/2 flex flex-col  justify-center items-center text-xl md:text-2xl lg:text-3xl font-semibold text-left '>
                    <img src='/Images/ImageGrid_Logo.png' className='bg-center h-1/2 w-full flex justify-center items-center'/>
                    <img src='/Images/ImageGrid_1.png' className='bg-cover bg-center h-1/2 w-full flex justify-center items-center'/>
                </div>
                <img src='/Images/ImageGrid_2.png' className='flex w-1/2 bg-cover bg-center sm:h-full justify-center items-center'/>
            </div>

            <div className='h-1/2 w-full'>

                <img src='/Images/ImageGrid_3.png' className='flex w-full bg-cover bg-center h-full justify-center items-center'/>
            </div>
        </section>

    </>

  )
}
