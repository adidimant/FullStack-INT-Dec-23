
import './CompanyBox.css';

function CompanyBox({ data }) {
  return (
    <div className="company-item">
      <div className="company-name">{data.name}</div>
      <img src={data.logo} alt={data.logo} />
      <div className='company-field' >Establishment Year: {data.establishYear}</div>
      <div className='company-field' >Stock Price: {data.stockPrice}</div>
      <div className='company-field' >Sectors: {data.sectors.join(', ')}</div>
      <div className='company-field' >Description: {data.description}</div>
      <div className='company-field' >History: {data.history}</div>
      <div className='company-field'>
        <h3>Employees:</h3>
        <ul>
          {data.employees.map((employee, index) => (
            <li key={index}>
              {employee.name} - {employee.position}
            </li>
          ))}
        </ul>
      </div>
      <div className='company-field' >Location: <iframe
  src={data.location}
  width="200"
  height="200"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
       

      </div>
  
    </div>
  );
};

export default CompanyBox;

/*
name
logo
establishYear
stock price
location
sectors
description
*/