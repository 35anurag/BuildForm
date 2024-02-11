import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#030511] border-b border-[#192230]'>
        <div className='ml-[3rem] mr-[3rem] py-5 flex flex-row items-center justify-between text-white'>
            <Link href="/" className='uppercase text-[22px] font-[900] text-[#f5f5f5] drop-shadow-[#f5f5f5]'>BuildForm</Link>
            <div className='flex flex-row gap-3 items-center'>
                <div className='flex flex-row gap-3 items-center'>
                    <p>Light</p>
                    <p>Dark</p>
                </div>
                <p>Account</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar