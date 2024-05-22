import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Spage(props) {
    let navigation=useNavigate()
    function navit({index})
    {
            
            console.log(props.datas.topics[index].questions)
    }
    
    return (
    <div >
          
            <h1 className='text-center display-3 mb-2'>{props.datas.name}</h1>
            <p className='text-center mb-5'>{props.datas.description}</p>
            <div className='row row-cols-2'>
            {
                props.datas.topics.map((top,index)=>
                <Link to='/qpage' state={[top.questions,top.name]}
                     key={index}>
                     <div class="card mb-3  ms-4 me-4">
                     <div class="card-body ">
                    {top.name}
                    </div>
               </div>
                </Link>)
            }
            </div>
           

{/* 
        {
            props.datas
        }         */}
    </div>
  )
}

export default Spage
