import AccHeader from '@/component/organisms/account/AccHeader'
import Acount from '@/component/organisms/account/Acount'
import React from 'react'

function Account() {
  return (
    <div>
        <AccHeader/>
        <div className='px-[43px]' >
            <Acount/>
        </div>
    </div>
  )
}

export default Account