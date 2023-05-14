import { Link } from 'react-router-dom'
import s from './AppBar.module.css';
import Container from 'components/Container';

function AppBar() {
  return (
    <header className={s.appBar}>
      <Container>
        <div className={s.container}>
          <Link to='/' className={s.link}>Главная</Link>
          <Link to='/basket' className={s.link}>Корзина</Link>
        </div>
      </Container>
    </header>
  );
}

export default AppBar;