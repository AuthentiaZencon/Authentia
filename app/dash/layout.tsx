import { Sidebar } from "./components"

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <main className="w-full h-screen flex">

            <aside className="hidden md:block w-full md:w-80 h-full border-r border-[#3B3E3C]">
                <Sidebar />
            </aside>

            <aside className="w-full h-full pt-16 px-14 overflow-y-auto">
                {children}
            </aside>

        </main>
    )

}