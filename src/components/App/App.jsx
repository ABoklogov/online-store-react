import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'
import NotFoundView from 'views/NotFoundView';
import { Provider } from 'react-redux';
import { store } from 'store/index';
// import s from './App.module.css';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import Spinner from 'components/Spinner';

const ProductsView = lazy(() =>
  import('views/ProductsView'),
);
const CardProductView = lazy(() =>
  import('views/CardProductView'),
);
const BasketView = lazy(() =>
  import('views/BasketView'),
);

function App() {
  return (
    <Provider store={store}>
      <AppBar />

      <Container>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<ProductsView />} />
            <Route path='/product/:productId' element={<CardProductView />} />
            <Route path='/basket' element={<BasketView />} />
            <Route path='*' element={<NotFoundView />} />
          </Routes>
        </Suspense>
      </Container>
    </Provider>
  );
}

export default App;
