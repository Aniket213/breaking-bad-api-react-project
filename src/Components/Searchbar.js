import React,{useState} from "react";
import "./Searchbar.css";
import logo from '../img/logo.png'

export default function Searchbar(props) {
    const [query, setquery] = useState("");
    const [toshow, settoshow] = useState(false);

    const clickhandler = ()=>{
        settoshow(!toshow);
    }

    props.fun(query);

  return (
    <div className="searchbar">
      <img className='logo' src={logo} alt="logo" />
      <p className="quote">I am not in danger, Skyler.<br />I am the danger...</p>
      <form id="content" autoComplete="off">
        <input type="text" name="input" className = {`input ${ toshow ? "square" : "" }`} id="search-input" onChange={(e)=>setquery(e.target.value)}/>
        <button type="reset" className = {`search ${ toshow ? "close" : "" }`} id="search-btn" onClick={clickhandler}></button>
      </form>
    </div>
  );
}
