import BookList from './views/Books/BookList';
import BookDetail from './views/Books/BookDetail';
import './App.css';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BrowserRouter>
        <p>
          Check out the amazing selection of books in our &nbsp;
          <NavLink exact to="/books">
            catalog
          </NavLink>
        </p>

        <Switch>
          <Route path="/books/:id" component={BookDetail} />
          <Route path="/books" component={BookList} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
