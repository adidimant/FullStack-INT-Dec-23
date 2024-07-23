import React from 'react'
import TradingScheduleComponent from './TradingSchedule'

const companies = [
    {
        company: 'Apple Inc.',
        symbol: 'AAPL',
        marketCap: '$2.5T'
    },
    {
        company: 'Microsoft Corporation',
        symbol: 'MSFT',
        marketCap: '$2.2T'
    },
    {
        company: 'Amazon.com, Inc.',
        symbol: 'AMZN',
        marketCap: '$1.8T'
    },
    {
        company: 'Meta Platforms, Inc.',
        symbol: 'META',
        marketCap: '$1.5T'
    },
    {
        company: 'Alphabet Inc.',
        symbol: 'GOOGL',
        marketCap: '$1.4T'
    }
];

export default function Home() {
    return (
        <>
            <div className='container-home'>
                <h1>The top 100 companies are:</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/NASDAQ_Logo.svg/2560px-NASDAQ_Logo.svg.png" alt="" />
                <p>The Nasdaq Stock Market (/ˈnæzdæk/ ⓘ; National Association of Securities Dealers Automated Quotations) is an American stock exchange based in New York City. 
                    It is the most active stock trading venue in the U.S. by volume,[3] and ranked second on the list of stock exchanges by market capitalization of shares traded,
                    behind the New York Stock Exchange.[4] The exchange platform is owned by Nasdaq, Inc.,[5] which also owns the Nasdaq Nordic stock market network and several U.S.-based stock and options exchanges. 
                    Although it trades stock of healthcare, financial, entertainment, retail, and food businesses, it focuses more on technology stocks</p>
            </div>
            <div className='home-content'>
                <p>"Nasdaq" was initially an acronym for the National Association of Securities Dealers Automated Quotations.[6] It was founded in 1971 by the National Association of Securities Dealers (NASD), 
                    now known as the Financial Industry Regulatory Authority.[7] On February 8, 1971, the Nasdaq stock market began operations as the world's first electronic stock market.[7] At first, 
                    it was merely a "quotation system" and did not provide a way to perform electronic trades.[8]
                    The NASDAQ Stock Market eventually assumed the majority of major trades that had been executed by the over-the-counter (OTC) system of trading, but there are still many securities traded in this fashion. As late as 1987, the Nasdaq exchange was still commonly referred to as "OTC" in media reports[9] and also in the monthly Stock Guides (stock guides and procedures) issued by Standard & Poor's Corporation.[10] Over the years, 
                    it became more of a stock market by adding trade and volume reporting and automated trading systems. 
                    In 1981, Nasdaq traded 37% of the U.S. securities markets' total of 21 billion shares. By 1991, Nasdaq's share had grown to 46%.[11] In 1992, the Nasdaq Stock Market joined with the London Stock Exchange to form the first intercontinental linkage of capital markets.[12]
                    In 1996, the SEC issued a report alleging that Nasdaq market makers fixed prices by avoiding "odd-eighths" quotes (at the time, stock prices were quoted in increments of an eighth of a dollar) to artificially widen spreads. The report was followed by a new set of rules for how Nasdaq handled orders.[13]: 102, 126
                    In 1998, it became the first stock market in the United States to trade online, using the slogan "the stock market for the next hundred years".[14] The Nasdaq Stock Market attracted many companies during the dot-com bubble.
                    Its main index is the NASDAQ Composite, which has been published since its inception. The QQQ exchange-traded fund tracks the large-cap NASDAQ-100 index, which was introduced in 1985 alongside the NASDAQ Financial-100 Index, which tracks the largest 100 companies in terms of market capitalization.
                    2000–present
                    During the dot-com bubble, the NASDAQ Composite index spiked in the late 1990s. It then fell sharply as the bubble burst.
                    Studio
                    On March 10, 2000, the NASDAQ Composite stock market index peaked at 5,132.52, but fell to 3,227 by April 17,[15] and, in the following 30 months, fell 78% from its peak.[16]
                    In a series of sales in 2000 and 2001, FINRA sold its stake in the Nasdaq. On July 2, 2002, Nasdaq Inc. became a public company via an initial public offering.[17] In 2006, the status of the Nasdaq Stock Market was changed from a stock market to a licensed national securities exchange.[18] In 2007, it merged with OMX, a leading exchange operator in the Nordic countries, expanded its global footprint, and changed its name to the NASDAQ OMX Group.[19]
                    To qualify for listing on the exchange, a company must be registered with the United States Securities and Exchange Commission (SEC), must have at least three market makers (financial firms that act as brokers or dealers for specific securities) and must meet minimum requirements for assets, capital, public shares, and shareholders.
                    In February 2011, in the wake of an announced merger of NYSE Euronext with Deutsche Börse, speculation developed that NASDAQ OMX and Intercontinental Exchange (ICE) could mount a counter-bid of their own for NYSE. NASDAQ OMX could be[when?] looking to acquire the American exchange's cash equities business, ICE the derivatives business. At the time, "NYSE Euronext's market value was $9.75 billion. 
                    Nasdaq was valued at $5.78 billion, while ICE was valued at $9.45 billion."[20] Late in the month, Nasdaq was reported to be considering asking either ICE or the Chicago Mercantile Exchange to join in what would probably have to be, if it proceeded, an $11–12 billion counterbid.[21]
                    In December 2005, NASDAQ acquired Instinet for $1.9 billion, retaining the Inet ECN and subsequently selling the agency brokerage business to Silver Lake Partners and Instinet management.[22][23][24]
                    The European Association of Securities Dealers Automatic Quotation System (EASDAQ) was founded as a European equivalent to the Nasdaq Stock Market. It was purchased by NASDAQ in 2001 and became NASDAQ Europe. In 2003, operations were shut down as a result of the burst of the dot-com bubble.[25] In 2007, NASDAQ Europe was revived first as Equiduct and was acquired by Börse Berlin later that year.[26]
                    On June 18, 2012, Nasdaq OMX became a founding member of the United Nations Sustainable Stock Exchanges Initiative on the eve of the United Nations Conference on Sustainable Development (Rio+20).[27][28]
                    In November 2016, chief operating officer Adena Friedman was promoted to chief executive officer, becoming the first woman to run a major exchange in the U.S.[29]
                    In 2016, Nasdaq earned $272 million in listings-related revenues.[30]
                    In October 2018, the SEC ruled that the New York Stock Exchange and Nasdaq did not justify the continued price increases when selling market data.[31][32][33]
                    In December 2020, NASDAQ announced that it would strip its indexes of four Chinese companies in response to Executive Order 13959</p>
                <img src="https://t3.ftcdn.net/jpg/05/04/79/52/360_F_504795206_Vx5IrMwF4fnb2drGnjSSbZGwSlhEoc6w.jpg" alt="" />
            </div>
            <div className='top-companies'>
                <h2>Our top companies:</h2>
                <table>
                        <tr>
                            <th>Company</th>
                            <th>Symbol</th>
                            <th>Market Cap</th>
                        </tr>
                        {companies.map((company, index) => (
                            <tr key={index}>
                                <td>{company.company}</td>
                                <td>{company.symbol}</td>
                                <td>{company.marketCap}</td>
                            </tr>
                        ))}
                </table>
            </div>

            <div>
                <TradingScheduleComponent />
            </div>
        </>
    )
}
