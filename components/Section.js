import Image from "next/image";
import pic1 from "../public/section/pic1.svg";
import pic2 from "../public/section/pic2.svg";
import pic3 from "../public/section/pic3.svg";

const Section = () => {
    return (
           <div className="grid grid-flow-col justify-items-start ">
                <div id="card1"  className="p-12 px-14 m-6 bg-white rounded-2xl">
                    <div className="flex justify-center items-center ">
                        <Image
                            src={pic1}
                            className=" flex justify-center items-center  "
                            priority
                        />
                    </div>
                    <span className="text-purple-700 font-bold flex justify-center items-center">
                        Her siparişinize bir kampanya
                    </span>
                    <span className="text-black flex justify-center items-center ">
                        Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.
                    </span>
                </div>

                <div id="card2" className="p-12 px-14 m-6 bg-white rounded-2xl">
                    <div className="flex justify-center items-center">
                        <Image
                            src={pic2}
                            className=" flex justify-center items-center  "
                            priority
                        />
                    </div>
                    <span className="text-purple-700 font-bold flex justify-center items-center">
                        Dakikalar içinde kapınızda
                    </span>
                    <span className="text-black flex justify-center items-center ">
                        Getir’le siparişiniz dakikalar içinde kapınıza gelir.
                    </span>
                </div>

                <div id="card3" className="p-12 px-14 m-6 bg-white rounded-2xl">
                    <div className="flex justify-center items-center">
                        <Image
                            src={pic3}
                            className=" flex justify-center items-center  "
                            priority
                        />
                    </div>
                    <span className="text-purple-700 font-bold flex justify-center items-center">
                        Binlerce çeşit mutluluk
                    </span>
                    <span className="text-black flex justify-center items-center ">
                        Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz..
                    </span>
                </div>
            </div>
    );
};




export default Section;
