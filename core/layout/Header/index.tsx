import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Header({ }: Props) {
    return (
        <div className='bg-primaryColor'>
            <div className='max-w-6xl h-[77px] mx-auto px-[20px] flex justify-between items-center'>
                <Link href='/' className='flex items-center space-x-[15px]'>
                    <img src="/assets/logo.png" alt="logo" width={41} height={41} />
                    <p className='text-[#fff]'>ប្រព័ន្ធ​​​បរិច្ចាគ​​សមាគម CICCA</p>
                </Link>
                <div>
                    <ul className='hidden sm:flex justify-between items-center space-x-[20px] text-sm  text-[#fff]'>
                        <Link href='/' className='max-w-[84px] text-secondaryColor'>គេហទំព័រ</Link>
                        <Link href='/' className='max-w-[84px]'>បរិច្ចាគ</Link>
                        <button className='max-w-[84px]'>
                            <img src="/assets/Avatar.png" alt="avatar" />
                        </button>
                        <button className='px-[30px] bg-secondaryColor rounded-xl py-[5px]'>ចូលគណនី</button>
                    </ul>
                    <img className='block sm:hidden' src="/assets/icons/menu.svg" alt="" width={30} height={30} />
                </div>
            </div >
        </div >
    )
}