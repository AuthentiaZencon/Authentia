'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'

const ROUTES = [
    { id: 1, name: 'My Certificates', path: '/dash/certificates', icon: '/icons/certificates.svg' },
    { id: 2, name: 'Register a property', path: '/dash/register', icon: '/icons/register.svg' },
    { id: 3, name: 'Marketplace', path: '/dash/marketplace', icon: '/icons/market.svg' },
]

export const Sidebar = () => {

    const pathname = usePathname()

    return(
        <nav className="w-full h-full flex flex-col justify-start items-center">

            <Link href={'/dash/marketplace'} className="w-full h-11 mt-10 flex justify-center items-center" >
                <div className="flex items-center gap-4">
                                
                                <div
                                    className="w-12 h-12 flex justify-center items-center"
                                    >
                                    <img className='text-sm' alt="Logo " src="/Images/AuthentiaLogo.svg" />
                                </div>
                                <p className='text-[#E2E2E2] text-3xl'>Authentia</p>

                </div>
            </Link>

            <ul className="mt-14 flex flex-col gap-5 w-full">
                {
                    ROUTES.map((route) => (
                        <li key={route.id} className={`text-xl px-4 py-2 flex justify-start items-center gap-4 text-[#B0B0B0] ${ pathname === route.path ? 'bg-[#2C2C2C] text-white border-r-4 border-[#A19165]' : '' } `}>
                            <Image src={route.icon} alt={route.name} width={25} height={25} />
                            <Link href={route.path}>
                                { route.name }
                            </Link>
                        </li>   
                    ))
                }
            </ul>
        </nav>
    )

}