import React, { useState } from 'react';

interface TabData {
  name: string;
  value1: string;
  value2: string;
}

const GradientComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'crypto' | 'shares' | 'forex' | 'etfs'>('crypto');
  const [tabData, setTabData] = useState<{ [key: string]: TabData[] }>({
    crypto: [
      { name: 'Bitcoin', value1: '$60,000', value2: '+5%' },
      { name: 'Ethereum', value1: '$3,000', value2: '+3%' },
      { name: 'Litecoin', value1: '$200', value2: '+1%' },
      { name: 'Ripple', value1: '$0.50', value2: '+2%' },
    ],
    shares: [
      { name: 'Apple', value1: '$150', value2: '+2%' },
      { name: 'Google', value1: '$2,500', value2: '+1.5%' },
      { name: 'Microsoft', value1: '$250', value2: '+3%' },
      { name: 'Amazon', value1: '$3,200', value2: '+0.5%' },
    ],
    forex: [
      { name: 'EUR/USD', value1: '1.20', value2: '+0.1%' },
      { name: 'GBP/USD', value1: '1.38', value2: '-0.2%' },
      { name: 'USD/JPY', value1: '110.00', value2: '+0.3%' },
      { name: 'AUD/USD', value1: '0.75', value2: '+0.15%' },
    ],
    etfs: [
      { name: 'SPY', value1: '$420', value2: '+0.8%' },
      { name: 'IWM', value1: '$220', value2: '+1.2%' },
      { name: 'QQQ', value1: '$350', value2: '+0.9%' },
      { name: 'DIA', value1: '$340', value2: '+0.7%' },
    ],
  });

  const handleTabClick = (tab: 'crypto' | 'shares' | 'forex' | 'etfs') => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-yellow-500 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="px-4">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-l from-yellow-500 to-white">
            Unlock Diverse Global Markets
          </h1>
          <p className="text-lg">
          Discover trading opportunities with CFDs on Commodities like Oil, Gold, and Natural Gas. Explore CFDs on Forex, Crypto, or gain exposure to Indices such as S&P 500, or the Nasdaq. Take advantage of equity markets with CFDs on Shares like Amazon and Tesla.
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              className={`cursor-pointer px-4 py-2 font-medium text-sm ${activeTab === 'crypto' ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-500 hover:text-indigo-500'}`}
              onClick={() => handleTabClick('crypto')}
            >
              Crypto
            </button>
            <button
              className={`cursor-pointer px-4 py-2 font-medium text-sm ${activeTab === 'shares' ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-500 hover:text-indigo-500'}`}
              onClick={() => handleTabClick('shares')}
            >
              Shares
            </button>
            <button
              className={`cursor-pointer px-4 py-2 font-medium text-sm ${activeTab === 'forex' ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-500 hover:text-indigo-500'}`}
              onClick={() => handleTabClick('forex')}
            >
              Forex
            </button>
            <button
              className={`cursor-pointer px-4 py-2 font-medium text-sm ${activeTab === 'etfs' ? 'border-b-2 border-indigo-500 text-indigo-500' : 'text-gray-500 hover:text-indigo-500'}`}
              onClick={() => handleTabClick('etfs')}
            >
              ETFs
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            <div className="grid grid-cols-4 gap-4">
              <div className="font-bold"></div>
              <div className="font-bold"></div>
              <div className="font-bold"></div>
              <div></div> {/* Empty for Button column */}
              {tabData[activeTab].map((data, index) => (
                <React.Fragment key={index}>
                  <div>{data.name}</div>
                  <div>{data.value1}</div>
                  <div>{data.value2}</div>
                  <div>
                    <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                      Trade
                    </button>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradientComponent;