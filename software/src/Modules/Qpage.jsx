import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Qpage(props) {
    let l=useLocation();
    let va=l.state;
    console.log(va[0])
  return (
    <div>
        <h1 className='text-center mb-4 display-3' >{va[1]}</h1>
        {
                va[0].map((top,index)=>
                <Link to='/anspage' state={[top.answer,top.text]} key={index} style={{textDecoration: 'none'}}>
                    <div class="card mb-3  ms-4 me-4">
                     <div class="card-body ">
                     {top.text}
                    </div>
                    </div>
                  
                
                </Link>)
    //props.datas.topics.map((top,index))
            }
    </div>
  )
}

export default Qpage