import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import Exibir from '../views/Exibir';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/aps" component={Exibir} />
                <Route path="/aps/:id" exact component={Exibir} />
            </Switch>
        </BrowserRouter>
    )
}
