import { useState } from 'react';
import './App.css';


function App() {
  const [altura, setAltura] = useState('')
  const [peso, setPeso] = useState('')
  const [resultadoIMC, setResultadoIMC] = useState('');


  const calculaImc = (e) => {
    e.preventDefault()

    // Validar se altura e peso são números positivos
    if (!altura || !peso || parseFloat(altura) <= 0 || parseFloat(peso) <= 0) {
      alert('Por favor, insira valores válidos para altura e peso.');
      return;
    }

    // Calcular IMC
    const alturaMetros = parseFloat(altura) / 100;
    const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);

    // Classificação do IMC (exemplo, você pode ajustar as faixas conforme necessário)
    let classificacao = '';
    if (imcCalculado < 18.5) {
      classificacao = 'Abaixo do Peso';
    } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
      classificacao = 'Peso Normal';
    } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
      classificacao = 'Sobrepeso';
    } else {
      classificacao = 'Obesidade';
    }

    // Atualizar estado com resultado do IMC
    setResultadoIMC(`Seu IMC é: ${imcCalculado} - ${classificacao}`);
  }

  return (
    <div>
      <h1>Calcule seu IMC logo abaixo</h1>
      <form onSubmit={calculaImc}>
        <label>Altura:</label>
        <input type='number' value={altura} onChange={(e) => setAltura(e.target.value)} />
        <br/>

        <label>Peso:</label>
        <input type='number' value={peso} onChange={(e) => setPeso(e.target.value)} />
        <br/>

        <label>Resultado:</label>
        <input disabled type='text' value={resultadoIMC} />
        <br/>

      <button type="submit">Calcular IMC</button>
      </form>
    </div>
  );
}

export default App;
