import React from "react";
import { Link } from "react-router-dom";
import {
  CaretUpOutlined,
  MoreOutlined,
  CloudUploadOutlined,
  PaperClipOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const sp = {
  display: "inline-flex",
  color: "black",
  justifycontent: "right",
  height: "50px",
  float: "right",
  textalign: "center",
  position: "relative",
};

const Navbar = () => {
  return (
    <div className='navbar sticky'>
      <ul>
        <h1 className='main'>
          <CaretUpOutlined />
          Simple Messaging
        </h1>
      </ul>
      <ul className='ul'>
        <h2>
          <Link to='/Upload'>
            <CloudUploadOutlined href='#Up' />
          </Link>
        </h2>
        <h2>
          <Link to='/Messages'>
            <PaperClipOutlined href='#Messages' />
          </Link>
        </h2>
        <h2>
          <Link to='/Calls'>
            <PhoneOutlined href='#Calls' />
          </Link>
        </h2>
      </ul>
      <h2>
        <Link to='/Moreinfo'>
          <MoreOutlined href='#Modal' />
        </Link>
      </h2>
      <h4>
        <Link to='/register'>Register</Link>
      </h4>
      <h4>
        <Link to='/login'>Login</Link>
      </h4>
    </div>
  );
};

export default Navbar;
