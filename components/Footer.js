import react from "react";
import appstore from '../public/getiri-indirin/indir-app-store.svg';
import googleplay from '../public/getiri-indirin/indir-google-play.svg';
import appgalery from '../public/getiri-indirin/indir-app-galery.svg';
import Image from 'next/image';
import { MdLanguage } from 'react-icons/md';

const style = {
    subItem: ` text-gray-600 hover:text-gray-800 cursor-pointer mb-3  `,
};

const Footer = () => {
    return (
        <div>
            <footer className="bg-white text-gray-600 body-font">
                
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                            <span className="ml-3 text-xl text-purple-900">Getir'i indirin!</span>
                        </a>
                        <div className="mt-2" >
                            <Image src={appstore} />
                            <Image src={googleplay}/>
                            <Image src={appgalery}/>
                        </div>
                    </div>


                    <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <span className="title-font font-medium text-purple-900 tracking-widest text-xl mb-3">Getir'i keşfedin</span>
                            <nav className="list-none mb-10 mt-2 ">
                                <li>
                                    <a className={style.subItem}>Hakkımızda</a>
                                </li>
                                <li>
                                    <a className={style.subItem}>Kariyer</a>
                                </li>
                                <li>
                                    <a className={style.subItem}>Teknoloji Kariyerleri</a>
                                </li>
                                <li>
                                    <a className={style.subItem}>İletişim</a>
                                </li>
                                <li>
                                    <a className={style.subItem}>COVID-19 Durumu</a>
                                </li>
                                <li>
                                    <a className={style.subItem}>Sosyal Sorumluluk Projeleri</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-purple-900 tracking-widest text-xl  mb-3">Yardıma mı ihtiyacınız var?</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Sıkça Sorulan Sorular</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Kişisel Verilerin Korunması</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Gizlilik Politikası</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Kullanım Koşulları</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Çerez Politikası</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-purple-900 tracking-widest text-xl mb-3">İş Ortağımız Olun</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Bayimiz Olun</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Deponuzu Kiralayın</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">GetirYemek Restoranı Olun</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">GetirÇarşı İşletmesi Olun</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Data Matrix</h2>
                            <nav className="list-none mb-10">

                            </nav>
                        </div>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row  items-center ">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 Getir .
                            <a href="#" rel="noopener noreferrer" className="text-purple-700 font-thin ml-1" target="_blank">Bilgi Toplumu Hizmetleri</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500 ">
                                <div className=" items-center flex border rounded p-1">
                                <MdLanguage width={16} height={16} /> 
                                </div>
                            </a>

                        </span>
                    </div>
                </div>

            </footer>


        </div>
    );
};


export default Footer;
