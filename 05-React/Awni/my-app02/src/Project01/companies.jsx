import { Link } from "react-router-dom";
import CompanyBox from "./CompanyBox";



const companiesArray = [
  {
    name: 'Amazon',
    establishYear: 1994,
    stockPrice: 194.49,
    sectors: ['e-commerce', 'cloud computing', 'online advertising', 'digital streaming'],
    logo: 'https://images.crowdspring.com/blog/wp-content/uploads/2023/07/03162944/amazon-logo-1.png',
    description: 'Amazon.com, Inc., doing business as Amazon, is an American multinational technology company',
    location: 'Seattle, Washington, United States',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  },
  {
    name: 'Arm',
    establishYear: 1990,
    stockPrice: 181.18,
    sectors: ['cpus'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Arm_logo_2017.svg/2560px-Arm_logo_2017.svg.png',
    description: 'Arm Holdings plc is a British semiconductor and software design company based in Cambridge, England, whose primary business is the design of central processing unit cores that implement the ARM architecture family of instruction sets.',
    location: 'United Kingdom, Cambridge, United Kingdom',
  }
];

/*
 1) Flexbox with many companies & logos
 2) Company page with company details & graph of the stock price
*/
function Companies() {
  return (
    
    <div className="container">
      <div className="header">
        <div className="back-link"><Link to={'/'}>Back</Link></div>
      </div>
      <div className="companies-board">
        <div className="companies-flex">
          {companiesArray.map((companyData) => {
            return <CompanyBox data={companyData} />
          })}
        </div>
      </div>
    </div>
  );
}

export default Companies;

