import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App.jsx'
import Cidade from './Cidade'
import '/index.css'

// essa função renderiza o App dentro do elemento com id 'root'
// ela é chamada uma vez, quando a página é carregada
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Cidade />
  </React.StrictMode>,

  <Router>
  <Switch>
    <Route path="/Cidade" component={Cidade} />
    <Route path="/App" component={App} />
  </Switch>
</Router>
)