import Link from "next/link"
import style from "../style/navbar.module.css"

export default function Navbar() {
    return (
        <nav className={style.nav}>
            <p>Cafetaria</p>
            <ul>
                <li><a href="/apps">Home</a></li>
                <li><Link href="/apps/foods">Foods</Link></li>
            </ul>


        </nav>

        
    )
}