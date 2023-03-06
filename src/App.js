import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />



      <h3>O que é React?</h3>

      <p class="resposta">React é uma biblioteca JavaScript front-end usada para criar a inteface do usuário (IU). <br/> É utilizado com págias SPA e há uma liberdade na atualização, sem ter uma extrutura fixa.</p>



      <h3>O que e SPA?</h3>

      <p class="resposta">A sigla significa "Single Page Application", onde a página atualiza apenas <br/> a parte requisitada do site, ao invés de atualizar a página inteira</p>



      <h3>Para que serve o NPX no React?</h3>

      <p class="resposta">NPX é o executor dos scripts usado para o React, instalando as dependências <br/> necessárias para seu projeto React.</p>

    <table>
      <ul> 
        <h3> Marcela </h3> 
        <li>Preto e Roxo</li>
        <li>Chacara Inglesa</li>
        <li>Teto</li>
        <li>18</li>
      </ul>

      <ul> 
        <h3> Maria Eduarda </h3> 
        <li>Preto e amarelo</li>
        <li>Aclimação</li>
        <li>Kevin</li>
        <li>17</li>
      </ul>

    </table>



      </header>
    </div>
  );
}

export default App;



