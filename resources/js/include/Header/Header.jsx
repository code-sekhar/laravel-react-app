import { Link } from "@inertiajs/react";
import React from "react";
const Header = () => {
    return (
        <>
            <Link href='/' className=''>Home</Link>
            <Link href='/about' className=''>About</Link>
            <Link href='/service' className=''>Service</Link>
            <Link href='/blog' className=''>Blog</Link>
            <Link href='/contact' className=''>Contact</Link>
        </>
    );
}

export default Header
