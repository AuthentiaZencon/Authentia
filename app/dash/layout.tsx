import { Sidebar } from "./register/components"

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <main className="w-full h-screen bg-red-300">

            <aside className="hidden md:block w-full md:w-64 h-full bg-white">
                <Sidebar />
            </aside>

        </main>
    )

}