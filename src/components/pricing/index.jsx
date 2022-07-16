import React from 'react'
import Tick from "../../assets/images/tick.svg"

const Pricing = () => {
  return (
    <section id='plan' className='bg-lightGray md:bg-gray md:pt-28 md:pb-20 pb-7'>
        <div className='bg-lightGray text-center py-16 text-pblue'>
            <h2 className='font-bold text-4xl'>Get Started Today</h2>
            <p className='font-medium text-xl mt-3'>Pick a plan now</p>
            <p className='font-medium text-xl mt-3 text-lemon'>Monthly<span></span> Yearly</p>
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
  )
}

export default Pricing