import logo from './logo.svg';
import Main from './component/Main';
import Form from './component/Form';
import dp from './dp.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div  style={{width:'100%', height:'100vh' ,backgroundImage:`url(${dp})` , backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
        
        <div style={{ marginTop:'0.5vh', borderRadius:'20px' , opacity:'0.9' }}>
          <Form />

        </div>



        <div  style={{width:'100%',backgroundColor:'black', height:'5vh' , marginTop:'10vh', opacity:'0.7'}}>
          <p  style={{fontSIize:'2.4vh' , color:'white'}}>press start button and speak name of any city</p>
        </div>
        
        

      </div>
    </div>
  );
}

export default App;
