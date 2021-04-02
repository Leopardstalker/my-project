import React from "react";
import Navbar from './component/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch,
Route  } from 'react-router-dom';
import Home from './component/pages/Home';
import Reports from './component/pages/Reports';
import Products from './component/pages/Products';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/reports' component={Reports}/>
       <Route path='/products' component={Products}/>
     </Switch>
     </Router>
     </>
  );
}

export default App;


