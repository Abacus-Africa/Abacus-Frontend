import React from 'react'
import Girl from "../../assets/images/girl.png"
import Mailchimp from '../../components/mailchimp/Mailchimp'

const Landing = () => {
  return (
    <>
    <main style={{height: 'calc(100vh - 215px)'}} className="block md:flex box-border md:container text-pblue mt-20 md:mt-32">
        <div className='md:w-3/4 px-10 mb:px-0 container text-left font-medium md:pr-28 mb-10 md:mb-0' >
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
            <div className='hidden md:block text-center md:mt-60 md:ml-80' >
                <p><a href='#offer'>SCROLL DOWN</a></p>
                <span><a href='#offer' >v</a></span>
            </div>
        </div>

        <div className="h-4/6 md:w-1/4">
            <img src={Girl} alt="A girl with her laptop" className='rounded-none md:rounded-lg w-full h-full' ></img>
        </div>
        <div className='block md:hidden text-center md:mt-80 md:ml-80' >
                <p><a href='#offer'>SCROLL DOWN</a></p>
                <span><a href='#offer' >v</a></span>
            </div>
    </main>
    <section id='offer' className='container mt-40 md:mt-14 text-pblue'>
        <h3 className='font-medium'>WHAT WE OFFER</h3>
        <div className='block md:flex md:flex-col md:flex-wrap'>
            <div className='block md:flex text-justify md:items-center mt-14'>
                <div className='md:w-1/2'>
                    <img src={Girl} alt='girl' className='w-1/2 rounded-xl'></img>
                </div>
                <div className='md:w-1/2'>
                    <h2 className='font-extrabold text-3xl'>All-inclusive Dashboard</h2>
                    <p>Get access to an all-in-one platform to manage your expenses and cash flows, record sales, bookkeeping and lots more. Keep track of your transactions, profit and sales in real time from anywhere.</p>
                </div>
            </div>
            <div className='block md:flex text-justify md:items-center mt-10'>
                <div className='md:w-1/2'>
                    <h2 className='font-extrabold text-3xl'>Financial Reports</h2>
                    <p>Business reporting at its best. Get access to monthly, quarterly, and yearly financial statements. Keep track of all activities and grow your business.</p>
                </div>
                <div className='md:w-1/2 flex justify-end'>
                    <img src={Girl} alt='girl' className='w-1/2 rounded-xl'></img>
                </div>
            </div>
            <div className='block md:flex justify-center text-justify items-center mt-10'>
                <div className='md:w-1/2'>
                    <img src={Girl} alt='girl' className='w-1/2 rounded-xl'></img>
                </div>
                <div className='md:w-1/2'>
                    <h2 className='font-extrabold text-3xl'>Customer Management</h2>
                    <p>Upload your customer data to your store for easy business management and better customer engagement. Keep track of your customer purchasing records for loyalty and discounts offers.</p>
                </div>
            </div>
            <div className='block md:flex justify-center text-justify items-center mt-10'>
                <div className='md:w-1/2'>
                    <h2 className='font-extrabold text-3xl'>Inventory Management</h2>
                    <p>Organize and keep track of your stocks for a seamless replenishment. Minimize inventory loss by staying up to date with damaged goods, loss or theft. Determine the volume of sales by identifying highest selling products to the lowest.</p>
                </div>
                <div className='md:w-1/2 flex justify-end'>
                    <img src={Girl} alt='girl' className='w-1/2 rounded-xl'></img>
                </div>
            </div>
        </div>
        <p className='font-medium mt-10 mb-5'>CHOOSE WHAT WORKS FOR YOUR BUSINESS</p>
    </section>
    <section id='plan' className='bg-gray pt-28 '>
        <div className='bg-lightGray text-center py-16 text-pblue'>
            <h2 className='font-bold text-4xl'>Get Started Today</h2>
            <p className='font-medium text-xl mt-3'>Pick a plan now</p>
        </div>
        <div className='container flex flex-wrap justify-center gap-16 mt-10'>
            <div className='bg-white flex flex-col items-center p-4'>
                <div className='text-center'>
                    <h3 className='font-bold my-2 text-xl'>Basic</h3>
                    <p>Perfect to get started</p>
                    <p className='font-bold mt-3 text-xl'>Free</p>
                    <button className='bg-lightBlue text-white p-3 w-64 rounded-lg my-2'>GET STARTED</button>
                    <p className='my-4 font-bold text-2xl'>Features</p>
                </div>
                <ul className='leading-8'>
                    <li>&#10003; Record sales and transactions</li>
                    <li>&#10003; Cashbook entries</li>
                    <li>&#10003; Debit entry</li>
                    <li>&#10003; Invoicing</li>
                    <li>&#10003; Financial tips</li>
                </ul>
            </div>
            <div className='bg-white flex flex-col items-center p-4'>
                <div className='text-center'>
                    <h3 className='font-bold my-2 text-xl'>Basic</h3>
                    <p>Perfect to get started</p>
                    <p className='font-bold mt-3 text-xl'>Free</p>
                    <button className='bg-lightBlue text-white p-3 w-48 rounded-lg my-2'>GET STARTED</button>
                    <p className='my-4 font-bold text-2xl'>Features</p>
                </div>
                <ul className='leading-8'>
                    <li>&#10003; Record sales and transactions</li>
                    <li>&#10003; Cashbook entries</li>
                    <li>&#10003; Debit entry</li>
                    <li>&#10003; Invoicing</li>
                    <li>&#10003; Financial tips</li>
                </ul>
            </div>
            <div className='bg-white flex flex-col items-center p-4'>
                <div className='text-center'>
                    <h3 className='font-bold my-2 text-xl'>Basic</h3>
                    <p>Perfect to get started</p>
                    <p className='font-bold mt-3 text-xl'>Free</p>
                    <button className='bg-lightBlue text-white p-3 w-48 rounded-lg my-2'>GET STARTED</button>
                    <p className='my-4 font-bold text-2xl'>Features</p>
                </div>
                <ul className='leading-8'>
                    <li>&#10003; Record sales and transactions</li>
                    <li>&#10003; Cashbook entries</li>
                    <li>&#10003; Debit entry</li>
                    <li>&#10003; Invoicing</li>
                    <li>&#10003; Financial tips</li>
                </ul>
            </div>
        </div>
    </section>
    </>
  )
}

export default Landing