import './App.css';
import Login from './Login/Login';
import { useEffect, useState } from 'react';
import { getTokenfromUrl } from './Component/Spotify/Spotify';
import SpotifyWebApi  from "spotify-web-api-js"

const   spotify = new SpotifyWebApi();

function App() {
  const [token ,setToken] = useState(null)

  useEffect(()=>{
    const hash = getTokenfromUrl()
    window.location.hash = " "
    const  _token = hash.access_token;
    if(_token){
      setToken(_token)
      spotify.setAccessToken(_token);
      spotify.getMe().then((user)=>{
        console.log(" 🤣",user)
      })
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
