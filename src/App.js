import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, NavLink, Link, Switch, Route } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <p>
          <NavLink exact to="/books">
            Home
          </NavLink>
        </p>

        <Switch>
          <Route path="/books" component={BookList} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
