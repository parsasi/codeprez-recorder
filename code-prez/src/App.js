import React from 'react';
import GlobalStyles from './GlobalStyles';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import Record from './pages/Record';

function App() {
    return (
        <Pages>
            <Switch>
                <Route path ="/" component={Home} exact/>
                <Route path="/record" component={Record} />
            </Switch>
        </Pages>
    );
}

const Pages = styled.div`
    width: 100vw;
    height: 100vh;
`



export default App;
