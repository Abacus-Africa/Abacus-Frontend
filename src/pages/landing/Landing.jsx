import React from 'react'
import Girl from "../../assets/images/girl.png"
import MobileGirl from "../../assets/images/mobileGirl.svg"
import Mailchimp from '../../components/mailchimp/Mailchimp'
import Logo from "../../assets/images/Abacus_7-transformed 1.svg"
import Tick from "../../assets/images/tick.svg"
import Angle from "../../assets/images/downangle.svg"
import Instagram from "../../assets/images/Insta.svg"
import Whatsapp from "../../assets/images/whatsapp.svg"
import Twitter from "../../assets/images/twitter.svg"
import Linkedin from "../../assets/images/linked.svg"
import Facebook from "../../assets/images/facebok.svg"
import Youtube from "../../assets/images/youtube.svg"
import Phone from "../../assets/images/phone.svg"
import FooterChimp from "../../components/mailchimp/FooterChimp"

const Landing = () => {
  return (
    <>
    <main className="block md:flex md:container text-pblue mt-16 md:mt-28 md:px-24">
        <div className='md:w-3/4 px-10 md:px-0 md:container text-left font-medium mb-10 md:mb-0 md:mt-28 md:pr-20'>
            <span className="bg-plightviolet text-pviolet rounded-full p-2">
            &#8226; Coming Soon
            </span>
            <p className="mt-7 md:mt-5 text-4xl">
            <span className=" text-pblue font-bold">Abacus,</span> the Accounting
            Software to manage your business
            </p>
            <p className="mt-10">Be the first to know when we launch</p>
            <div className='mt-5 block' >
                <Mailchimp />
            </div>
            <div className='hidden md:flex md:flex-col md:items-center text-center md:mt-40 md:ml-80 leading-6' >
                <a href='#offer'>SCROLL DOWN</a>
                <a href='#offer' ><img src={Angle} alt='angle arrow'></img></a>
            </div>
        </div>
        <div className="md:w-1/4">
            <img src={Girl} alt="A girl with her laptop" className='hidden md:block rounded-xl h-5/6' ></img>
            <img src={MobileGirl} alt="A girl with her laptop" className='block md:hidden rounded-none md:rounded-lg w-full' ></img>
        </div>
        <div className='flex flex-col items-center md:hidden text-center mt-6 leading-6' >
            <a href='#offer'>SCROLL DOWN</a>
            <a href='#offer' ><img src={Angle} alt='angle arrow'></img></a>
        </div>
    </main>
    <section id='offer' className='container mt-14 text-pblue px-5 md:px-24'>
        <h3 className='font-medium'>WHAT WE OFFER</h3>
            <div className='block md:flex text-justify md:items-center mt-14'>
                <div className='md:w-1/2 flex justify-end md:block'>
                    <img src={Girl} alt='girl' className='w-1/2 rounded-xl mb-5 md:mb-0'></img>
                </div>
                <div className='md:w-1/2'>
                    <h2 className='font-extrabold text-3xl'>All-inclusive Dashboard</h2>
                    <p>Get access to an all-in-one platform to manage your expenses and cash flows, record sales, bookkeeping and lots more. Keep track of your transactions, profit and sales in real time from anywhere.</p>
                </div>
            </div>
            <div className='block md:flex text-justify md:items-center mt-10'>
                <div className='md:hidden'>
                    <img src={Girl} alt='girl' className='w-1/2 rounded-xl mb-5 md:mb-0'></img>
                </div>
                <div className='md:w-1/2'>
                    <h2 className='font-extrabold text-3xl'>Financial Reports</h2>
                    <p>Business reporting at its best. Get access to monthly, quarterly, and yearly financial statements. Keep track of all activities and grow your business.</p>
                </div>
                <div className='md:w-1/2 md:flex md:justify-end hidden'>
                    <img src={Girl} alt='girl' className='w-1/2 rounded-xl'></img>
                </div>
            </div>
            <div className='block md:flex justify-center text-justify items-center mt-10'>
                <div className='md:w-1/2 flex justify-end md:block'>
                    <img src={Girl} alt='girl' className='w-1/2 rounded-xl mb-5 md:mb-0'></img>
                </div>
                <div className='md:w-1/2'>
                    <h2 className='font-extrabold text-3xl'>Customer Management</h2>
                    <p>Upload your customer data to your store for easy business management and better customer engagement. Keep track of your customer purchasing records for loyalty and discounts offers.</p>
                </div>
            </div>
            <div className='block md:flex justify-center text-justify items-center mt-10'>
                <div className='md:hidden'>
                    <img src={Girl} alt='girl' className='w-1/2 rounded-xl mb-5 md:mb-0'></img>
                </div>
                <div className='md:w-1/2'>
                    <h2 className='font-extrabold text-3xl'>Inventory Management</h2>
                    <p>Organize and keep track of your stocks for a seamless replenishment. Minimize inventory loss by staying up to date with damaged goods, loss or theft. Determine the volume of sales by identifying highest selling products to the lowest.</p>
                </div>
                <div className='md:w-1/2 md:flex md:justify-end hidden'>
                    <img src={Girl} alt='girl' className='w-1/2 rounded-xl'></img>
                </div>
            </div>
        <p className='font-medium mt-16 mb-6'>CHOOSE WHAT WORKS FOR YOUR BUSINESS</p>
    </section>
    <section id='plan' className='bg-lightGray md:bg-gray md:pt-28 md:pb-20 pb-7'>
        <div className='bg-lightGray text-center py-16 text-pblue'>
            <h2 className='font-bold text-4xl'>Get Started Today</h2>
            <p className='font-medium text-xl mt-3'>Pick a plan now</p>
        </div>
        <div className='container flex flex-wrap justify-center gap-7 md:gap-16 items-center'>
            <div className='bg-white flex flex-col items-center p-4 rounded-xl shadow-lg md:h-3/4'>
                <div className='text-center'>
                    <h3 className='font-bold my-2 text-xl'>Basic</h3>
                    <p className='text-inbetweenGray'>Perfect to get started</p>
                    <p className='font-bold mt-3 text-xl'>Free</p>
                    <button className='bg-lightBlue text-white p-3 w-64 rounded-lg my-2'>GET STARTED</button>
                    <p className='my-4 font-bold text-2xl'>Features</p>
                </div>
                <ul className='leading-8 pl-10 text-sm'>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> Record sales and transactions</li>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> Cashbook entries</li>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> Debit entry</li>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> Invoicing</li>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> Financial tips</li>
                </ul>
            </div>
            <div className='bg-white flex flex-col items-center p-5 rounded-xl shadow-lg md:-mt-4'>
                <div className='text-center'>
                    <h3 className='font-bold my-2 text-xl'>Standard</h3>
                    <p className='text-inbetweenGray'>Recommended</p>
                    <p className='font-bold mt-3 text-2xl'>$20</p>
                    <button className='bg-lightBlue text-white p-3 w-64 rounded-lg my-2'>GET STARTED</button>
                    <p className='my-4 font-bold text-2xl'>Features</p>
                </div>
                <ul className='leading-8 pl-10 text-sm'>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> Record sales and transactions</li>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> Cashbook entries</li>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> Debit entry</li>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> Invoicing</li>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> Financial tips</li>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> Wallet</li>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> Financial Reporting</li>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> Employee Management</li>
                </ul>
            </div>
            <div className='bg-white flex flex-col items-center p-6 rounded-xl shadow-lg md:h-3/4'>
                <div className='text-center'>
                    <h3 className='font-bold my-2 text-xl'>Premium</h3>
                    <p className='text-inbetweenGray'>Perfect tool for professionals</p>
                    <p className='font-bold mt-3 text-2xl'>$144</p>
                    <button className='bg-lightBlue text-white p-3 w-64 rounded-lg my-2'>GET STARTED</button>
                    <p className='my-4 font-bold text-2xl'>Features</p>
                </div>
                <ul className='leading-8 text-sm'>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> All features in basic and</li>
                    <li className='pl-4'>standard packages</li>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> Profit and Loss entry</li>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img>Inventory Management</li>
                    <li className='flex gap-2'><img src={Tick} alt='tick'></img> Customer Management</li>
                </ul>
            </div>
        </div>
    </section>
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
                    <a
                    href="https://www.facebook.com/AbacusAfrica?_rdc=1&_rdr"
                    target="blank"
                    >
                    <img src={Youtube} alt='youtube'></img>
                    </a>
                    <a
                    href="https://www.facebook.com/AbacusAfrica?_rdc=1&_rdr"
                    target="blank"
                    >
                    <img src={Whatsapp} alt='whatsapp'></img>
                    </a>
                    <a
                    href="https://www.facebook.com/AbacusAfrica?_rdc=1&_rdr"
                    target="blank"
                    >
                    <img src={Phone} alt='phone'></img>
                    </a>
                </div>
                <p className='mb-5'>Get updates on offers, new features and discounts.</p>
                <form>
                    <div className='flex flex-col'>
                        <label for="name">First Name</label>
                        <input type='text' id="name"
                        name="name"
                        required placeholder='First name' className='outline-none placeholder:text-pblack py-2 px-3 rounded-lg mt-1'></input>
                    </div>
                    <div className='flex flex-col mt-3'>
                        <label>Email Address</label>
                        <FooterChimp />
                    </div>
                </form>
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
    </>
  )
}

export default Landing