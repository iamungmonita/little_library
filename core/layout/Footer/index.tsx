import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Footer({ }: Props) {
    return (
        <div className='bg-primaryColor absolute bottom-0 w-full'>
            <div className='max-w-6xl min-h-[77px] mx-auto px-[20px] text-sm text-[#fff] flex justify-center sm:justify-between items-center flex-wrap'>
                <div className='flex items-center space-x-[10px]'>
                    <p>© 2023 CICCA <span className='px-[5px]'>|</span></p>
                    <p>មធ្យោបាយ​បរិច្ចាគ​:</p>
                    <button>
                        <img src="/assets/KHQ.png" alt="KHQ" />
                    </button>
                    <button>
                        <img src="/assets/wing.png" alt="WING" />
                    </button>
                </div>
                <div className='space-x-[10px] hidden sm:flex'>
                    <Link href='/'> <img src="assets/youtube.png" alt="" /></Link>
                    <Link href='/'> <img src="assets/linkedin.png" alt="" /></Link>
                    <Link href='/'> <img src="assets/instagram.png" alt="" /></Link>
                    <Link href='/'> <img src="assets/tiktok.png" alt="" /></Link>
                    <Link href='/'> <img src="assets/facebook.png" alt="" /></Link>
                </div>
            </div>
        </div>
    )
}