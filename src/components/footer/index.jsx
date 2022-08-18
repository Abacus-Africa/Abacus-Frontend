import React from 'react'
import Logo from "../../assets/images/Abacus_7-transformed 1.svg"
import Instagram from "../../assets/images/Insta.svg"
import Twitter from "../../assets/images/twitter.svg"
import Linkedin from "../../assets/images/linked.svg"
import Facebook from "../../assets/images/facebok.svg"
import FooterChimp from "../../components/mailchimp/FooterChimp"

const Footer = () => {
  return (
    <footer className='bg-pblue text-white text-sm px-6 py-8 md:px-32 md:py-14'>
        <div className='flex flex-wrap justify-between md:justify-center gap-10 md:gap-0'>
            <div className='block md:hidden md:w-1/4'>
                <p className='font-medium text-2xl'>Company</p>
                <ul className='leading-10'>
                    <li>About Us</li>
                    <a href='https://abacusafrica.hashnode.dev/'><li>Blog</li></a>
                    <li>Terms and Conditions</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='block md:hidden md:w-1/4'>
                <p className='font-medium text-2xl'>Contact</p>
                <ul className='leading-10'>
                    <a href='mailto:useabacus@gmail.com'><li>useabacus@gmail.com</li></a>
                    <a href='tel:+234813123456'><li>+234813123456</li></a>
                    <li>Lagos, Nigeria.</li>
                </ul>
            </div>
            <div className='w-full md:w-2/4'>
                <div><img src={Logo} alt='logo'></img></div>
                <p className='mt-5'>Get familiar</p>
                <div className='flex gap-8 mt-3 mb-16 items-center'>
                    <a href="https://twitter.com/AbacusAfrica" target="blank">
                    <img src={Twitter} alt='twitter'></img>
                    </a>
                    <a
                    href="https://www.linkedin.com/company/abacus-africa/"
                    target="blank"
                    >
                    <img src={Linkedin} alt='linkedin'></img>
                    </a>
                    <a href="https://www.instagram.com/abacusafrica/" target="blank" className=''>
                    <img src={Instagram} alt='facebook'></img>
                    </a>
                    <a
                    href="https://www.facebook.com/AbacusAfrica?_rdc=1&_rdr"
                    target="blank"
                    >
                    <img src={Facebook} alt='instagram'></img>
                    </a>

                </div>
                <p className='mb-5'>Get updates on offers, new features and discounts.</p>
                <div className='text-black'>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='text-white'>First Name</label>
                        <input type='text' id="name"
                        name="name"
                        required placeholder='First name' className='outline-none placeholder:text-pblack py-2 px-3 rounded-lg mt-1'></input>
                    </div>
                    <div className='flex flex-col mt-3'>
                        <label className='text-white'>Email Address</label>
                        <FooterChimp />
                    </div>
                </div>
            </div>
            <div className='hidden md:block w-1/4'>
                <p className='font-medium text-2xl'>Company</p>
                <ul className='leading-10'>
                    <li>About Us</li>
                    <a href='https://abacusafrica.hashnode.dev/'><li>Blog</li></a>
                    <li>Terms and Conditions</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='hidden md:block w-1/4'>
                <p className='font-medium text-2xl'>Contact</p>
                <ul className='leading-10'>
                    <a href='mailto:useabacus@gmail.com'><li>useabacus@gmail.com</li></a>
                    <a href='tel:+234813123456'><li>+234813123456</li></a>
                    <li>Lagos, Nigeria.</li>
                </ul>
            </div>
        </div>
        <p className='text-center mt-6'>©2022 Abacus Africa. All rights reserved.</p>
    </footer>
  )
}

export default Footer