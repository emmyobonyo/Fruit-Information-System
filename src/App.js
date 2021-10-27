import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ItemDescription from './components/DisplayData/ItemDescription';
import DisplayData from './components/DisplayData/DisplayData';
import './App.css';

function App() {
  const fruits = useSelector((state) => state.fruits);
  return (
    <Router>
      <div>
        <Switch>
          { fruits.map((fruit) => (
            <Route path={`/${fruit.name}`} key={fruit.id}>
              <ItemDescription fruits={fruit.name} homePage={fruit.homePage} />
            </Route>
          ))}
          <Route path="/">
            <DisplayData />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
