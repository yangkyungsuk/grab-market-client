import logo from './logo.svg';
import './App.css';
import MainpageComponent from "./main/index.js"; //index.js 입력안해도 메인폴더안에서 리액트 자체적으로 검색해서 불러올수 있다.
import {Switch, Route} from 'react-router-dom';
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return <div>
    <Switch>
      <Route exact={true} path="/">
      <MainpageComponent />
      </Route>
      <Route exact={true} path="/product/:id">     
        <ProductPage/>
      </Route>
      <Route exact={true} path="/upload">
        <UploadPage/>
      </Route>
    </Switch>
    </div>;
  
}

export default App;
