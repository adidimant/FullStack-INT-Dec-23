

const companyInfo = [
    {
        name: 'Apple Inc.',
        mainEmployees: {
            CEO: 'Tim Cook',
            CTO: 'Kevin Lynch'
        },
        numberOfEmployees: 147000,
        story: 'Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services. Apple is the world\'s largest technology company by revenue and, since January 2021, the world\'s most valuable company. As of 2021, Apple is the world\'s fourth-largest PC vendor by unit sales, and fourth-largest smartphone manufacturer. It is one of the Big Five American information technology companies, along with Amazon, Google, Microsoft, and Facebook. Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in 1976 to develop and sell Wozniak\'s Apple I personal computer. It was incorporated by Jobs and Wozniak as Apple Computer, Inc. in 1977, and sales of its computers, including the Apple II, grew quickly. They went public in 1980 to instant financial success.',
        location: 'Cupertino, California',
        mapLink: 'https://www.google.com/maps/place/Cupertino,+California',
        image: 'https://www.marks-iplaw.jp/wp-content/uploads/2018/02/apple-inc-1.jpg',
        stockGraph: 'https://www.tradingview.com/symbols/NASDAQ-AAPL/'
    },
    {
        name: 'Microsoft Corporation',
        mainEmployees: {
            CEO: 'Satya Nadella',
            CTO: 'Kevin Scott'
        },
        numberOfEmployees: 181000,
        story: 'Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services. Its best-known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. Microsoft ranked No. 21 in the 2020 Fortune 500 rankings of the largest United States corporations by total revenue; it was the world\'s largest software maker by revenue as of 2016. It is considered one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Amazon, and Facebook.',
        location: 'Redmond, Washington',
        mapLink: 'https://www.google.com/maps/place/Redmond,+Washington',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png',
        stockGraph: 'https://www.tradingview.com/symbols/NASDAQ-MSFT/'
    },
    {
        name: 'Amazon.com, Inc.',
        mainEmployees: {
            CEO: 'Jeff Bezos',
            CTO: 'Werner Vogels'
        },
        numberOfEmployees: 1538000,
        story: 'Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Microsoft, and Facebook. The company has been referred to as "one of the most influential economic and cultural forces in the world", as well as the world\'s most valuable brand. Amazon was founded by Jeff Bezos in Bellevue, Washington, on July 5, 1994. The company started as an online marketplace for books but expanded to sell electronics, software, video games, apparel, furniture, food, toys, and jewelry. In 2015, Amazon surpassed Walmart as the most valuable retailer in the United States by market capitalization.',
        location: 'Seattle, Washington',
        mapLink: 'https://www.google.com/maps/place/Seattle,+Washington',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
        stockGraph: 'https://www.tradingview.com/symbols/NASDAQ-AMZN/'
    },
    {
        name: 'Meta Platforms, Inc.',
        mainEmployees: {
            CEO: 'Mark Zuckerberg',
            CTO: 'Mike Schroepfer'
        },
        numberOfEmployees: 71900,
        story: 'Meta Platforms, Inc. is an American multinational technology conglomerate based in Menlo Park, California. It was founded by Mark Zuckerberg, along with his college roommates and fellow Harvard University students Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes, originally as TheFacebook.com—today\'s Facebook, a popular global social networking service. It is one of the world\'s most valuable companies. Meta Platforms owns Instagram, WhatsApp, Oculus, and Novi, and has a 9.9% stake in Jio Platforms. It also has a division, Facebook Reality Labs, which is developing the augmented reality platform Meta Quest (formerly Oculus Quest).',
        location: 'Menlo Park, California',
        mapLink: 'https://www.google.com/maps/place/Menlo+Park,+California',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_j0e9PkNDFYOadkCqR8uOoFHhks3Z7fzHjQ&s',
        stockGraph: 'https://www.tradingview.com/symbols/NASDAQ-META/'
    },
    {
        name: 'Alphabet Inc.',
        mainEmployees: {
            CEO: 'Sundar Pichai',
            CTO: 'Urs Hölzle'
        },
        numberOfEmployees: 156500,
        story: 'Alphabet Inc. is an American multinational conglomerate headquartered in Mountain View, California. It was created through a restructuring of Google on October 2, 2015, and became the parent company of Google and several former Google subsidiaries. The two co-founders of Google assumed executive roles in the new company, with Larry Page serving as CEO and Sergey Brin as president. Alphabet is the world\'s fourth-largest technology company by revenue and one of the world\'s most valuable companies. The establishment of Alphabet was prompted by a desire to make the core Google business "cleaner and more accountable" while allowing greater autonomy to group companies that operate in businesses other than Internet services.',
        location: 'Mountain View, California',
        mapLink: 'https://www.google.com/maps/place/Mountain+View,+California',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMD5Dw23L7P_P_T7AwIs0GoCeYqk3bbubAwA&shttps://media.wired.com/photos/59548f5f5578bd7594c46595/master/pass/Ok5proj7dcVBHsWB4lAcKA7FoThQHIoDxaE4UByKQ3GgOBQHikNxoDgUh-JAcSgOFIfiQHEoDsWB4lAc4PsD-35JiLwLXcEAAAAASUVORK5CYII.jpg',
        stockGraph: 'https://www.tradingview.com/symbols/NASDAQ-GOOGL/'
    },
    {
        name: 'Apple Inc.',
        mainEmployees: {
            CEO: 'Tim Cook',
            CTO: 'Kevin Lynch'
        },
        numberOfEmployees: 147000,
        story: 'Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services. Apple is the world\'s largest technology company by revenue and, since January 2021, the world\'s most valuable company. As of 2021, Apple is the world\'s fourth-largest PC vendor by unit sales, and fourth-largest smartphone manufacturer. It is one of the Big Five American information technology companies, along with Amazon, Google, Microsoft, and Facebook. Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in 1976 to develop and sell Wozniak\'s Apple I personal computer. It was incorporated by Jobs and Wozniak as Apple Computer, Inc. in 1977, and sales of its computers, including the Apple II, grew quickly. They went public in 1980 to instant financial success.',
        location: 'Cupertino, California',
        mapLink: 'https://www.google.com/maps/place/Cupertino,+California',
        image: 'https://www.marks-iplaw.jp/wp-content/uploads/2018/02/apple-inc-1.jpg',
        stockGraph: 'https://www.tradingview.com/symbols/NASDAQ-AAPL/'
    },
    {
        name: 'Microsoft Corporation',
        mainEmployees: {
            CEO: 'Satya Nadella',
            CTO: 'Kevin Scott'
        },
        numberOfEmployees: 181000,
        story: 'Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services. Its best-known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers. Microsoft ranked No. 21 in the 2020 Fortune 500 rankings of the largest United States corporations by total revenue; it was the world\'s largest software maker by revenue as of 2016. It is considered one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Amazon, and Facebook.',
        location: 'Redmond, Washington',
        mapLink: 'https://www.google.com/maps/place/Redmond,+Washington',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1200px-Microsoft_logo_%282012%29.svg.png',
        stockGraph: 'https://www.tradingview.com/symbols/NASDAQ-MSFT/'
    },
    {
        name: 'Amazon.com, Inc.',
        mainEmployees: {
            CEO: 'Jeff Bezos',
            CTO: 'Werner Vogels'
        },
        numberOfEmployees: 1538000,
        story: 'Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Microsoft, and Facebook. The company has been referred to as "one of the most influential economic and cultural forces in the world", as well as the world\'s most valuable brand. Amazon was founded by Jeff Bezos in Bellevue, Washington, on July 5, 1994. The company started as an online marketplace for books but expanded to sell electronics, software, video games, apparel, furniture, food, toys, and jewelry. In 2015, Amazon surpassed Walmart as the most valuable retailer in the United States by market capitalization.',
        location: 'Seattle, Washington',
        mapLink: 'https://www.google.com/maps/place/Seattle,+Washington',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
        stockGraph: 'https://www.tradingview.com/symbols/NASDAQ-AMZN/'
    },
    {
        name: 'Meta Platforms, Inc.',
        mainEmployees: {
            CEO: 'Mark Zuckerberg',
            CTO: 'Mike Schroepfer'
        },
        numberOfEmployees: 71900,
        story: 'Meta Platforms, Inc. is an American multinational technology conglomerate based in Menlo Park, California. It was founded by Mark Zuckerberg, along with his college roommates and fellow Harvard University students Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes, originally as TheFacebook.com—today\'s Facebook, a popular global social networking service. It is one of the world\'s most valuable companies. Meta Platforms owns Instagram, WhatsApp, Oculus, and Novi, and has a 9.9% stake in Jio Platforms. It also has a division, Facebook Reality Labs, which is developing the augmented reality platform Meta Quest (formerly Oculus Quest).',
        location: 'Menlo Park, California',
        mapLink: 'https://www.google.com/maps/place/Menlo+Park,+California',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_j0e9PkNDFYOadkCqR8uOoFHhks3Z7fzHjQ&s',
        stockGraph: 'https://www.tradingview.com/symbols/NASDAQ-META/'
    },
    {
        name: 'Alphabet Inc.',
        mainEmployees: {
            CEO: 'Sundar Pichai',
            CTO: 'Urs Hölzle'
        },
        numberOfEmployees: 156500,
        story: 'Alphabet Inc. is an American multinational conglomerate headquartered in Mountain View, California. It was created through a restructuring of Google on October 2, 2015, and became the parent company of Google and several former Google subsidiaries. The two co-founders of Google assumed executive roles in the new company, with Larry Page serving as CEO and Sergey Brin as president. Alphabet is the world\'s fourth-largest technology company by revenue and one of the world\'s most valuable companies. The establishment of Alphabet was prompted by a desire to make the core Google business "cleaner and more accountable" while allowing greater autonomy to group companies that operate in businesses other than Internet services.',
        location: 'Mountain View, California',
        mapLink: 'https://www.google.com/maps/place/Mountain+View,+California',
        image: 'https://media.wired.com/photos/59548f5f5578bd7594c46595/master/pass/Ok5proj7dcVBHsWB4lAcKA7FoThQHIoDxaE4UByKQ3GgOBQHikNxoDgUh-JAcSgOFIfiQHEoDsWB4lAc4PsD-35JiLwLXcEAAAAASUVORK5CYII.jpg',
        stockGraph: 'https://www.tradingview.com/symbols/NASDAQ-GOOGL/'
    },


];

export default function CompaniesInfo() {
    return (
        <div className='container-companies'>
            <h1>Company Information</h1>

            {companyInfo.map((company, index) => {
                return (
                    <div key={index} className='company'>
                        <div>
                            <h1>{company.name}</h1>
                            <h2>{company.mainEmployees.CEO}</h2>
                            <h3>{company.mainEmployees.CTO}</h3>
                            <p>{company.numberOfEmployees}</p>
                            <p>{company.story}</p>
                            <a href={company.mapLink} target="_blank" rel="noopener noreferrer">Location</a>
                            <a href={company.stockGraph} target="_blank" rel="noopener noreferrer">Stock Graph</a>
                        </div>
                        <div>
                            <img src={company.image} alt={company.name} />
                        </div>

                    </div>
                )
            })}
        </div>
    );
}



