import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Navbar = () => {
    return (
        <div className='sticky  shadow space-y-2 flex items-center  justify-around  mt-1.5 top-0 z-50'>
            <div className=' flex items-center'>
                <Image
                    src={'/icons8-books-64.png'}
                    alt='logo'
                    width={50}
                    height={50}
                />
                <Link href={'/'}>
                    <h1 className='font-semibold text-xl '>StudyNook</h1>
                </Link>
            </div>
            <div>
                <ul className='flex font-semibold gap-4'>
                    <Link className={`isActive? "border border-purple-500" : ""`} href={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link href={'/rooms'}>
                        <li>Rooms</li>
                    </Link>
                </ul>
            </div>
            <div className='flex gap-5'>
                <Link href={'/login'}>
                    <Button variant='outline ' className={`border hover:border-purple-500 rounded-md`}>Login</Button>
                </Link>
                <Link href={'/register'}>
                    <Button className={`bg-purple-800 rounded-md `}>Register</Button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;