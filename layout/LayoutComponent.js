import React from 'react'

const LayoutComponent = ({childern}) => {
    console.log(childern)
  return (
    <div>
       <div >
        <div className='row'>
            <div className=' col-lg-2 col-md-2 col-sm-2  bg-primary'>h1</div>
            <div className=' col-lg-10 col-md-10 col-sm-10  bg-secondary'>
               <div>HeaderComponent</div>
               <div>{childern}</div>
                </div>
            
        </div>
        

        </div> 
        
        
        </div>
  )
}

export default LayoutComponent