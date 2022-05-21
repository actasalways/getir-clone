import React from 'react';
import Image from 'next/image';
import SaleCard from './SaleCard';

import kuzeyden from "../public/favoriler/kuzeyden.jpeg";
import kizilayerzincan from "../public/favoriler/kizilay-erzincan.jpeg";
import napoliten from "../public/favoriler/ulker-napoliten.jpeg";
import lays from "../public/favoriler/lays-mevsim-yesillikli.jpeg";
import cekirdek from "../public/favoriler/kavrulmus-siyah-ay-cekirdegi.jpeg";
import magnum from "../public/favoriler/magnum-badem.jpeg";
import tost from "../public/favoriler/uno-tost-ekmegi.jpeg";
import sut from "../public/favoriler/icim-3-yagli-sut.jpeg";
import suzme from "../public/favoriler/bahcivan-suzme-peynir.jpeg";
import zeytin from "../public/favoriler/hertane-kuru-sele-zeytin.jpeg";
import spaghetti from "../public/favoriler/nuhun-ankara-spaghetti.jpeg";
import colgate from "../public/favoriler/colgate-optic-white.jpeg";
import elidor from "../public/favoriler/elidor-guclu-ve-parlak-sampuan.jpeg";
import solo from "../public/favoriler/solo-tuvalet-kagidi.jpeg";
import yumos from "../public/favoriler/yumos-extra-orkide-yasemin.jpeg";
import domestos from "../public/favoriler/domestos-dag-esintisi.jpeg";

const data = [
    {
        image_url: kuzeyden,
        title: "Kuzeyden",
        price: "7,75",
        quantity: "1,5 L"
    },
    {
        image_url: kizilayerzincan,
        title: "Kızılay Erzincan",
        price: "3,95",
        quantity: "6 x 200 ml"
    },
    {
        image_url: napoliten,
        title: "Ülker Napoliten",
        price: "4,40",
        quantity: "33 g"
    },
    {
        image_url: lays,
        title: "Lay's Mevsim Yeşillik",
        price: "8,95",
        quantity: "96 g"
    },
    {
        image_url: cekirdek,
        title: "Kavrulmuş Siyah Ay Çekirdeği",
        price: "9,85",
        quantity: "180 g"
    },
    {
        image_url: magnum,
        title: "Magnum Badem",
        price: "11,50",
        quantity: "100 ml"
    },
    {
        image_url: tost,
        title: "Uno Tost Ekmeği",
        price: "10,95",
        quantity: "350 g"
    },
    {
        image_url: sut,
        title: "İçim %3 Yağlı Süt",
        price: "12,95",
        quantity: "1 L"
    },
    {
        image_url: suzme,
        title: "Bahçıvan Süzme Peynir",
        price: "30,95",
        quantity: "500 g"
    },
    {
        image_url: zeytin,
        title: "Hertane Kuru Sele",
        price: "39,90",
        quantity: "285 g"
    },
    {
        image_url: spaghetti,
        title: "Nuh'un Ankara Spaghetti",
        price: "7,50",
        quantity: "500 g"
    },
    {
        image_url: colgate,
        title: "Colgate Optik White",
        price: "39,90",
        quantity: "75 ml"
    },
    {
        image_url: elidor,
        title: "Elidor Güçlü ve Parlak Şampuan",
        price: "37,50",
        quantity: "650 ml"
    },

    {
        image_url: solo,
        title: "Solo Tuvalet Kağıdı",
        price: "55,90",
        quantity: "16'lı"
    },
    {
        image_url: yumos,
        title: "Yumos Extra Orkide Yasemin",
        price: "39,99",
        quantity: "1440 ml"
    },
    {
        image_url: domestos,
        title: "Domestos Dağ Esintisi",
        price: "14,75",
        quantity: "750 ml"
    },

];

const Sales = (props) => {
    return (
        <div className='p-2 rounded-xl'>
            <h6 className="text-black opacity-70 font-bold text-2xl ">{props.title}</h6>
            <div className='bg-white  rounded
                            2xl:grid 2xl:grid-cols-8 
                            xl:grid xl:grid-cols-5 
                            lg:grid lg:grid-cols-5 
                            md:grid md:grid-cols-3 
                            sm:grid sm:grid-cols-3
            '>
                {
                    data.map((item, i) => {
                        return (
                                <SaleCard image_url={item.image_url} title={item.title} price={item.price} quantity={item.quantity} key={i} />
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Sales;
