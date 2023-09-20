import ZenicChainLogo from 'Images/ZenicChainLogo.png';
import React from 'react';
import { useState} from 'react';
import Link from 'next/link'

import { ImageGrid } from '../Components/ImageGridLogin/ImageGrid';

import { GeneralNavbar } from '../Components/GeneralNavbar/GeneralNavbar';
import UserAuthForm from './Components/UserAuthForm';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const Login = () => {
    const navbarLinks = [
        { label: 'About', link: '/About' },
        { label: 'Services', link: './../StillInProgress' },
        { label: 'Login', link: './../StillInProgress|' },
    ]
    

    return(

        <>

            <main className="w-full h-full grid grid-cols-3">

                <ImageGrid  />

                <UserAuthForm></UserAuthForm>

            </main>
        </>

    );

}

export default Login;
