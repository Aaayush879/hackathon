import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { WiHumidity, WiStrongWind , WiSunset} from "weather-icons-react";



const Main=({tempInfo,})=>{
    const {
        temp,
        humidity,
        mood,
        name,
        speed,
        country,
        sunset
    } = tempInfo;

    let sec = sunset;
    let date = new Date(sec*1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    return(
        <div>
            <br/>
            <Jumbotron className='my bg-light' style={{marginLeft:'35vw',width:'35vw' ,height:'36vh'  , borderRadius:'20px'}}>
                
                <div style={{ display:'flex', marginLeft:'2vw'}}>
                    <h5 fontSize='2.9vh'>{name}</h5>
                    <h5 fontSize='2.9vh' >,{country}</h5>

                </div>
                <hr/>
                
                <div style={{ marginLeft:'0.5rem' }}>
                    <h2 fontSize='3.1vh'>temp:{temp}</h2>
                    <h6 fontSize='3.1vh'>{mood}</h6>
                </div>
                <hr/>
                <div className='bg-dark' style={{display:'flex'}}>
                    <p className='text-light' style={{fontSize:'3.5vh' , marginLeft:'0.5rem'}}><WiStrongWind size='25' color='blue'/>{speed}km/h</p>
                    <p className='text-light' style={{fontSize:'3.5vh' , marginLeft:'0.5rem'}}><WiHumidity size='25' color='blue'/>{humidity}</p>
                    <p className='text-light' style={{fontSize:'3.5vh' , marginLeft:'0.2rem'}}><WiSunset size='30' color='rgb(255, 255, 0)'/>{timeStr}</p>
                    
                </div>

                
                
                

            </Jumbotron>

            <br/>
            <br/>

        </div>
    )
}
export default Main;
