import React from 'react'
import Lottie from 'lottie-react'
import VisitCounter from './VisitCounter'
import welcome from '../Videos/blue.json'



const PreIntro = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-200 h-[50vh]">
      <Lottie animationData={welcome} className='h-60 w-60' />
      <div >
        <VisitCounter />
      </div>
    </div>
  );
}

export default PreIntro