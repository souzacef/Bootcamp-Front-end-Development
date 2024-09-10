import logo from './logo.svg';
import './App.css';

function App() {
  const nome = 'Severino';
  const idade = 18;
  const Saudacao = () => "Olá. Tudo bem ?"

  const pessoas = [
    {
      nome: "Carlos",
      profissao: "Professor"
    },
    {
      nome: "Eduardo",
      profissao: "Instrutor"
    },
    {
      nome: "Freire",
      profissao: "Arquiteto"
    }
  ]

  return (
    <div>
      <h1 className='titulo'>Meu nome é {nome}. </h1>
      <p>{nome} é maior de idade ? {idade >= 18 ? "Sim." : "Não."}</p>
      <p><Saudacao/></p>
      <ul>
        {pessoas.map(pessoa => (
          <li>{pessoa.nome} - {pessoa.profissao} </li>
        ))}        
      </ul>
    </div>
     
  );
}

export default App;
