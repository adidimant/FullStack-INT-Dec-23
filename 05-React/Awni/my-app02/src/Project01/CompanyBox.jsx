
import './CompanyBox.css';

function CompanyBox({ data }) {
  return (
    <div className="company-item">
      <div className="company-name">{data.name}</div>
      <img src={data.logo} alt={data.logo} />
      <div className='company-field' >Establishment Year: {data.establishYear}</div>
      <div className='company-field' >Stock Price: {data.stockPrice}</div>
      <div className='company-field' >Location: {data.location}</div>
      <div className='company-field' >Sectors: {data.sectors.join(', ')}</div>
      <div className='company-field' >Description: {data.description}</div>
    </div>
  );
};

export default CompanyBox;

