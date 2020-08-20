import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import {
  CaretUpOutlined,
  MoreOutlined,
  CloudUploadOutlined,
  PaperClipOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import aContext from "../../context/auth/aContext";

const Navbar = () => {
  const aContext = useContext(aContext);

  const { isAuthenticated, logout, user } = aContext;

  const onLogout = () => {
    logout();
  };

  const aLinks = (
    <Fragment>
      <h1 className='main'>
        <CaretUpOutlined />
        Simple Messaging
      </h1>
      <li>Hello {user && user.name}</li>
      <li>
        <ul className='ul'>
          <h2>
            <Link to='/Messages'>
              <PaperClipOutlined href='#Messages' />
            </Link>
          </h2>
        </ul>
        <h2>
          <Link to='/Moreinfo'>
            <MoreOutlined href='#Modal' />
          </Link>
        </h2>
        <a href='#!' onClick={onLogout}>
          <i>
            <span>Logout</span>
          </i>
        </a>
      </li>
    </Fragment>
  );

  const gLinks = (
    <Fragment>
      <h4>
        <Link to='/register'>Register</Link>
      </h4>
      <h4>
        <Link to='/login'>Login</Link>
      </h4>{" "}
    </Fragment>
  );

  return (
    <div className='navbar sticky'>
      <ul>{isAuthenticated ? aLinks : gLinks}</ul>
    </div>
  );
};

export default Navbar;
