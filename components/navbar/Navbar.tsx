import { menuData } from "@/lib/storage/menu"
import Logo from "./logo/Logo"
import MainMenu from "./menu/MainMenu"

import ContactMenu from "./contactMenu/ContatctMenu"

export default function Navbar () {
    return (
        <div className="container mx-auto lg:flex justify-between py-10 bg-color">
            <Logo/>
            <MainMenu menu ={menuData}/>
            <ContactMenu />
        </div>
    )
} 