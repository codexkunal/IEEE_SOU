import React, { useEffect, useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(false);
  const [dropDown, setDropdown] = useState(false);
  const [ieeedropDown, setIeeeDropdown] = useState(false);

  const mobileClick = () => {
    setActive(false)
    setDropdown(false)
  }

  const closeNavbar = ()=>{
    pass
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        // setActive(false)
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const SHow = () => {
    setDropdown(!dropDown);
  };
 const SHow2 = () => {
  setIeeeDropdown(!ieeedropDown);
  };


  return (
    <>
    <nav className='specialnav'>
    <div className='speciallinks'>
      <a href='https://www.ieee.org/' target='_blank'>IEEE.org</a>
      <a href='https://ieeexplore.ieee.org/Xplore/home.jsp' target='_blank'>IEEE Xplore Digital Library</a>
      <a href='https://spectrum.ieee.org/' target='_blank'>IEEE Spectrum</a>
      <a href='https://standards.ieee.org/' target='_blank'>IEEE Standard</a>
      <a href='https://www.ieee.org/sitemap.html' target='_blank'>More Sites</a>
    </div>
    </nav>
      <nav className={` ${scrolled ? 'scrolled' : 'navbar'}`}>
        {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
        {/* <AlignJustify /> */}
        <div className="logo">
          <Link to='/'>
          <img src="./ieeeNav.png" alt="Logo" loading='lazy' />
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <span className="tooltip">Home</span>
            <Link to='/'>
            <a href='#'>Home</a>
            </Link>
          </li>

          <li className='abuts'>
            <span className="tooltip">About</span>
            <a href="#about">About <FaChevronDown className='downkey'/></a>
            <div className={`${scrolled?'scrollsubmenulap':'submenulap'}`}>
             
            <Link to='/ieee'><li >IEEE</li></Link>
              <Link to='/sou-ieee-sb'><li >SOU IEEE SB</li></Link>
              <Link to='/sou-ieee-wie-ag'><li >SOU IEEE WIE AG</li></Link>
              <Link to='/sou-ieee-sps-sbc'><li >SOU IEEE SPS SBC</li></Link>
            </div>
          </li>
          <li>
            <span className="tooltip">Events</span>
            <Link to='/events'>
            <a href="#events">Events</a>
            </Link>

          </li>
          <li>
            <span className="tooltip">Members</span>
            <Link to='/members'>
            <a href="#members">Members</a>
            </Link>

          </li>
          <li>
            <span className="tooltip">Awards</span>
            <Link to='/awards'>
            <a href="#awards">Awards</a>
            </Link>

          </li>
          <li>
            <span className="tooltip">Contact Us</span>
            <Link to='/contactus'>
            <a href="#contactus">Contact Us</a>
            </Link>

          </li>
          <li>
            <span className="tooltip">FAQs</span>
            <Link to='/faqs'>
            <a href="#faqs">FAQs</a>
            </Link>

          </li>
        </ul>

        <div className='right-section'>

          <button className="button2">Join IEEE</button>
        </div>
        <div className={`${scrolled ? 'siconic' : 'iconic'}`}>
          <button className="button2">Join IEEE</button>
          {
            active ? <FontAwesomeIcon icon={faXmark} onClick={mobileClick} className={`${scrolled ? 'dicon2' : 'icon2'}`} /> :
              <FontAwesomeIcon icon={faBars} onClick={() => setActive(!active)} className={`${scrolled ? 'dicon2' : 'icon2'}`} />
          }

        </div>
      </nav>


      <div className={`${active ? (scrolled ? 'scrolledmobile' : 'mobile') : 'hideit'}`}>


        <ul className="nav-links">
          <Link to='/' onClick={closeNavbar}><li><a href='/'>Home</a></li></Link>
          <Link><li onClick={SHow}><a href="#about">About {dropDown?<FaChevronUp className='mdownkey'/>:<FaChevronDown className='mdownkey'/>}
           </a></li></Link>
          {dropDown &&
            <div className='submenu'>
              <Link to='/ieee' onClick={closeNavbar}><li >IEEE</li></Link>
              <Link to='/sou-ieee-sb' onClick={closeNavbar}><li >SOU IEEE SB</li></Link>
              <Link to='/sou-ieee-wie-ag' onClick={closeNavbar}><li >SOU IEEE WIE AG</li></Link>
              <Link to='/sou-ieee-sps-sbc' onClick={closeNavbar}><li >SOU IEEE SPS SBC</li></Link>
            </div>}
          <Link to='/events' onClick={closeNavbar}><li><a href='/events'>Events</a></li></Link>
          <Link to='/members' onClick={closeNavbar}>     <li><a href='/members'>Members</a></li></Link>
          <Link to='/awards' onClick={closeNavbar}>     <li><a href='/awards'>Awards</a></li></Link>
          <Link to='contactus' onClick={closeNavbar}> <li><a href='/contactus'>Contact Us</a></li></Link>
          <Link to='/faqs' onClick={closeNavbar} >   <li><a href='/faqs'>FAQs</a></li></Link>
          <Link><li onClick={SHow2}><a href="#about">IEEE.org {ieeedropDown?<FaChevronUp className='mdownkey'/>:<FaChevronDown className='mdownkey'/>}
           </a></li></Link>
          {ieeedropDown &&
            <div className='submenu'>
              <Link to='https://www.ieee.org/' onClick={closeNavbar} target='_blank'><li >IEEE.org</li></Link>
              <Link to='https://ieeexplore.ieee.org/Xplore/home.jsp' onClick={closeNavbar} target='_blank'><li >IEEE Xplore Digital Library</li></Link>
              <Link to='https://spectrum.ieee.org/' onClick={closeNavbar} target='_blank'><li >IEEE Spectrum</li></Link>
              <Link to='https://standards.ieee.org/' onClick={closeNavbar} target='_blank'><li >IEEE Standard</li></Link>
              <Link to='https://www.ieee.org/sitemap.html' onClick={closeNavbar} target='_blank'><li >More Sites</li></Link>
            </div>}
        </ul>

      </div>
     
    </>
  )
}
