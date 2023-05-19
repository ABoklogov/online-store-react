// import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import ProductsView from 'views/ProductsView';
import CardProductView from 'views/CardProductView';
import BasketView from 'views/BasketView';
import NotFoundView from 'views/NotFoundView';
import { Provider } from 'react-redux';
import { store } from 'store/index';
// import s from './App.module.css';
import Container from 'components/Container';
import AppBar from 'components/AppBar';

function App() {
  return (
    <Provider store={store}>
      <AppBar />
      <Container>
        <Routes>
          <Route path='/' element={<ProductsView />} />
          <Route path='/product/:productId' element={<CardProductView />} />
          <Route path='/basket' element={<BasketView />} />
          <Route path='*' element={<NotFoundView />} />
        </Routes>
      </Container>
    </Provider>
  );
}

export default App;
