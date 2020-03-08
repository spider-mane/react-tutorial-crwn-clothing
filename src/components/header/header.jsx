import "./header.scss";
import React from "react";
import { MENU } from "./data";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>

    <div className='options'>
      {MENU.map(item => (
        <Link key={item.title} to={item.url} className='option'>
          {item.title.toUpperCase()}
        </Link>
      ))}

      {currentUser ? (
        <div className='option' onClick={e => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
