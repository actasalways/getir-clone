import React from 'react';
import Card from "./Card";
import yeni_urunler from "../public/kategoriler/yeni-urunler.jpg";
import suveicecek from "../public/kategoriler/su-ve-icecek.jpeg";
import meyvevesebze from "../public/kategoriler/meyve-ve-sebze.jpeg";
import firindan from "../public/kategoriler/firindan.jpeg";
import temelgida from "../public/kategoriler/temel-gida.jpeg";
import atistirmalik from "../public/kategoriler/atistirmalik.jpeg";
import dondurma from "../public/kategoriler/dondurma.jpeg";
import suturunleri from "../public/kategoriler/sut-urunleri.jpeg";
import kahvaltilik from "../public/kategoriler/kahvaltilik.jpeg";
import yiyecek from "../public/kategoriler/yiyecek.jpeg";
import fitveform from "../public/kategoriler/fit-ve-form.jpeg";
import kisiselbakim from "../public/kategoriler/kisisel-bakim.jpeg";
import evbakim from "../public/kategoriler/ev-bakim.jpeg";
import evveyasam from "../public/kategoriler/ev-ve-yasam.jpeg";
import teknoloji from "../public/kategoriler/teknoloji.jpeg";
import evcilhayvan from "../public/kategoriler/evcil-hayvan.jpeg";
import bebek from "../public/kategoriler/bebek.jpeg";
import cinselsaglik from "../public/kategoriler/cinsel-saglik.jpeg";

const data = [

  {
    image_url: yeni_urunler,
    title: "Yeni Ürünler"
  },
  {
    image_url: suveicecek,
    title: "Su & İçecek"
  },
  {
    image_url: meyvevesebze,
    title: "Meyve & Sebze"
  },
  {
    image_url: firindan,
    title: "Fırından"
  },
  {
    image_url: temelgida,
    title: "Temel Gıda"
  },
  {
    image_url: atistirmalik,
    title: "Atıştırmalık"
  },
  {
    image_url: dondurma,
    title: "Dondurma"
  },
  {
    image_url: suturunleri,
    title: "Süt Ürünleri"
  },
  {
    image_url: kahvaltilik,
    title: "Kahvaltılık"
  },
  {
    image_url: yiyecek,
    title: "Yiyecek"
  },
  {
    image_url: fitveform,
    title: "Fit & Form"
  },
  {
    image_url: kisiselbakim,
    title: "Kişisel Bakım"
  },
  {
    image_url: evbakim,
    title: "Ev Bakım"
  },
  {
    image_url: evveyasam,
    title: "Ev & Yaşam"
  },
  {
    image_url: teknoloji,
    title: "Teknoloji"
  },
  {
    image_url: evcilhayvan,
    title: "Evcil Hayvan"
  },
  {
    image_url: bebek,
    title: "Bebek"
  },
  {
    image_url: cinselsaglik,
    title: "Cinsel Sağlık"
  },

]

const Cards = (props) => {
  return (
    <div className="">
      <h6 className="text-black opacity-70 font-bold text-xl ">Kategoriler</h6>
      <div
        className="bg-white 
                    2xl:grid 2xl:grid-cols-10 
                    xl:grid xl:grid-cols-8 
                    lg:grid lg:grid-cols-6 
                    md:grid md:grid-cols-4 
                    sm:grid sm:grid-cols-3 "
      >

        {
          data.map((item, i) => {
            return (
              < Card image_url={item.image_url} title={item.title} />
            )
          })
        }

      </div>
    </div>
  );
};

export default Cards;
