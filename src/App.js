import './App.css';
import Topheader from './component/Topheader';
import Header from './component/Header';
import Footer from './component/Footer';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import Section7 from './component/Section7';
import Section8 from './component/Section8';
import Section3 from './component/Section3';
import Section4 from './component/Section4';
import Section5 from './component/Section5';
import Section6 from './component/Section6';
import { useState, useEffect } from 'react';


function App() {


  const [alldata, setalldata] = useState([]);

  async function fetchdata() {
    const res = await fetch('http://nextupgrad.us/laravel-old/diligent-api/api/getHomePageStaticData');
    const da = await res.json();

    setalldata(da.data);

  }

  useEffect(() => {
    fetchdata();
  }, []);


  let homedata={}

  alldata.forEach((d)=>{
      if(d.page_name=='home')
          homedata=d;
  });


  return (
    <>
      <Topheader/>
      <Header headerObj={homedata}/>
      <Section1></Section1>
      <Section2></Section2>
      <Section7></Section7>
      <Section8></Section8>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Footer/>
    </>

  );
}

export default App;
