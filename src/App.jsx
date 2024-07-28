import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy,Suspense } from 'react'
import HeaderSkeleton from './components/HeaderSkeleton/HeaderSkeleton'
import Skeleton from './components/skeleton/Skeleton'
const Home = lazy(()=>import('./pages/Home/Home'))
const Contact = lazy(()=>import('./pages/contact/Contact'))
const Members = lazy(()=>import('./pages/Member/Members'))
const Awards = lazy(()=>import('./pages/awards/Awards'))
const Faqs = lazy(()=>import('./pages/kf/Faq'))
const Event = lazy(()=>import('./pages/Event/Event'))
const Ieee = lazy(()=>import('./pages/ieee/Ieee'))
const IeeeSb = lazy(()=>import('./pages/ieee-sb/IeeeSb'))
const IeeeWieAg = lazy(()=>import('./pages/ieee-wie-ag/IeeeWieAg'))
const IeeeSpsSbc = lazy(()=>import('./pages/ieee-sps-sbc/IeeeSpsSbc'))
const Header = lazy(()=>import('./components/Header/Header'))
const Footer = lazy(()=>import('./components/footer/Footer'))
export default function App() {

  const isProduction = true
  if (isProduction) {
    console.error = () => {};
    console.warn = () => {};
  }
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<HeaderSkeleton/>}>

        <Header />
      </Suspense>
          <Suspense fallback={<Skeleton/>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Event />} />
          <Route path='/members' element={<Members />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/ieee' element={<Ieee />} />
          <Route path='/sou-ieee-sb' element={<IeeeSb />} />
          <Route path='/sou-ieee-wie-ag' element={<IeeeWieAg />} />
          <Route path='/sou-ieee-sps-sbc' element={<IeeeSpsSbc />} />
          <Route path='/awards' element={<Awards />} />
          <Route path='/faqs' element={<Faqs />} />
         
        </Routes>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>

        <Footer />
      </Suspense>
      </BrowserRouter>
    </>
  )
}

{/* <Header/> */ }
{/* <Navbar/> */ }
{/* <Event/> */ }