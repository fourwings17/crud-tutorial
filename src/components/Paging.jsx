import React, { useState , useEffect } from 'react'
import '../styles/Pasing.css'

const Paging = ({counts, pagesize, pageindex, onPageIndexChanged}) => {
  
  const allpages = Math.ceil(counts / pagesize)
  const [pages, setPages] = useState([])
    
  useEffect(() => {
    const arr = []
    for (var i = 0; i < allpages; i++) {
      arr.push(i)
    }
    setPages(arr)
    
  }, [allpages])

  const cid = pageindex - (pageindex % pagesize)

  return (
    <div className='paging_wrap'>
        
        <button onClick={() => onPageIndexChanged(0)}>First</button>
        <button onClick={() => onPageIndexChanged(cid - pagesize)}>Prev</button>
        {
          
          pages.slice(cid  , cid + pagesize).map(item => (  
              //console.log(cid + '---' + (item + 1))  

               item === (pageindex) ? 
               <button className='active' disabled>{item + 1}</button> :
               <button>{item + 1}</button>
          ))
        }
        <button onClick={() => onPageIndexChanged(cid + pagesize)}>Next</button>
        <button onClick={() => onPageIndexChanged(allpages)}>Last</button>
    </div>
  )
}

export default Paging
