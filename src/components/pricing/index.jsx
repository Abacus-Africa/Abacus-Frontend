import React, {useState} from 'react'
import Toggle from '../switchButton/Toggle'
import Monthly from './Monthly'
import YearlyPricing from './Yearly'

const Pricing = () => {
    const [pricingPlan, setPricingPlan] = useState(0);

  return (
    <section id='plan' className='bg-lightGray md:bg-gray md:pt-28 md:pb-20 pb-7'>
        <div className='bg-lightGray text-center py-16 text-pblue'>
            <h2 className='font-bold text-3xl md:text-4xl'>Get Started Today</h2>
            <p className='font-medium text-xl mt-3 mb-5'>Pick a plan now</p>
            <Toggle month={pricingPlan} year={setPricingPlan} />
        </div>
        {pricingPlan ? <Monthly /> : <YearlyPricing />}
    </section>
  )
}

export default Pricing