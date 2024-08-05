import Card from 'react-bootstrap/Card';

const CountryCard = ({country}) => {
  return (
    <Card className='mb-4 country-card'>
      <div className='country-img-style'>
       <img src={country.flags.png}  alt={country.name.common} />
      </div>
    <Card.Body>
      <Card.Title className='mb-3'>{country.name.common}</Card.Title>
      <Card.Text>Population: <span className='gray-color'>{country.population}</span></Card.Text>
      <Card.Text>Region: <span className='gray-color'>{country.region}</span></Card.Text>
      <Card.Text>Capital: <span className='gray-color'>{country.capital}</span></Card.Text>
    </Card.Body>
  </Card>
  )
}

export default CountryCard