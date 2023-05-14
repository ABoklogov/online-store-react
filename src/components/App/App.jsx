import { Routes, Route, Link } from 'react-router-dom'
import ProductsView from 'views/ProductsView';
import CardProductView from 'views/CardProductView';
import BasketView from 'views/BasketView';
import NotFoundView from 'views/NotFoundView';
// import s from './App.module.css';

function App() {
  return (
    <>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/card'>card</Link>
        <Link to='/basket'>basket</Link>
      </header>
      <Routes>
        <Route path='/' element={ <ProductsView/>} />
        <Route path='/card' element={ <CardProductView/>} />
        <Route path='/basket' element={ <BasketView/>} />
        <Route path='*' element={ <NotFoundView/>} />
      </Routes>
    </>
  );
}

export default App;
