import { Link } from 'react-router-dom'
import s from './AppBar.module.css';
import { useSelector } from 'react-redux';
import Container from 'components/Container';
import BasketIcon from 'components/icons/BasketIcon';

function AppBar() {
  const { basket } = useSelector(state => state);

  return (
    <header className={s.appBar}>
      <Container>
        <div className={s.container}>
          <Link to='/' className={s.link}>
            Главная
          </Link>
          <Link to='/basket' className={s.linkBasket}>
            <BasketIcon />
            {
              (basket.items.length > 0) &&
              <div className={s.labelBasket}>
                {basket.items.length}
              </div>
            }
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default AppBar;