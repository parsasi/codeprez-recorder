import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';

function App() {
    return (
        <Pages>
            <Switch>
                <Route path ="/" component={Home} exact/>

            </Switch>
        </Pages>
    );
}

const Pages = styled.div`
    width: 100vw;
    height: 100vh;
`

export default App;
