import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Row className='justify-content-center align-items-center flex-nowrap'>

      <Col className='col-1'>
       <FontAwesomeIcon icon={faMoon} />
      </Col>
      
      <Col className='col-10'>
      <div  className='toggle-style' onClick={toggleTheme} variant={theme === 'light' ? 'dark' : 'light'}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </div>
      </Col>

      </Row>
  );
};

export default ThemeToggle;