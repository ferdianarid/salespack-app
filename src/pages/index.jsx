import React from "react"
import PagesLayout from "../layouts/PagesLayout"
import { BenefitList, FoodGradeBenefit, WhyMustUse } from "../apis"
import HeadingLogo from "../assets/eatpack-header.png"
import pack13 from "../assets/images/pack13.jpg"
import SliderProduct from "../components/organism/SliderProduct"
import brush from "../assets/brush.svg"
import facebook from "../assets/icons/facebook.svg"
import instagram from "../assets/icons/instagram.svg"
import whatsapp from "../assets/icons/whatsapp.svg"
import google from "../assets/icons/google.svg"
import googlebusiness from "../assets/icons/googlebusiness.svg"

const Homepage = () => {
  const BenefitCard = ({ images, title, description }) => {
    return (
      <div className="w-full flex space-x-5">
        <div className="rounded-lg bg-primary-main flex items-center justify-center p-4 w-40 h-fit">
          <img src={images} width={48} alt={images} />
        </div>
        <div className="flex max-w-[320px] md:max-w-[455px] flex-col space-y-1">
          <h3 className="font-bold text-xl text-secondary">{title}</h3>
          <p className="font-normal text-sm text-neutral-60">{description}</p>
        </div>
      </div>
    )
  }
  const PointCard = ({ images, title }) => {
    return (
      <div className="w-full flex bg-primary-main bg-opacity-20 p-4 rounded-lg flex-col space-y-5">
        <div className="rounded-lg bg-primary-main flex items-center justify-center p-4 w-fit h-fit">
          <img src={images} width={48} alt={images} />
        </div>
        <div className="flex max-w-[320px] md:max-w-[455px] flex-col space-y-1">
          <h3 className="font-bold text-md md:text-xl text-secondary">{title}</h3>
        </div>
      </div>
    )
  }
  return (
    <React.Fragment>
      <PagesLayout>
        {/* Header */}
        <div className="bg-primary-main">
          <div className="max-w-[1440px] py-10 md:py-[80px] pt-12 mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-24">
            <div className="md:w-1/2 w-full md:max-w-[530px] max-w-full">
              <h1 className="font-bold text-headline-2 md:text-headline-1 text-neutral-10 leading-[1.1]">Kemasan Food Grade Masa Kini.</h1>
              <p className="text-neutral-10 leading-relaxed text-sm mt-5">Kami hadir untuk membantu Anda mengupgrade bisnis Anda lewat kemasan kekinian yang aman dan cocok untuk semua kebutuhan pengemasan dari produk makanan</p>
              <p className="text-headline-7 ipad:text-sm text-center font-semibold hover:cursor-pointer py-3 bg-secondary rounded-2xl text-white mt-5 md:mt-10 px-8 w-fit">Hubungi Kami</p>
            </div>
            <div className="md:w-1/2 w-full md:ml-14 mt-14 md:mt-4">
              <img src={HeadingLogo} alt="image" />
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="w-full max-w-[1440px] mx-auto py-24 md:py-[130px] px-8 md:px-24 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 md:pr-5">
            <h3 className="font-semibold text-sm text-neutral-10 py-2 px-4 mb-5 rounded-lg bg-primary-main w-fit">Packaging</h3>
            <h1 className="font-bold text-secondary leading-tight md:text-headline-2 text-headline-3">Spesialis Kemasan Food and Beverages.</h1>
            <p className="text-sm font-normal text-neutral-60 leading-relaxed mt-4">Visualisasi kemasan makanan kini menjadi daya tarik utama dari sebuah produk. Raih lebih banyak pelanggan dengan kemasan yang eyecathing dan aesthetic namun tetap aman bagi kesehatan.</p>
          </div>
          <div className="w-full md:ml-8 mt-8 md:mt-0 md:w-1/2">
            <img src={pack13} width={500} className="rounded-3xl object-cover w-full" alt="product" />
          </div>
        </div>
        {/* Benefits */}
        <div className="w-full max-w-[1440px] mx-auto py-[45px] px-8 md:px-24">
          <div className="w-full text-center max-w-[550px] mx-auto">
            <h3 className="font-semibold text-sm text-neutral-10 py-2 px-4 mb-5 rounded-lg bg-primary-main w-fit mx-auto">Upgrade Packaging</h3>
            <h1 className="font-bold text-secondary leading-tight md:text-headline-2 text-headline-3">Mengapa harus upgrade packaging ?</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 md:gap-14 mt-12">
            {BenefitList.map((item) => {
              return (
                <BenefitCard key={item.id} images={item.images} title={item.title} description={item.description} />
              )
            })}
          </div>
        </div>
        {/* Commitment */}
        <div className="w-full max-w-[1440px] mx-auto py-20 px-8 md:px-48">
          <div className="w-full text-center mx-auto bg-primary-main rounded-2xl py-16 px-5 md:px-20">
            <h1 className="font-bold text-neutral-10 md:text-headline-2 text-headline-4">Komitmen Salespack</h1>
            <p className="text-sm font-normal text-neutral-10 mt-4 leading-relaxed">Salespack memiliki komitmen dalam menghadirkan kemasan berbahan kertas dengan <span className="font-bold">nilai estetika terbaik</span> namun memenuhi standar kesehatan yaitu <span className="font-bold py-1 px-2 bg-neutral-10 text-primary-main rounded-md">Food Grade Standart</span></p>
          </div>
        </div>
        {/* Food Grade Benefit */}
        <div className="w-full max-w-[1440px] mx-auto py-[45px] px-8 md:px-24">
          <div className="w-full text-center max-w-[700px] mx-auto">
            <h3 className="font-semibold text-sm text-neutral-10 py-2 px-4 mb-5 rounded-lg bg-primary-main w-fit mx-auto">Food Grade Paper</h3>
            <h1 className="font-bold text-secondary leading-tight md:text-headline-2 text-headline-3">Kelebihan Kertas Food Grade</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10 md:gap-14 mt-12">
            {FoodGradeBenefit.map((item) => {
              return (
                <BenefitCard key={item.id} images={item.images} title={item.title} description={item.description} />
              )
            })}
          </div>
        </div>
        {/* Slider Product Preview */}
        <SliderProduct />
        {/* Banner */}
        <div className="w-full bg-primary-main">
          <div className="max-w-[1440px] mx-auto relative py-32 mb-16 px-4 md:px-[200px]">
            <img src={brush} alt="brush" className="absolute opacity-20 md:opacity-100 -left-3 top-14 scale-110" />
            <img src={brush} alt="brush" className="absolute opacity-20 md:opacity-100 -right-20 md:right-0 md:bottom-2 bottom-10" />
            <h1 className="font-bold text-neutral-10 text-center md:text-headline-3 text-headline-4">Kualitas dan tampilan terbaik kemasan produk adalah prioritas utama di <span className="py-2 px-4 bg-secondary rounded-lg bg-opacity-20">Salespack</span></h1>
          </div>
        </div>
        {/* Partner Packaging */}
        <div className="w-full max-w-[1440px] mx-auto py-[45px] px-8 md:px-24">
          <div className="w-full text-center max-w-[700px] mx-auto">
            <h3 className="font-semibold text-sm text-neutral-10 py-2 px-4 mb-5 rounded-lg bg-primary-main w-fit mx-auto">Business Partner</h3>
            <h1 className="font-bold text-secondary leading-tight md:text-headline-2 text-headline-3">Mengapa harus <span className="py-2 px-4 bg-primary-main rounded-lg bg-opacity-20">Salespack</span> ?</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-12">
            {WhyMustUse.map((item) => {
              return (
                <PointCard key={item.id} images={item.images} title={item.title} />
              )
            })}
          </div>
        </div>
        {/* Call to action Buton */}
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[200px] my-20 z-20 relative">
          <div className="w-full drop-shadow-xl shadow-primary-main rounded-2xl bg-neutral-10 flex flex-col md:flex-row items-center justify-between p-10">
            <div className="max-w-[640px] text-center md:text-left">
              <h1 className="font-bold text-secondary leading-tight md:text-headline-4 text-headline-5">Segera Konsultasikan Kemasan Anda ke Salespack sekarang
              </h1>
              <p className="text-secondary text-opacity-70 font-semibold text-sm py-2 px-4 rounded-lg bg-primary-main bg-opacity-20 w-full md:w-fit mt-4">Salespack best your packaging partners</p>
            </div>
            <p className="text-headline-7 ipad:text-sm text-center mt-7 md:mt-0 font-semibold hover:cursor-pointer py-3 bg-secondary rounded-xl md:rounded-2xl text-white px-8 md:w-fit w-full">Konsultasi Sekarang</p>
          </div>
        </div>
        {/* Footer */}
        <div className="w-full bg-primary-main">
          <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between pt-[180px] -mt-[200px] pb-10 px-4 md:px-24">
            <div className="md:w-[450px] max-w-full">
              <h1 className="font-bold text-3xl text-neutral-10 hover:cursor-pointer">Salespack.</h1>
              <p className="text-sm text-neutral-10 font-normal mt-4 leading-normal">Percetakan yang memiliki pengalaman dalam dunia percetakan lebih dari 25 tahun, Salespack merupakan spesialis pencetakan kemasan kekinian dengan kualitas terbaik. Salespack memiliki semboyan “Eatperience your customer” yang memiliki makna agar para penikmat makanan anda merasakan keunikan dari warna dan desain kemasannya bisnis Food and Beverages mu !</p>
            </div>
            <div className="mt-10 md:mt-0">
              <h2 className="font-bold text-lg text-neutral-10">Artikel</h2>
              <div className="mt-4 flex flex-col space-y-1 md:space-y-3">
                <p className="text-sm hover:underline hover:cursor-pointer text-neutral-10 font-normal">Cara membedakan kualitas kemasan</p>
                <p className="text-sm hover:underline hover:cursor-pointer text-neutral-10 font-normal">Macam-macam model kemasan</p>
                <p className="text-sm hover:underline hover:cursor-pointer text-neutral-10 font-normal">Bahan yang bagus untuk kemasan</p>
                <p className="text-sm hover:underline hover:cursor-pointer text-neutral-10 font-normal">Jenis kertas yang dibuat untuk kemasan</p>
                <p className="text-sm hover:underline hover:cursor-pointer text-neutral-10 font-normal">Kemasan kertas untuk mengurangi penggunaan plastik</p>
              </div>
            </div>
            <div className="mt-10 md:mt-0">
              <h2 className="font-bold text-lg text-neutral-10">Hubungi Kami</h2>
              <div className="mt-4 flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                  <img src={facebook} className="w-8 h-8" alt="facebook" />
                  <p className="text-sm text-neutral-10 font-normal">Facebook Salespack</p>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={instagram} className="w-8 h-8" alt="instagram" />
                  <p className="text-sm text-neutral-10 font-normal">Instagram Salespack</p>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={whatsapp} className="w-8 h-8" alt="whatsapp" />
                  <p className="text-sm text-neutral-10 font-normal">WhatsApp Salespack</p>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={google} className="w-8 h-8" alt="google" />
                  <p className="text-sm text-neutral-10 font-normal">Google Salespack</p>
                </div>
                <div className="flex items-center space-x-2">
                  <img src={googlebusiness} className="w-8 h-8" alt="googlebusiness" />
                  <p className="text-sm text-neutral-10 font-normal">Salespack Business</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 pb-10 md:px-24">
            <p className="text-sm text-neutral-10 font-normal">&copy; 2022 Salespack Nusantara by <span className="py-1 px-2 rounded-md bg-neutral-10 bg-opacity-30 text-neutral-10">Ferdian Ahmad R</span></p>
          </div>
        </div>
      </PagesLayout>
    </React.Fragment>
  )
}

export default Homepage