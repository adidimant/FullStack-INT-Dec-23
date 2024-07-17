import React from 'react';
import { useParams } from 'react-router-dom';
import { companiesArray } from "./Companies";
import "./CompanyDetail.css";

function CompanyDetail() {
    const { name } = useParams();
    const company = companiesArray.find(company => company.name === name);

    if (!company) {
        return <div>Company not found</div>;
    }

    return (
        <div className="container">
            <h1>{company.name}</h1>
            <div className='tytle-company-data'>Establishment Year:</div>
            <div className='line'></div>
            <div className="company-field">{company.establishYear}</div>
            <div className='tytle-company-data'>Stock Price:</div>
            <div className='line'></div>
            <div className="company-field">{company.stockPrice}</div>
            <div className='tytle-company-data'>Location:</div>
            <div className='line'></div>
            <div className="company-field">{company.location}</div>
            <div className='tytle-company-data'>Description:</div>
            <div className='line'></div>
            <div className="company-field">{company.description}</div>
            <div className='tytle-company-data'>Key People:</div>
            <div className='line'></div>
            <div className="company-field">{company.KeyPeople.join(', ')}</div>
            <div className='tytle-company-data'>Sectors:</div>
            <div className='line'></div>
            <div className="company-field">
            {company.sectors.join(', ')}
            </div>
            <div className='tytle-company-data'>Number of Employees:</div>
            <div className="company-field">{company.NumberOfEmployees}</div>
            <div className="company-field">
                <img src={company.logo} alt={`${company.name} logo`} />
            </div>
            
        </div>
    );
}

export default CompanyDetail;
