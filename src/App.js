import './App.css';
import {useState, useEffect} from 'react'
import VoteList from './pages/VoteList';
import Paging from './components/Paging';

function App() {

  const [votes, setVotes] = useState([])
  const [pageIndex, setPageIndex] = useState(0)  // eslint-disable-line no-unused-vars
  const [pageSize, setPageSize] = useState(10)   // eslint-disable-line no-unused-vars
  const [totalSize, setTotalSize] = useState(0)

  useEffect(() => {

    fetch(`http://api.manmin.kr/api/votes/${pageIndex}/${pageSize}`)
    .then(res => res.json())
    .then(data => (
        setVotes(data)                       
    ))  
    
    fetch(`http://api.manmin.kr/api/votes/count`)
    .then(res => res.json())
    .then(data => (
      setTotalSize(data)                   
    ))  
  
    return () => {                 
      console.log('Load..OK!')      
    }
  }, [pageIndex, pageSize])   


  const handleDelete = (id) => {   
    setVotes(votes.filter(item => id !== item.idx ))
  }

  const onPageIndexChanged = (id) => {   
    setPageIndex(id)
    console.log('id : ' + id)
  }

    
  return (

    <div className="App">
        <header>
          <h1>Votes</h1> 
        </header>
        
        <div className="content">   
          <VoteList votes={votes} onDelete={(id) => handleDelete(id)} />
          <Paging onPageIndexChanged={(id) => onPageIndexChanged(id)} counts={totalSize} pagesize={pageSize} pageindex={pageIndex}></Paging>
        </div>

        <footer>
          <h4>Footer</h4> 
        </footer>
    </div>
  );
}

export default App;