import './App.css';
import Login from './Login/Login';
import { useEffect, useState } from 'react';
import { getTokenfromUrl } from './Component/Spotify/Spotify';

function App() {
  const [token ,setToken] = useState(null)

  useEffect(()=>{
    const hash = getTokenfromUrl()
    window.location.hash = " "
    const  _token = hash.access_token;
    if(_token){
      setToken(_token)
    }
  },[])
 
  return (
    <>
    {token ? (
      <h1>I am logged In</h1>
    ):(
      <Login />
    )}
    </>

  );
}

export default App;
