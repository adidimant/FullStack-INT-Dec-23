import { memo, useEffect, useMemo, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import { axiosClient } from '../../../axiosClient';
import { useThemeContext } from '../../../context/theme-context';

interface ExchangeRate {
  key: string;
  currentExchangeRate: number;
  currentChange: number;
  unit: number;
  lastUpdate: string;
  name: string;
  currency?: string;
}

interface ExchangeRatesResponse {
  exchangeRates: ExchangeRate[];
}

const countryCurrencyMap: { [key: string]: string } = {
  "USD": "דולר אמריקאי",
  "GBP": "לירה שטרלינג",
  "JPY": "ין יפני",
  "EUR": "אירו",
  "AUD": "דולר אוסטרלי",
  "CAD": "דולר קנדי",
  "DKK": "כתר דני",
  "NOK": "כתר נורבגי",
  "ZAR": "ראנד דרום אפריקאי",
  "SEK": "כתר שוודי",
  "CHF": "פרנק שוויצרי",
  "JOD": "דינר ירדני",
  "LBP": "לירה לבנונית",
  "EGP": "לירה מצרית",
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('he-IL', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};


function ExchangeRatesTable() {
  const [exchangeRates, setExchangeRates] = useState<ExchangeRatesResponse>({ exchangeRates: [] });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string>("");
  const { theme } = useThemeContext()

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axiosClient.get<ExchangeRatesResponse>('/api/variance/exchange-rates');
        const updatedRates = response.data.exchangeRates.map((rate) => ({
          ...rate,
          currency: countryCurrencyMap[rate.key] || "מטבע לא ידוע",
        }));
        setExchangeRates({ exchangeRates: updatedRates });
        if (updatedRates.length > 0) {
          setLastUpdate(updatedRates[0].lastUpdate);
        }
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        setError('שגיאה בטעינת הנתונים, אנא נסה מאוחר יותר.');
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, []);

  const tableStyle = useMemo(() => ({
      backgroundColor: theme === 'dark' ? '#2E2E2E' : '#FFFFFF',
      color: theme === 'dark' ? '#e0e0e0' : '#000000', // צבע טקסט מותאם
  }), [theme]);

  const headerCellStyle = useMemo(() => ({
      fontWeight: 'bold',
      fontSize: '20px',
      color: theme === 'dark' ? '#FFFFFF' : '#000000', // טקסט לבן בכותרת במצב חשוך
      backgroundColor: theme === 'dark' ? '#424242' : '#f5f5f5', // רקע שונה לכותרת
      borderBottom: '1px solid lightgray',
  }), [theme]);

  const cellStyle = useMemo(() => ({
      color: theme === 'dark' ? '#e0e0e0' : '#000000', // צבע טקסט מותאם לתאים
  }), [theme]);

 

  return (
    <div style={{ maxWidth: 800 }}>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <CircularProgress />
        </div>
      ) : error ? (
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
      ) : exchangeRates.exchangeRates.length === 0 ? (
        <p style={{ textAlign: 'center', padding: '20px' }}>לא נמצאו נתונים להצגה</p>
      ) : (
        <>
          <h2 style={{ textAlign: 'center', direction: 'rtl' }}>
            שערי מטבעות - תאריך עדכון: {formatDate(lastUpdate)}
          </h2>
          <TableContainer
            component={Paper}
            sx={{ maxHeight: 235, overflowY: 'auto', direction: 'rtl', ...tableStyle }}
          >
            <Table sx={{ minWidth: 650 }} stickyHeader aria-label="Exchange Rates Table">
              <TableHead>
                <TableRow>
                  <TableCell style={headerCellStyle}>מדינה</TableCell>
                  <TableCell align="center" style={headerCellStyle}>
                    מטבע
                  </TableCell>
                  <TableCell align="right" style={headerCellStyle}>
                    שער
                  </TableCell>
                  <TableCell align="right" style={headerCellStyle}>
                    שינוי יומי
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {exchangeRates.exchangeRates.map((row) => (
                  <TableRow
                    key={row.key}
                    sx={{
                      backgroundColor: theme === 'dark' ? '#2E2E2E' : '#FFFFFF', // רקע מותאם לשורות
                      '&:hover': {
                        backgroundColor: theme === 'dark' ? '#383838' : '#f5f5f5', // רקע בעת ריחוף
                      },
                    }}
                  >
                    <TableCell component="th" scope="row" style={cellStyle}>
                      {row.key}
                    </TableCell>
                    <TableCell align="center" style={cellStyle}>
                      {row.currency}
                    </TableCell>
                    <TableCell align="right" style={cellStyle}>
                      {row.currentExchangeRate.toFixed(3)}
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{
                        ...cellStyle,
                        color:
                          row.currentChange > 0
                            ? 'green'
                            : row.currentChange < 0
                            ? 'red'
                            : cellStyle.color,
                      }}
                    >
                      {row.currentChange.toFixed(2)}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
}

export default memo(ExchangeRatesTable);
