import Head from "next/head";
import Navbar from "../component/navbar";
import style from "../style/home.module.css"

export default function Page() {
    return (
        <div className={style.container}>
            <Head>
                <title>Aplikasi Sederhana</title>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>

            <Navbar />
            <main className={style.main}>
                <img src="/img.svg" className={style.image}/>
                <h1>Search favorite Food, <br />Delivery Faster</h1>
                <p>buy your favorite food,drink and dessert. We ready for your delivery. Thanks for visited.</p>
                <a href="/apps/foods"><button className={style.router}>Search Foods</button></a>
            </main>


        </div>

        
    )
}