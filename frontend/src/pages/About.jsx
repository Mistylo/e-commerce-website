import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Void Theory is a cutting-edge fashion brand that merges industrial aesthetics with streetwear influences. Our collections reflect a minimalistic yet bold approach to design, offering apparel that embodies both function and style. We believe in creating timeless pieces for the modern individual who values uniqueness and sophistication in their everyday wear.</p>
          <p> Each product is crafted with a deep respect for artistry, blending contemporary influences with urban culture, delivering a look that speaks to those who dare to break the norm.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Void Theory, our mission is to redefine fashion with an industrial edge and a rebellious spirit. We aim to empower individuals to express their true selves through pieces that offer both style and comfort. Our collections are designed for those who refuse to be defined by trends, creating their own path in a world full of conformity.</p>

        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:ox-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We are committed to delivering exceptional quality. Each item is meticulously crafted with premium materials, ensuring durability and a perfect fit.</p>
        </div>
        <div className='border px-10 md:ox-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Void Theory offers seamless shopping experiences, from fast and easy checkout to hassle-free shipping, all tailored to fit your lifestyle.</p>
        </div>
        <div className='border px-10 md:ox-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Your satisfaction is our priority. Our customer service team is dedicated to assisting you with any inquiries or concerns, ensuring a smooth and enjoyable shopping experience.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About