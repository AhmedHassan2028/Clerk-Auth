import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <>
    <SignedOut>
        <div className='flex justify-center items-center'>
            <Link href="/sign-in">
                <SignInButton />     
            </Link> 

            <Link href="/sign-up">
                <SignUpButton/>    
            </Link>
        </div>
        </SignedOut>

        <SignedIn>
            <div className='text-center mt-4'>
                <UserButton />
            </div>
        </SignedIn>
    </>
  )
}

export default Header