import  * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

class MainContent extends React.Component<any, any>{
    render(){
        return(
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' component={About} />
            </Switch>           
        )
    }
}

export default MainContent;