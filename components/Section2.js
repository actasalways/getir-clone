import Image from "next/image";
import appstore from '../public/getiri-indirin/indir-app-store.svg';
import googleplay from '../public/getiri-indirin/indir-google-play.svg';
import appgalery from '../public/getiri-indirin/indir-app-galery.svg';
import indir from '../public/getiri-indirin/indir-resim.png';

const Section2 = () => {
    return (
        <div className="rounded-2xl border bg-repeat m-2 
           bg-[url('../public/getiri-indirin/doodle.png')] 
           ">
            {/* #5b3dbb  */}
            <section className="grid grid-flow-col grid-cols-2 items-center justify-items-stretch">

                <div className=" justify-start m-8">
                    <h2 className="text-white text-3xl font-bold">Getir'i indirin!</h2>
                    <span className="text-white text-xl font-bold mt-2">İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</span>
                    <div className="grid grid-flow-col m-8">
                        <Image src={appstore} />
                        <Image src={googleplay} />
                        <Image src={appgalery} />
                    </div>
                </div>

                <div className=" rounded-2xl justify-self-end " >
                        <div className="h-full w-full -mb-2">
                        <Image src={indir}  />
                        </div>
                </div>
            </section>




        </div>
    );
};


export default Section2;
