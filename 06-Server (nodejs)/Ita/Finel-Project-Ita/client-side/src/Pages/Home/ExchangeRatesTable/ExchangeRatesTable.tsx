import { memo, useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

interface ExchangeRate {
  CurrencyCode: string;
  CurrencyName: string;
  ExchangeRate: number;
  Change: number;
}

function ExchangeRatesTable() {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get('/api/PublicApi/GetExchangeRates');

        const processedData: ExchangeRate[] =
          response?.data?.ExchangeRates?.map((item: any) => ({
            CurrencyCode: item.CurrencyCode || 'N/A',
            CurrencyName: item.CurrencyName_He || 'לא זמין',
            ExchangeRate: item.Rate || 0,
            Change: item.ChangePercentage || 0,
          })) || [];

        setExchangeRates(processedData);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        setError('שגיאה בטעינת הנתונים, אנא נסה מאוחר יותר.');
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 800, margin: 'auto', marginTop: '20px' }}>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <CircularProgress />
        </div>
      ) : error ? (
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
      ) : exchangeRates.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '20px' }}>לא נמצאו נתונים להצגה</p>
      ) : (
        <Table sx={{ minWidth: 650 }} aria-label="Exchange Rates Table">
          <TableHead>
            <TableRow>
              <TableCell>קוד מטבע</TableCell>
              <TableCell align="right">שם המטבע</TableCell>
              <TableCell align="right">שער חליפין</TableCell>
              <TableCell align="right">שינוי&nbsp;(%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exchangeRates.map((row) => (
              <TableRow key={row.CurrencyCode}>
                <TableCell component="th" scope="row">
                  {row.CurrencyCode}
                </TableCell>
                <TableCell align="right">{row.CurrencyName}</TableCell>
                <TableCell align="right">
                  {row.ExchangeRate.toLocaleString(undefined, { minimumFractionDigits: 3 })}
                </TableCell>
                <TableCell
                  align="right"
                  style={{ color: row.Change >= 0 ? 'green' : 'red' }}
                >
                  {row.Change.toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}

export default memo(ExchangeRatesTable);
