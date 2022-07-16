import React from 'react'
import Girl from "../../assets/images/girl.png"
import MobileGirl from "../../assets/images/mobileGirl.svg"
import Mailchimp from '../../components/mailchimp/Mailchimp'
import Angle from "../../assets/images/downangle.svg"
import Nav from '../../components/nav/Nav'
import Pricing from '../../components/pricing'
import Footer from '../../components/footer'

const Landing = () => {
  return (
    <>
    <Nav />
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
    <section id='offer' className='container mt-14 text-pblue px-5 text-sm md:text-base md:px-24'>
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
    <div>
        <Pricing />
    </div>
    
    <div>
        <Footer />
    </div>

    </>
  )
}

export default Landing