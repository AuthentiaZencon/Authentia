import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Navbar } from './Components/Navbar/Navbar';
import AboutCard from './Components/AboutCard/AboutCard';
import { PresentationCards } from './Components/PresentationCards/PresentationCards';
import './Styles/Navbar.css'




export default function Home() {
  return (
    <main className="w-full  h-full flex flex-col justify-center items-center space-y-5 px-6 pt-10">

        <Navbar />

        <PresentationCards />

        <AboutCard/>

    </main>
  )
}
