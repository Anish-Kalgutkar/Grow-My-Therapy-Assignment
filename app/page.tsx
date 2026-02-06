import Navbar from "@/components/navbar";
import  Hero  from "@/components/hero";
import  Services  from "@/components/services";
import  About  from "@/components/about";
import Faq from '@/components/faq';
import Office from "@/components/office";
import Contact from "@/components/contact";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <Services />
      <About />
      <Faq />
      <Office />
      <Contact />
      <Footer />
   
    </>
  );
}







