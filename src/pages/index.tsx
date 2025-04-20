import * as React from 'react';
import Header from '@/components/layout/Header'
import HeroCarousel from '@/components/HeroCarousel'
import HorizontalCards from '@/components/HorizontalCards'
import Countries from '@/components/Countries'
import MobileApp from '@/components/MobileApp'
import FloatingChat from '@/components/FloatingChat'
import Footer from '@/components/layout/Footer'
import GradientComponent from '@/components/GradientComponent'
export default function Home() {

  return (
    <>
    <FloatingChat/>
        <Header />
        <HeroCarousel  />
        <hr className="h-2 bg-gradient-to-r from-yellow-500 to-white border-0"/>
        <HorizontalCards />
        <hr className="h-2 bg-gradient-to-r from-yellow-500 to-white border-0"/>
        <Countries/>
        <MobileApp/>
        <GradientComponent/>   
        <hr className="h-2 bg-gradient-to-r from-yellow-500 to-white border-0"/>
        <Footer/>
    </>
  );
}
