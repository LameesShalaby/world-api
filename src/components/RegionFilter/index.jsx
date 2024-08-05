import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const RegionFilter = ({ selectedRegion, handleRegionChange }) => {
  const handleSelect = (eventKey) => {
    handleRegionChange(eventKey);
  };

  return (
    <DropdownButton
      variant="outline-secondary"
      title={selectedRegion || "Filter By Region"}
      id="input-group-dropdown-1"
      onSelect={handleSelect}
    >
      <Dropdown.Item eventKey="">All Regions</Dropdown.Item>
      <Dropdown.Item eventKey="Africa">Africa</Dropdown.Item>
      <Dropdown.Item eventKey="Americas">Americas</Dropdown.Item>
      <Dropdown.Item eventKey="Asia">Asia</Dropdown.Item>
      <Dropdown.Item eventKey="Europe">Europe</Dropdown.Item>
      <Dropdown.Item eventKey="Oceania">Oceania</Dropdown.Item>
    </DropdownButton>
  );
};

export default RegionFilter;