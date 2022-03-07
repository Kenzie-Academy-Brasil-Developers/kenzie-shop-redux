import { useEffect, useState } from 'react';
import api from './services/api';

function App() {

  const [teste, setTeste] = useState([])

  useEffect(() => {
    const teste = () => {
      api.get('/products/')
      .then(res => setTeste(res.data))
    } 

    teste()
  }, [])

  console.log(teste)
  return (
    <>
      OI
    </>
  );
}

export default App;
