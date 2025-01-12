import React, { useState, useEffect, useMemo } from 'react';
import { DollarSign, ArrowLeftRight } from 'lucide-react';
import { getCurrencyRates } from '../../services/currencyApi';

interface CurrencyConverterProps {
  baseCurrency: string;
  baseAmount: number;
}

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  baseCurrency,
  baseAmount,
}) => {
  const [amount, setAmount] = useState(baseAmount);
  const [fromCurrency, setFromCurrency] = useState(baseCurrency);
  const [toCurrency, setToCurrency] = useState('USD');
  const [rates, setRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const availableCurrencies = useMemo(() => [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'AED', name: 'United Arab Emirates Dirham' },    
    { code: 'GBP', name: 'British Pound' },
    { code: 'SGD', name: 'Singapore Dollar' },
    { code: 'MAD', name: 'Moroccan Dirham' },
    { code: 'ZAR', name: 'South African Rand' },
    { code: 'NZD', name: 'New Zealand Dollar' },
    { code: 'FJD', name: 'Fijian Dollar' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'KRW', name: 'South Korean Won' },
    { code: 'CRC', name: 'Costa Rican Colón' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'ILS', name: 'Israeli Shekel' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'THB', name: 'Thai Baht' },
    { code: 'VND', name: 'Vietnamese Dong' },
    { code: 'EGP', name: 'Egyptian Pound' },
    { code: 'TZS', name: 'Tanzanian Shilling' },
    { code: 'CZK', name: 'Czech Koruna' }
  ].sort((a, b) => a.name.localeCompare(b.name)), []);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true);
        const newRates = await getCurrencyRates(fromCurrency);
        setRates(newRates);
        setError(null);
      } catch (err) {
        setError('Failed to fetch currency rates');
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, [fromCurrency]);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const convertCurrency = () => {
    if (!rates[toCurrency]) return 0;
    return (amount * rates[toCurrency]).toFixed(2);
  };

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <div className="flex items-center gap-2 mb-4">
        <DollarSign className="w-6 h-6 text-blue-500" />
        <h2 className="text-lg sm:text-xl font-semibold">Currency Converter</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            min="0"
            step="0.01"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              From
            </label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              {availableCurrencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name} ({currency.code})
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={handleSwapCurrencies}
            className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-100 rounded-full items-center justify-center hover:bg-blue-200 transition-colors"
            title="Swap currencies"
          >
            <ArrowLeftRight className="w-4 h-4 text-blue-600" />
          </button>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To
            </label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            >
              {availableCurrencies
                .filter(curr => curr.code !== fromCurrency)
                .map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.name} ({currency.code})
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">Converted Amount:</p>
          <p className="text-xl sm:text-2xl font-bold text-blue-600">
            {loading ? (
              <span className="animate-pulse">Loading...</span>
            ) : (
              `${convertCurrency()} ${toCurrency}`
            )}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Exchange rates are updated daily
          </p>
        </div>
      </div>
    </div>
  );
};