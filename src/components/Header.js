import React from 'react'; //import React classes, not needed anymore

// creates Header component
const Header = (props) => {
  return (
    // returns div & h1 which contains props for style from headerStyle object & title from top level
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

// props styling object
const headerStyle = {
  fontSize: '40px',
  textDecoration: 'underline',
};

export default Header;
