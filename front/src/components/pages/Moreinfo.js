import React from "react";
import { Link } from "react-router-dom";

const Moreinfo = () => {
  return (
    <div className='md'>
      <h2>More Information</h2>
      <p>
        Read more at{" "}
        <Link to='/About' href='#About'>
          <a href='#About' />
          About
        </Link>
      </p>
      <p>
        View{" "}
        <Link to='/Contacts' href='#Contacts'>
          <a href='#Contacts' />, Add or edit Contacts
        </Link>
      </p>
    </div>
  );
};

export default Moreinfo;
