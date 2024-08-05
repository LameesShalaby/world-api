import React, { useState } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import CountryCard from './CountryCard';
import SearchCountry from '../SearchCountry';
import RegionFilter from '../RegionFilter';
import useFetch from '../../hooks/useFetch';

const CountryList = () => {
  const { data: displayData, loading, error } = useFetch('https://restcountries.com/v3.1/all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  const filteredData = displayData.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === '' || country.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="dark" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Row className='py-5 align-items-center g-5'>
        <Col md={6}>
          <SearchCountry searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
        </Col>
        <Col md={6} className='d-flex justify-content-end'>
          <RegionFilter selectedRegion={selectedRegion} handleRegionChange={handleRegionChange} />
        </Col>
      </Row>
      <Row className='g-5'>
        {filteredData.length > 0 ? (
          filteredData.map((country) => (
            <Col lg={3} md={6} key={country.cca3}>
              <CountryCard country={country} />
            </Col>
          ))
        ) : (
          <p>No countries found.</p>
        )}
      </Row>
    </div>
  );
};

export default CountryList;
