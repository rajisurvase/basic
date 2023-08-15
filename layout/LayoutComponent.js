import React, { Children } from 'react'
import SidbarComponent from './SidbarComponent'
import { useRouter } from 'next/router'


const LayoutComponent = ({ children }) => {
    const router = useRouter()
    console.log(router.pathname)
    return (
        <div>
            {
            router.pathname !== "/login"||"/register" ? (<div className='row '>
                <div className=' col-lg-2 col-md-2 col-sm-2  bg-primary'><SidbarComponent /></div>
                <div className=' col--10 col-md-10 col-sm-10' >
                    <div>HeaderComponent</div>
                    <div>{children}</div>
                </div>
            </div>) :(<div>{children}</div>) 
            }




        </div>
    )
}

export default LayoutComponent