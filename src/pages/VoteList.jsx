import React from 'react'
import '../styles/VoteList.css'

const VoteList = ({votes, onDelete}) => {

    //const currentList = votes.slice((0*10),10)    
      
    return (
        <div>
            <table>
                <tbody>
            {
                votes.map((item, index) => (
                   <tr key={index}> 
                       <td>{item.idx}</td>
                       <td>{item.name}</td>
                       <td>{item.phone}</td>
                       <td>{item.email}</td>
                       <td> <button onClick={() => onDelete(item.idx)}>삭제</button></td>
                   </tr>                    
                ))
            }
            </tbody>
            </table>
        </div>
    )
}

export default VoteList