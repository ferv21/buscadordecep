import { useState } from 'react';
import {MdLocalPostOffice} from 'react-icons/md'
import fetchPostalCode from './services/api';
import { BsSearch } from 'react-icons/bs';
import './styles.css';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
  
  const handleSearch = async() => {
    if(input === ''){
      alert("Digite um cep válido");
    }else{
      const cepRes = await fetchPostalCode(input);
      setCep(cepRes);
    }
  }
        


  return (
    <div className="container">
      
      <h1 className="title">Via Cep <MdLocalPostOffice color='yellow'/></h1>

      <div className="containerInput">
          <input 
          type="text" 
          placeholder="Digite um cep..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
          />

          <button className="btnSearch" onClick={handleSearch}>
            <BsSearch size={25} color='#fff'/>
          </button>
      </div>

      <main className="main">
          <h2>CEP: {cep.cep}</h2>

          <span>Cidade: {cep.localidade}</span>
          <span>Estado: {cep.uf}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>Local: {cep.logradouro}</span>
        
      </main>

    </div>
  );
}

export default App;
