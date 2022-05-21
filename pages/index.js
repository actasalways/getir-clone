import Head from 'next/head';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Kategoriler from "../components/Kategoriler";
import Sales from "../components/Sales";
import Section from "../components/Section";
import Section2 from "../components/Section2";
import TelForm from "../components/TelForm";
import Kampanyalar from "../components/Kampanyalar";
import Slider from "../components/Slider";



// react.lazy() -> kullanışlı ve + duruyor 
// https://www.linkedin.com/posts/furkanturkyilmaz_react-html-javascript-activity-6929690163354738688-spfW?utm_source=linkedin_share&utm_medium=member_desktop_web

export default function Home() {
  return (

    <div className="bg-gray-100">
      <Navbar />
      {/* <Slider /> */}
      {/* <div className="container mx-auto px-4">
        <Kategoriler />
        <Kampanyalar />
        <Sales title="Favoriler" />
        <Section2 />
        <Section />
      </div> */}

      {/* <TelForm /> */}
 



      <Footer />
    </div>
  );
}
