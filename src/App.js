import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Card from './Components/Card';
import Searchbar from './Components/Searchbar';

function App() {
  const [query, setquery] = useState('');
  const childtoparent = (a)=>{
    setquery(a);
  }
    const [dataset, setdataset] = useState([]);
    useEffect(() => {
        axios.get('https://www.breakingbadapi.com/api/characters')
        .then(res=>{
            setdataset(res.data);
            // console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }, [])

    const filteredname = dataset.filter( a=> a.name.toLowerCase().includes(query.toLowerCase()));

    // console.log(filteredname);

  return (
    <div className="app">
      <Searchbar fun={childtoparent} />
      <main>
        {
          filteredname.map(a=>{
            return (<Card data = {a} key={a.name}/>);
          })
        }
      </main>
    </div>
  );
}

export default App;
