import React,{useState,useEffect} from 'react';
import './Form.css';

import Main from './Main';
import { Button } from 'react-bootstrap';
import SpeechRecognition,{useSpeechRecognition} from 'react-speech-recognition';


const Form =()=>{

    const [searchValue , setSearchValue] = useState('bhilai');
    const [tempInfo , setTempInfo] = useState({});
    const {transcript,listening,resetTranscript} = useSpeechRecognition();
    

    const getWeatherInfo= async()=>{
       try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=53a7a143b8e7b8556ad294638ff93ef5`;
        let res = await fetch(url);
        let data = await res.json();
        const { temp , humidity } = data.main;
        const { main:mood } = data.weather[0];
        const { name } = data;
        const { speed} = data.wind;
        const {country , sunset } = data.sys;
        const myNewWeather = {
            temp,
            humidity,
            mood,
            name,
            speed,
            country,
            sunset
        }
        console.log(myNewWeather);
        setTempInfo(myNewWeather);
        
        
       }
       catch(e) {
           console.log(e);
       }

    };
    useEffect(()=>{
        getWeatherInfo();
    }, [] );

    


    return(
        <div style={{alignItems:'center'}} >
            <br/>
            <br/>
            <p className='text-light'>Microphone:{listening?'on':'off'}</p>
            <Button className=' btn-light btn-outline-info' onClick={SpeechRecognition.startListening}>Start</Button>
            
            <Button className='btn-light btn-outline-info' onClick={resetTranscript}>Reset</Button>
            <br/>
            <div  style={{marginTop:'1.5vh', marginLeft:'35vw',display:'flex' ,height:'6.7vh', width:'30%', backgroundColor:'white' , borderRadius:'20px' }}>
                <br/><br/>
                <input
                style={{width:'80%' , height:'100%', borderRadius:'20px'}}
                marginLeft='5px'
                placeholder='search any city'
                value={searchValue}
                
                onChange={(e)=>setSearchValue(e.target.value)}
                
                
                
                className='form'
                />
                
                <br/>
                <br/>
                
                
            </div><br/>
            
                
            <Button className='btn-light btn-outline-info' onClick={getWeatherInfo} style={{alignItems:'center'}}>Search</Button>
            <div >
                    <Main tempInfo={tempInfo} />
            </div>
            
            

        </div>
    )
}
export default Form;
