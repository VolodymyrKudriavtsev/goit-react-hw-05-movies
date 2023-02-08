import { NavLink } from 'react-router-dom';

import items from './items';

import css from './navbar.module.css';

const Navbar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li className={css.item} key={id}>
      <NavLink to={link} className={css.link}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={css.menu}>{elements}</ul>;
};

export default Navbar;
