import React, { useState } from 'react'
import './Contact.css'
// import './nc.css'
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { Helmet } from 'react-helmet-async';
// import LocationIcon from './Location.svg';


function Contact() {

    const [inputNameField, setInputNameField] = useState(false);
    const [inputEmailField, setInputEmailField] = useState(false);
    const [inputPhoneField, setInputPhoneField] = useState(false);
    const [inputMessageField, setInputMessageField] = useState(false);

    function handleInputNameField() {
        // setInputNameField(true);
        setInputNameField(!inputNameField);
    }

    function handleInputEmailField() {
        setInputEmailField(!inputEmailField);
    }

    function handleInputPhoneField() {
        setInputPhoneField(!inputPhoneField);
    }

    function handleInputMessageField() {
        setInputMessageField(!inputMessageField)
    }

    return (
        <>
            <Helmet>
                <title>Contact us</title>
                <meta name='description' content='contact ieee sou get help' />
                <link rel='canonical' href='http://localhost:5173/contactus' />
            </Helmet>
            <div id='contact'>
                <div className='problem-area'>

                    <div className='problem-title'>
                        <p>CONTACT US</p>
                        <h1>Let's talk about your problem.</h1>
                    </div>

                </div>


                <div className='address-area'>
                    <div className='address address-1'>
                        <div className='location-icon'>
                            <svg height="35" viewBox="0 0 29 35" width="29" className="fill-current">
                                <path d="M14.5 0.710938C6.89844 0.710938 0.664062 6.72656 0.664062 14.0547C0.664062 19.9062 9.03125 29.5859 12.6406 33.5234C13.1328 34.0703 13.7891 34.3437 14.5 34.3437C15.2109 34.3437 15.8672 34.0703 16.3594 33.5234C19.9688 29.6406 28.3359 19.9062 28.3359 14.0547C28.3359 6.67188 22.1016 0.710938 14.5 0.710938ZM14.9375 32.2109C14.6641 32.4844 14.2812 32.4844 14.0625 32.2109C11.3828 29.3125 2.57812 19.3594 2.57812 14.0547C2.57812 7.71094 7.9375 2.625 14.5 2.625C21.0625 2.625 26.4219 7.76562 26.4219 14.0547C26.4219 19.3594 17.6172 29.2578 14.9375 32.2109Z"></path>
                                <path d="M14.5 8.58594C11.2734 8.58594 8.59375 11.2109 8.59375 14.4922C8.59375 17.7188 11.2187 20.3984 14.5 20.3984C17.7812 20.3984 20.4062 17.7734 20.4062 14.4922C20.4062 11.2109 17.7266 8.58594 14.5 8.58594ZM14.5 18.4297C12.3125 18.4297 10.5078 16.625 10.5078 14.4375C10.5078 12.25 12.3125 10.4453 14.5 10.4453C16.6875 10.4453 18.4922 12.25 18.4922 14.4375C18.4922 16.625 16.6875 18.4297 14.5 18.4297Z"></path>
                            </svg>

                        </div>
                        <div className='full-adrress'>
                            <p className='address-Location'>Our Location</p>
                            <p>201 Apple Lab B-block silver oak university</p>
                        </div>
                    </div>

                    <div className='address message-1'>
                        <div className='location-icon'>
                            {/* <CiMail /> */}
                            <svg height="25" viewBox="0 0 34 25" width="34" className="fill-current"><path d="M30.5156 0.960938H3.17188C1.42188 0.960938 0 2.38281 0 4.13281V20.9219C0 22.6719 1.42188 24.0938 3.17188 24.0938H30.5156C32.2656 24.0938 33.6875 22.6719 33.6875 20.9219V4.13281C33.6875 2.38281 32.2656 0.960938 30.5156 0.960938ZM30.5156 2.875C30.7891 2.875 31.0078 2.92969 31.2266 3.09375L17.6094 11.3516C17.1172 11.625 16.5703 11.625 16.0781 11.3516L2.46094 3.09375C2.67969 2.98438 2.89844 2.875 3.17188 2.875H30.5156ZM30.5156 22.125H3.17188C2.51562 22.125 1.91406 21.5781 1.91406 20.8672V5.00781L15.0391 12.9922C15.5859 13.3203 16.1875 13.4844 16.7891 13.4844C17.3906 13.4844 17.9922 13.3203 18.5391 12.9922L31.6641 5.00781V20.8672C31.7734 21.5781 31.1719 22.125 30.5156 22.125Z"></path></svg>
                        </div>
                        <div className='full-adrress'>

                            <p className='address-Location'>How Can We Help?</p>
                            <p>info@yourdomain.com contact@yourdomain.com</p>
                        </div>
                    </div>
                </div>



                <div className='Contact-page'>
                    <div>
                        <h1>Send us a Message</h1>
                    </div>

                    <form action="" className='contact-form'>
                        <label htmlFor="">Full Name*</label>
                        <input type="text" placeholder='Adam Gelius' onClick={handleInputNameField} style={{ borderBottom: inputNameField ? "1px solid blue" : "1px solid black" }} />
                        <label htmlFor="">Email*</label>
                        <input type="text" placeholder='example@gmail.com' onClick={handleInputEmailField} style={{ borderBottom: inputEmailField ? "1px solid blue" : "1px solid black" }} />
                        <label htmlFor="">Phone*</label>
                        <input type="text" placeholder='+885 1254 5211 552' onClick={handleInputPhoneField} style={{ borderBottom: inputPhoneField ? "1px solid blue" : "1px solid black" }} />
                        <label htmlFor="">Message*</label>
                        <input type="text" placeholder='Type your message here' onClick={handleInputMessageField} style={{ borderBottom: inputMessageField ? "1px solid blue" : "1px solid black" }} />

                        <button>Send</button>
                    </form>
                </div>
            </div>
        </>

    )

}

export default Contact
