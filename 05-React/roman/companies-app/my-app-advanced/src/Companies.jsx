import { Link } from "react-router-dom";
import CompanyBox from "./CompanyBox";
import './Companies.css';

const companiesArray = [
  {
    name: 'Amazon',
    establishYear: 1994,
    stockPrice: 194.49,
    sectors: ['e-commerce', 'cloud computing', 'online advertising', 'digital streaming'],
    logo: 'https://images.crowdspring.com/blog/wp-content/uploads/2023/07/03162944/amazon-logo-1.png',
    description: 'Amazon.com, Inc., doing business as Amazon, is an American multinational technology company',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344309.7889786921!2d-122.67013845548628!3d47.60824082281563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2z0KHQuNGN0YLQuywg0JLQsNGI0LjQvdCz0YLQvtC9LCDQodCo0JA!5e0!3m2!1sru!2sil!4v1721203721311!5m2!1sru!2sil',
    history:'Amazon was founded by Jeff Bezos from his garage in Bellevue, Washington, on July 5, 1994. Initially an online marketplace for books, it has expanded into a multitude of product categories: a strategy that has earned it the moniker "the everything store".',
    employees: [
      {
        name: 'Jeff Bezos',
        position: 'Executive Chairman'
      },
      {
        name: 'Andy Jassy',
        position: 'CEO'
      }
    ],
   },
  {
    name: 'Google',
    establishYear: 1998,
    stockPrice: 185.50,
    sectors: ['search engine', 'advertising', 'cloud computing', 'software', 'hardware'],
    logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    description: 'Google LLC is an American multinational technology company that specializes in Internet-related services and products.',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101408.31327448736!2d-122.22875144042774!3d37.413243499111154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7495bec0189%3A0x7c17d44a466baf9b!2z0JzQsNGD0L3RgtC40L0t0JLRjNGOLCDQmtCw0LvQuNGE0L7RgNC90LjRjywg0KHQqNCQ!5e0!3m2!1sru!2sil!4v1721203673865!5m2!1sru!2sil',
    history:'Google is an American search engine company, founded in 1998 by Sergey Brin and Larry Page. Since 2015, Google has been a subsidiary of the holding company Alphabet, Inc. More than 70% of worldwide online search requests are handled by Google, placing it at the heart of most Internet users experience.',
    employees: [
      {
        name: 'Sundar Pichai',
        position: 'CEO'
      },
      {
        name: 'Larry Page',
        position: 'Co-Founder'
      },
      {
        name: 'Sergey Brin',
        position: 'Co-Founder'
      }
    ]
  },
  {
    name: 'Apple',
    establishYear: 1976,
    stockPrice: 234.82,
    sectors: ['consumer electronics', 'software', 'online services'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1720px-Apple_logo_black.svg.png',
    description: 'Apple Inc. is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50774.47354471911!2d-122.08493021190255!3d37.30924277905124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2z0JrRg9C_0LXRgNGC0LjQvdC-LCDQmtCw0LvQuNGE0L7RgNC90LjRjywg0KHQqNCQ!5e0!3m2!1sru!2sil!4v1721203590091!5m2!1sru!2sil',
    history:'On April 1, 1976, Apple Computer Company was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne. The company was registered as a California business partnership. Wayne, who worked at Atari, Inc. as a chief draftsman, became a co-founder in return for a 10% stake.'
  ,
    employees: [
      {
        name: 'Tim Cook',
        position: 'CEO'
      },
      {
        name: 'Steve Wozniak',
        position: 'Co-Founder'
      },
      {
        name: 'Steve Jobs',
        position: 'Co-Founder'
      }
    ]
  },
  {
    name: 'Microsoft',
    establishYear: 1975,
    stockPrice: 449.52,
    sectors: ['software', 'hardware', 'cloud computing', 'artificial intelligence'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1280px-Microsoft_logo.svg.png',
    description: 'Microsoft Corporation is an American multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85972.31554029458!2d-122.09979894999998!3d47.67208939999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54900cad2000ee23%3A0x5e0390eac5d804f2!2z0KDQtdC00LzQvtC90LQsINCS0LDRiNC40L3Qs9GC0L7QvSwg0KHQqNCQ!5e0!3m2!1sru!2sil!4v1721202734371!5m2!1sru!2sil',
    history:'Microsoft was founded by Bill Gates and Paul Allen on April 4, 1975, to develop and sell BASIC interpreters for the Altair 8800. It rose to dominate the personal computer operating system market with MS-DOS in the mid-1980s, followed by Windows.',
    employees: [
      {
        name: 'Satya Nadella',
        position: 'CEO'
      },
      {
        name: 'Bill Gates',
        position: 'Co-Founder'
      },
      {
        name: 'Paul Allen',
        position: 'Co-Founder'
      }
    ]
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
        The top 100 companies are:
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

