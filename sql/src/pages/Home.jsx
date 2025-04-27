import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center flex-col gap-2'>
      <Button className='p-5 pl-20 pr-20'>
        <Link to="/login">
          LOGIN
        </Link>
      </Button>
      <Button className='p-5 pl-20 pr-20'>
        <Link to="/signup">
          SIGN UP
        </Link>
      </Button>
    </div>
  )
}

export default Home