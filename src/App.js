import logo from './logo.svg';
import './App.css';
import MainpageComponent from "./main/index.js"; //index.js 입력안해도 메인폴더안에서 리액트 자체적으로 검색해서 불러올수 있다.

function App() {
  return <MainpageComponent />;
  
}

export default App;
