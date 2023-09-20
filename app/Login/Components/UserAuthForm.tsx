'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image';
import TextInput from './TextInput';
import SelectOption from './SelectOption';

const UserAuthForm = () => {
    const [formPage, setFormPage] = useState(1);
    const [openSectorSelect, setOpenSectorSelect] = useState(false);
    const [sector, setSector] = useState('');
    const [country, setCountry] = useState('');
  return (
    <section className='col-span-2 text-white px-32 py-28 h-screen min-h-fit font-light flex flex-col justify-center relative items-center'>
        <p className='absolute right-[5%] top-[5%]'>
            Already a member? <Link href="" className='transition-all text-[#D0AE66] underline hover:text-[#f3d28a]'>Log in</Link>
        </p>
        <form className='backdrop-blur-sm rounded-md w-full px-9 py-8 flex flex-col gap-14 bg-[#1B1B1B] border-[0.3px] border-[#747272]'>
            <div>
                <h1 className='text-[52px]'>
                    Create Account
                </h1>
                <h2 className='text-lg '>
                    We are delighted to meet you!
                </h2>
            </div>
            <div className={`grid ${formPage > 1 ? 'grid-cols-1' : 'grid-cols-2'} overflow-y-auto grid-cols-2 gap-y-9 gap-x-[3.75rem] text-xl`}>
                { formPage > 1 ? (
                    <>
                        <button type='button' className={`flex justify-between transition-all ${openSectorSelect ? 'border-b-0' : 'border-b-2'}  border-white border-opacity-50 focus:border-opacity-100 hover:border-opacity-100 ${sector ? 'text-white' : 'text-[#9CA38E]'}`} onClick=   {() => setOpenSectorSelect(!openSectorSelect)}>
                            {sector ? sector : 'What sector do you belong to?'} 
                            <Image src={openSectorSelect ? '/icons/chevronup.svg' : '/icons/chevrondown.svg' } alt='go back' width={21} height={21} className='text-white'/>
                        </button>
                        <div className={`${openSectorSelect ? 'block' : 'hidden'} px-4 border-[#A7A7A7] border-b-2 flex flex-col items-start pb-4`}>
                            <SelectOption option='Architecture' selected={sector} changeSelection={setSector}/>
                            <SelectOption option='Graphic Design' selected={sector} changeSelection={setSector}/>
                            <SelectOption option='Animation' selected={sector} changeSelection={setSector}/>
                            <SelectOption option='Photography' selected={sector} changeSelection={setSector}/>
                            <SelectOption option='Film' selected={sector} changeSelection={setSector}/>
                            <SelectOption option='Art' selected={sector} changeSelection={setSector}/>
                            <SelectOption option='3D Design' selected={sector} changeSelection={setSector}/>
                            <SelectOption option='Other' selected={sector} changeSelection={setSector}/>
                        </div>
                    </>
                ) : 
                (
                    <>
                        <TextInput className='col-span-2' placeholder='Full name' />
                        <TextInput placeholder='Email' />
                        <select name="" id="" className={`bg-transparent transition-all border-b-2 border-white hover:cursor-pointer border-opacity-50 ${country ? 'text-white' : 'text-[#9CA38E]'} focus:border-opacity-100 hover:border-opacity-100`} onChange={(e) => setCountry(e.target.value)}>
                            <option value="" className='hover:bg-slate-400 bg-zinc-900'>Country</option>
                            <option value="br" className='hover:bg-slate-400 bg-zinc-900' >Brazil</option>
                        </select>
                        <TextInput placeholder='Phone number' />
                        <TextInput placeholder='Password' />   
                    </>
                )

                }

            </div>
            <div className='flex justify-between mt-4'>
                <button type='button' className={`hover:opacity-80 underline-animation ${formPage < 2 ? 'hidden' : 'block'}`} onClick={() => setFormPage(formPage - 1)}>
                    <Image src='/icons/larrow.svg' alt='go back' width={21} height={21}/>
                </button>
                <button type='button' className={`flex items-center gap-2 text-3xl hover:opacity-80 underline-animation ${formPage < 2 ? 'ml-auto' : 'ml-0'}`} onClick={() => setFormPage(formPage + 1)}>
                    <p>
                        Next
                    </p>
                    <Image src='/icons/rarrow.svg' alt='go back' width={21} height={21}/>
                </button>
            </div>
        </form> 
    </section>
  )
}

export default UserAuthForm;