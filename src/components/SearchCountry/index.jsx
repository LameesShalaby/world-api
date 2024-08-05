import React from 'react';
import { Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faSearch } from '@fortawesome/free-solid-svg-icons';  

const SearchCountry = ({ searchQuery, handleSearchChange }) => {
  return (
    <Form className="mb-4">
      <Row className='align-items-center'>
        <div className="search-container col-12">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input 
            className="form-control search-input" 
            type="search" 
            placeholder="Search by country name" 
            aria-label="Search" 
            value={searchQuery} 
            onChange={handleSearchChange}
          />
        </div>
      </Row>
    </Form>
  );
};

export default SearchCountry;
