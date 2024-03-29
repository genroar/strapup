import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaGreaterThan } from "react-icons/fa";

const Other = ({ parent, child }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=''>
      <div className='text-15px flex justify-center items-center bg-gray-700 shadow-custom w-[360px] h-[41px] rounded-[20px] cursor-pointer' onClick={toggleDropdown}>
        <p className='text-white'>{parent}</p>
        <div className='flex items-center ml-4 text-white' onClick={(e) => { e.stopPropagation(); toggleDropdown(); }}>
          <FaGreaterThan />
        </div>
      </div>
      {isOpen && <div className='text-white'>{child}</div>}
    </div>
  );
};

Other.propTypes = {
  parent: PropTypes.string.isRequired,
  child: PropTypes.string.isRequired,
};

export default Other;
