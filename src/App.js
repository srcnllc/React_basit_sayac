import React ,{ useState } from 'react';
import './App.css';

function App() {

  const [deger,setDeger]=useState(0);
  function Azalt(){
    setDeger(deger-1);
  }
  function Arttır(){
    setDeger(deger+1);
  }
  function Sıfırla(){
    setDeger(0);

  }
  return (
    <div className="App">
      <div id="container">
          <h2 id="sayac">React ile Sayaç</h2>
          <h1 id="sayı" >{deger}</h1>
          <button id="azalt"onClick={Azalt}>Azalt</button>
          <button id="sıfırla" onClick={Sıfırla}>Sıfırla</button>
          <button id="arttır" onClick={Arttır}>Arttır</button>
      </div>
    </div>
  );
}

export default App;
