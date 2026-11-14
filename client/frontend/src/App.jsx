import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { authFetch } from './config/axios'

function App() {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  useEffect(()=>{
    async function getData1(){
      const response = await authFetch.get("/api/authentication/hello/");
      setMessage1(response.data);
    }
    async function getData2(){
      const response = await authFetch.get("/api/employees/hello/");
      setMessage2(response.data);
    }
    async function getData3(){
      const response = await authFetch.get("/api/reports/hello/");
      setMessage3(response.data);
    }
    getData1();
    getData2();
    getData3();
  }
  ,[]);

  return (
    <>
    <div>Message from authentication service:</div>
    <div>{message1}</div>

    <div>Message from user service:</div>
    <div>{message2}</div>

    <div>Message from salary reports</div>
    <div>{message3}</div>
    </>
  )
}

export default App
