import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import Edit from "../contacts/Edit";
import aContext from "../../context/auth/aContext";

const Contactsdisplay = () => {
  const Acontext = useContext(aContext);

  useEffect(() => {
    aContext.loaduser();
    // eslint-disable-next-line
  });

  return (
    <div className='md' id='Contacts'>
      <div>
        <h6>
          <Edit />
        </h6>
        <h6>
          <Contacts />
        </h6>
      </div>
    </div>
  );
};

export default Contactsdisplay;
