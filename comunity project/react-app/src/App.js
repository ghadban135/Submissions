import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './home';
import News from './news&events';
import Contact from './contact';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/news&events" component={News}/>
             <Route path="/contact" component={Contact}/>
            
           </Switch>
        </div> 
      </BrowserRouter>
    );
    }
}
 
export default App;
