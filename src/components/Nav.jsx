import {} from 'react';
import { Link } from 'react-router-dom';
import styles from '../CSS/Nav.module.css';

function Nav() {
  return (
    <>
      <header className={styles.nav}>
        <h2>Projeto</h2>
        <nav>
          <ul>
            <li>
              <Link to="/" className={styles.telink}>Home</Link>
            </li>
            <li>
              <Link to="/produtos" className={styles.telink}>Produtos</Link>
            </li>
            <li>
              <Link to="conteudo" className={styles.telink}>Conteudo</Link>
            </li>
            <li>
              <Link to="/cadastrar/produto" className={styles.telink}>Cadastrar Produto</Link>
            </li>
            <li>
              <Link to="/login" className={styles.telink}>Login</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Nav;
