import Head from "next/head";
import Navbar from "../component/navbar";
import style from "../style/makanan.module.css"
import style2 from "../style/home.module.css"
import corn from "../img/corn-dogs.jpg"
import Image from "next/image";
import dimsum from "../img/dimsum.jpg"
import gacoan from "../img/gacoan.jpg"

export default function makanan() {
    return (
        <div className={style2.container}>
            <Head>
                <title>List Foods</title>
            </Head>

            <Navbar />
            <div className={style.Hero}>
                <h1>Foods Menu</h1>
                <div className={style.flex}>
                <div className={style.card}>
                    <Image src={corn} className={style.image}/>
                    <p>Corn Dogs</p>
                </div>
                <div className={style.card}>
                    <Image src={dimsum} className={style.image}/>
                    <p>Dimsum</p>
                </div>
                <div className={style.card}>
                    <Image src={gacoan} className={style.image}/>
                    <p>Mie Gacoan</p>
                </div>
                </div>
            </div>
        </div>
    )
}