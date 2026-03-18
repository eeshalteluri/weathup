import Image from 'next/image';
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="sticky top-0 z-5 h-25 px-2 py-4">
      <div className='flex justify-between items-center'>
        <Image
          src="/logo.png"
          alt="WealthUp"
          width={126}
          height={40}
        />

        <button
          className='py-1 px-6 border rounded-full'
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar