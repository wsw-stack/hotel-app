'use client'

import { SignOutButton } from '@clerk/nextjs';
import { useToast } from '../ui/use-toast';

function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: 'You have been signed out.' });
  };
  return (
    // navigates back to the home page upon logging out
    <SignOutButton redirectUrl='/'>
      <button className='w-full text-left' onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  )
}

export default SignOutLink