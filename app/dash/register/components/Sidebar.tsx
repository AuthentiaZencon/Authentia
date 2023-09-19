import Image from "next/image"

const ROUTES = [
    { id: 1, name: 'My Certificates', path: '/dash/certificates', icon: '/icons/certificates.svg' },
    { id: 2, name: 'Register a property', path: '/dash/register', icon: '/icons/register.svg' },
    { id: 3, name: 'Marketplace', path: '/dash/marketplace', icon: '/icons/market.svg' },
]

export const Sidebar = () => {

    return(
        <nav className="w-full h-full flex flex-col justify-start items-center">

            <div className="w-full h-11 bg-pink-500 mt-10" />

            <ul className="mt-14 flex flex-col gap-6 w-full">
                {
                    ROUTES.map((route) => (
                        <li key={route.id} className="bg-red-200 text-xl px-4 flex justify-start items-center">
                            <Image src={route.icon} alt={route.name} width={25} height={25} />
                            <span className="ml-4">{route.name}</span>
                        </li>   
                    ))
                }
            </ul>
        </nav>
    )

}