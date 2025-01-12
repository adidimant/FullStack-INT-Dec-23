import { memo, useCallback, useEffect, useMemo, useState } from "react";
import Box from "../../components/Box/Box";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableSortLabel,
    TablePagination,
    FormControl,
    Radio,
    RadioGroup,
    FormControlLabel,
    IconButton,
    Tooltip
} from "@mui/material";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import { useThemeContext } from "../../context/theme-context";
import './IncomeData.css';
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import InputSelect from "../../components/InputSelect/InputSelect";
import { writeFile, utils } from 'xlsx';
import { generatePDF, type ReceiptData, type CompanyDetails, generateIncomeExpenseReport, type Filters } from "../../untils/pdfGenerator";
import { axiosClient } from "../../axiosClient";
import { extractUserIdFromToken, paymentTypeOptions } from "../../utils";

interface Receipt {
    receiptNumber: number;
    customerName: string;
    description: string | null;
    paymentType: 'Bank transfer' | 'Cash' | 'bit' | 'paybox' | 'Check' | 'Credit card';
    paymentDate: string;
    amount: number;
    date: string;
    bank?: number;
    branch?: number;
    account?: number;
    details?: string;
    footerContent?: string;
    customer?: string;
}


function IncomeData() {
    const [order, setOrder] = useState<'asc' | 'desc'>('asc'); //סדר המיון
    const [orderBy, setOrderBy] = useState<keyof Receipt>('date'); //השדה שממנו המיון מתבצע
    const [page, setPage] = useState(0);
    const [filterType, setFilterType] = useState('');
    const [filterValue, setFilterValue] = useState('');
    const [startDate, setStartDate] = useState<string | undefined>(undefined);
    const [endDate, setEndDate] = useState<string | undefined>(undefined);
    const [receipts, setReceipts] = useState<Receipt[]>([]);
    const [companyDetails, setCompanyDetails] = useState<CompanyDetails | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const rowsPerPage = 12;
    const { theme } = useThemeContext();

    const headerCellStyle = useMemo(() => ({
        fontWeight: 'bold',
        fontSize: '18px',
        borderBottom: '1px solid lightgray',
        textAlign: 'right',
        color: theme === 'dark' ? '#FFFFFF' : '#000000',
    }), [theme]);

    const cellStyle = useMemo(() => ({
        textAlign: 'right',
        color: theme === 'dark' ? '#FFFFFF' : '#000000',
    }), [theme]);

    useEffect(() => {
        async function fetchData() {
            try {
                const userId = extractUserIdFromToken();

                
                const [receiptsResponse, companyResponse] = await Promise.all([
                    axiosClient.get(`/api/receipts/user/${userId}`),
                    axiosClient.get(`/api/users/details/${userId}`)
                ]);

                setReceipts(receiptsResponse.data);
                setCompanyDetails(companyResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    const handleDownloadPDF = useCallback(async (receipt: Receipt) => {
        try {
            if (!companyDetails) {
                throw new Error('Company details not available');
            }

            const receiptData: ReceiptData = {
                customerName: receipt.customerName,
                date: receipt.date,
                description: receipt.description || 'No description provided',
                receiptType: receipt.paymentType,
                paymentDate: receipt.paymentDate,
                amount: receipt.amount,
                currency: 'ILS',
                bank: receipt.bank?.toString(),
                branch: receipt.branch?.toString(),
                account: receipt.account?.toString(),
                details: receipt.details,
                footerContent: receipt.footerContent,
                receiptNumber: receipt.receiptNumber,
            };

            const doc = await generatePDF(receiptData, companyDetails);
            doc.save(`receipt_${receipt.receiptNumber}.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
            alert('שגיאה בהורדת הקבלה');
        }
    }, [companyDetails]);

    const getPaymentTypeLabel = useCallback((type: string) => {  //פונקציה שמחזירה את הערך בעברית
        return paymentTypeOptions.find(option => option.value === type)?.label || type; //חיפוש הערך באובייקט, אם קיים מחזיר את החלק בעברית ואם לא מחזיר את הסוג באנגלית
    }, []);


    //פונקצייה של איכון המיון
    const handleRequestSort = useCallback((property: string) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    }, [order, orderBy]);

    //פונקציית העברת עמוד
    const handleChangePage = useCallback((event: unknown, newPage: number) => {
        setPage(newPage);
    }, []);

    //הכנסת הערך לפילטר
    const handleFilterValueChange = useCallback((event: any) => {
        setFilterValue(event.target.value);
    }, []);


    //ערך התחלה וסיום לתאריך
    const handleStartDateChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setStartDate(event.target.value);
    }, []);

    const handleEndDateChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setEndDate(event.target.value);
    }, []);
    



    const sortedData = useMemo(() => {
        return [...receipts].sort((a, b) => { //יצירת עותק חדש כדי לא לשנות את המקור
            if (orderBy === 'amount' || orderBy === 'receiptNumber') { //ערך מספרי
                return (order === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy]); // מיון עולה או יורד
            }
            if (orderBy === 'date' || orderBy === 'paymentDate') { //ערך תאריך
                return (order === 'asc' 
                    ? new Date(a[orderBy]).getTime() - new Date(b[orderBy]).getTime() //המרת תאריך למספר והשוואה
                    : new Date(b[orderBy]).getTime() - new Date(a[orderBy]).getTime()
                );
            }
            return (order === 'asc'  //ערך של מילים
                ? String(a[orderBy]).localeCompare(String(b[orderBy])) // -ממירים לסטרינג והפונקציה עושה השוואה - עולה
                : String(b[orderBy]).localeCompare(String(a[orderBy]))
            );
        });
    }, [receipts, order, orderBy]);

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterType(event.target.value);
        setFilterValue('');
    };
    
    const filteredData = useMemo(() => {
        return sortedData.filter((row) => {
            if (filterType === 'year' && filterValue) {
                return new Date(row.date).getFullYear().toString() === filterValue;  
            }
            if (filterType === 'date' && startDate && endDate) {
                const rowDate = new Date(row.date);
                return rowDate >= new Date(startDate) && rowDate <= new Date(endDate); //בדיק אם התאריך בין התאריכים
            }
            if (filterType === 'customer' && filterValue) {
                return row.customerName.toLowerCase().includes(filterValue.toLowerCase());
            }
            if (filterType === 'paymentType' && filterValue) {
                return row.paymentType === filterValue;
            }
            return true;
        });
    }, [sortedData, filterType, filterValue, startDate, endDate]);


    const handleExportToExcel = useCallback(() => {
        const exportData = filteredData.map((row) => ({
            'מספר קבלה': row.receiptNumber,
            'לקוח': row.customerName,
            'תיאור': row.description || '',
            'סכום': row.amount,
            'תאריך': row.date,
            'סוג תשלום': row.paymentType,
        }));

        const worksheet = utils.json_to_sheet(exportData);
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, 'נתוני הכנסות');
        writeFile(workbook, 'IncomeData.xlsx');
    }, [filteredData]);


    const handleDownloadReport = useCallback(() => {
        if (!companyDetails) {
            alert('פרטי החברה אינם זמינים');
            return;
        }
        
        // הגדרת הפילטרים
        const filters: Filters = { //צריך להמשיך...
            customer: filterType === 'customer' ? filterValue : undefined,
            date: filterType === 'date' ? 
                (startDate && endDate ? `${startDate} עד ${endDate}` : undefined) : 
                (filterType === 'year' ? filterValue : undefined)
        };
    
        // המרת הנתונים למבנה הנדרש
        const mappedData = filteredData.map((receipt) => ({
            receiptNumber: receipt.receiptNumber,
            customer: receipt.customerName,
            description: receipt.description || '',
            paymentType: receipt.paymentType,
            amount: receipt.amount,
            date: receipt.date 
        }));
    
        try {
            generateIncomeExpenseReport(mappedData, companyDetails,filters,"Income");
        } catch (error) {
            console.error('Error generating report:', error);
            alert('שגיאה בהורדת הדוח');
        }
    }, [filterType, filterValue, startDate, endDate, filteredData, companyDetails]);
    

    return (
        <>
            <div className="main_table">
                <div className="title_table">נתוני קבלות</div>
                <div className="filter-container">
                    <Box width="780px">
                        <div className="title-filter">סינון לפי:</div>
                        <FormControl>
                            <RadioGroup row value={filterType} onChange={handleFilterChange}>
                                <FormControlLabel value="year" control={<Radio />} label="שנה" />
                                <FormControlLabel value="date" control={<Radio />} label="תאריך" />
                                <FormControlLabel value="customer" control={<Radio />} label="לקוח" />
                                <FormControlLabel value="paymentType" control={<Radio />} label="סוג תשלום" />
                            </RadioGroup>
                        </FormControl>

                        {filterType === 'year' && (
                        <Input
                            type="text"
                            id="year-filter"
                            title="בחר שנה"
                            value={filterValue}
                            onChange={handleFilterValueChange}
                            fullFrame={true}
                            width="700px"
                        />
                    )}

                    {filterType === 'date' && (
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Input
                                type="date"
                                id="start-date"
                                title="התחלה"
                                value={startDate}
                                onChange={handleStartDateChange}
                                fullFrame={true}
                                width="200px"
                            />
                            <Input
                                type="date"
                                id="end-date"
                                title="סיום"
                                value={endDate}
                                onChange={handleEndDateChange}
                                fullFrame={true}
                                width="200px"
                            />
                        </div>
                    )}

                    {filterType === 'customer' && (
                        <Input
                            type="text"
                            id="customer-filter"
                            title="לקוח"
                            value={filterValue}
                            onChange={handleFilterValueChange}
                            fullFrame={true}
                        />
                    )}

                    {filterType === 'paymentType' && (
                        <InputSelect
                        id="payment-type-filter"
                        title="סוג תשלום"
                        options={paymentTypeOptions}
                        value={filterValue}
                        onChange={(e) => setFilterValue(e.target.value)}
                        fullFrame={true}
                    />
                    )}

                    {filterType === 'product' && (
                        <Input
                            type="text"
                            id="product-filter"
                            title="תיאור מוצר"
                            value={filterValue}
                            onChange={handleFilterValueChange}
                            fullFrame={true}
                        />
                    )}
                </Box>
                <Box width="230px" className="bth-filter">   
                    <Button name="יצוא לאקסל" text="יצוא לאקסל" onClick={handleExportToExcel} variant="outlined" width="200px" className="bth-4" />
                    <Button name="יצוא לאקסל" text="יצוא לאקסל" onClick={() => { }} variant="outlined" width="200px" className="bth-4"/>
                    <Button name="שמירת טיוטה" text="הורד דוח" onClick={handleDownloadReport} variant="filled" width="200px" className="bth-4"/>
                </Box>
                </div>
                <Box width="1100px">
                    <Table sx={{ direction: 'rtl' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sortDirection={orderBy === 'receiptNumber' ? order : false}
                                sx={headerCellStyle}
                            >
                                <TableSortLabel
                                    active={orderBy === 'receiptNumber'}
                                    direction={orderBy === 'receiptNumber' ? order : 'asc'}
                                    onClick={() => handleRequestSort('receiptNumber')}
                                >
                                    מספר קבלה
                                </TableSortLabel>
                            </TableCell>
                            <TableCell
                                sortDirection={orderBy === 'customerName' ? order : false}
                                sx={headerCellStyle}
                            >
                                <TableSortLabel
                                    active={orderBy === 'customerName'}
                                    direction={orderBy === 'customerName' ? order : 'asc'}
                                    onClick={() => handleRequestSort('customerName')}
                                >
                                    לקוח
                                </TableSortLabel>
                            </TableCell>
                            <TableCell
                                sortDirection={orderBy === 'description' ? order : false}
                                sx={headerCellStyle}
                            >
                                <TableSortLabel
                                    active={orderBy === 'description'}
                                    direction={orderBy === 'description' ? order : 'asc'}
                                    onClick={() => handleRequestSort('description')}
                                >
                                    תיאור
                                </TableSortLabel>
                            </TableCell>
                            <TableCell
                                sortDirection={orderBy === 'paymentType' ? order : false}
                                sx={headerCellStyle}
                            >
                                <TableSortLabel
                                    active={orderBy === 'paymentType'}
                                    direction={orderBy === 'paymentType' ? order : 'asc'}
                                    onClick={() => handleRequestSort('paymentType')}
                                >
                                    סוג תשלום
                                </TableSortLabel>
                            </TableCell>
                            <TableCell
                                sortDirection={orderBy === 'amount' ? order : false}
                                sx={headerCellStyle}
                            >
                                <TableSortLabel
                                    active={orderBy === 'amount'}
                                    direction={orderBy === 'amount' ? order : 'asc'}
                                    onClick={() => handleRequestSort('amount')}
                                >
                                    סכום
                                </TableSortLabel>
                            </TableCell>
                            <TableCell
                                sortDirection={orderBy === 'date' ? order : false}
                                sx={headerCellStyle}
                            >
                                <TableSortLabel
                                    active={orderBy === 'date'}
                                    direction={orderBy === 'date' ? order : 'asc'}
                                    onClick={() => handleRequestSort('date')}
                                >
                                    תאריך
                                </TableSortLabel>
                            </TableCell>
                            <TableCell
                                sx={headerCellStyle}
                            >
                                הורדת קבלה
                            </TableCell>
                        </TableRow>
                    </TableHead>
                        <TableBody>
                            {filteredData
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <TableRow key={row.receiptNumber} hover>
                                        <TableCell sx={cellStyle}>{row.receiptNumber}</TableCell>
                                        <TableCell sx={cellStyle}>{row.customerName}</TableCell>
                                        <TableCell sx={cellStyle}>{row.description || '-'}</TableCell>
                                        <TableCell sx={cellStyle}>{getPaymentTypeLabel(row.paymentType)}</TableCell>
                                        <TableCell sx={cellStyle}>
                                            {row.amount.toLocaleString('he-IL', { 
                                                style: 'currency', 
                                                currency: 'ILS' 
                                            })}
                                        </TableCell>
                                        <TableCell sx={cellStyle}>
                                            {new Date(row.date).toLocaleDateString('he-IL')}
                                        </TableCell>
                                        <TableCell sx={cellStyle}>
                                            <Tooltip title="הורד קבלה">
                                                <IconButton
                                                    onClick={() => handleDownloadPDF(row)}
                                                    sx={{ color: theme === 'dark' ? '#FFFFFF' : '#000000' }}
                                                >
                                                    <SimCardDownloadIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[12]}
                        component="div"
                        count={sortedData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        sx={{
                            direction: 'ltr',
                            color: theme === 'dark' ? '#FFFFFF' : '#000000',
                        }}
                    />
                </Box>
            </div>
        </>
    );
}

export default memo(IncomeData);