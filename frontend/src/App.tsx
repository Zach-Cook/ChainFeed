import React from 'react'
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import { Home } from './pages/home'
import { About } from './pages/about'
import { ROUTES } from './services/config'


interface AppProps {

}

export const App: React.FC<AppProps> = ({}) => {
    return (
      <>

      <Router>

        <Switch>
          <Home
            exact
            path={ROUTES.HOME}
          />
        </Switch>
        
        <Switch>
          <About
            exact
            path={ROUTES.ABOUT}
          />
        </Switch>

      </Router>
      </>
    );
}