import { Sidebar } from "./register/components"

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <main className="w-full h-screen">

            <aside className="hidden md:block w-full md:w-64 h-full border-r border-[#3B3E3C]">
                <Sidebar />
            </aside>

            <aside className="w-full md:w-[calc(256px-100%)] h-full">
                {children}
            </aside>

        </main>
    )

}