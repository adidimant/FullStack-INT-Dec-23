import { memo, useEffect, useState, FormEvent, useCallback } from "react";
import Box from "../../components/Box/Box";
import Input from "../../components/Input/Input";
import "./NewInvoice.css";
import InputSelect from "../../components/InputSelect/InputSelect";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";
import { axiosClient } from "../../axiosClient";
import 'jspdf-autotable';
import { extractUserIdFromToken, paymentTypeOptions, validateEmail } from '../../utils'
import { generatePDF, CompanyDetails, ReceiptData } from "../../untils/pdfGenerator";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import axios from "axios";



interface InvoiceFormData {
    customerName: string;
    date: string;
    description: string;
    receiptType: string;
    paymentDate: string;
    amount: number;
    currency: string;
    bank?: string; 
    branch?: string; 
    account?: string; 
    details?: string;
    footerContent?: string;
    customerEmail?: string;
    emailContent?: string;
}


const handleError = (error: unknown) => {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    alert(errorMessage);
};



function NewInvoice() {
    const [receiptNumber, setReceiptNumber] = useState<number | null>(null);
    const [companyDetails, setCompanyDetails] = useState<CompanyDetails | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
     const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<InvoiceFormData>({
        customerName: "",
        date: new Date().toISOString().split("T")[0],
        description: "",
        receiptType: "",
        paymentDate: new Date().toISOString().split("T")[0],
        amount: 0,
        currency: "ILS",
        bank: "",
        branch: "",
        account: "",
        details: "",
        footerContent: "",
        customerEmail: "",
        emailContent: "",
    });
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [savedReceipt, setSavedReceipt] = useState<{ id: string, number: number } | null>(null);

    useEffect(() => {
        async function fetchInitialData() {
            try {
                setIsLoading(true);
                const userId = extractUserIdFromToken();

                const [receiptResponse, companyResponse] = await Promise.all([
                    axiosClient.get(`/api/receipts/next-receipt-number/${userId}`),
                    axiosClient.get(`/api/users/details/${userId}`)
                ]);

                setReceiptNumber(receiptResponse.data.nextReceiptNumber);
                setCompanyDetails(companyResponse.data);
            } catch (error) {
                console.error('Error fetching initial data:', error);
                setError(error instanceof Error ? error.message : 'Failed to load initial data');
            } finally {
                setIsLoading(false);
            }
        }

        fetchInitialData();
    }, []);

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    }, []);

    const handlePreview = useCallback(async (e: React.MouseEvent) => {
        e.preventDefault();
        try {
            if (!companyDetails || !receiptNumber) {
                alert("נתוני החברה או מספר הקבלה חסרים");
                return;
            }

            if (!formData.customerName || !formData.amount || !formData.receiptType) {
                alert("אנא מלא את כל השדות הנדרשים");
                return;
            }

            const receiptData: ReceiptData = {
                ...formData,
                receiptNumber: receiptNumber,
                bank: formData.bank?.toString(),
                branch: formData.branch?.toString(),
                account: formData.account?.toString(),
            };

            const doc = await generatePDF(receiptData, companyDetails);
            const pdfBlob = doc.output('blob');

            if (pdfBlob.size < 100) {
                alert("המסמך שנוצר ריק");
                return;
            }

            // שכבת רקע כהה שמכסה את המסך
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                z-index: 9999;
            `;

            // קונטיינר לתצוגת ה-PDF.
            const previewContainer = document.createElement('div');
            previewContainer.style.cssText = `
                width: 90%;
                height: 85%;
                background: white;
                border-radius: 8px;
                overflow: hidden;
                position: relative;
            `;

            // כפתור לסגירת התצוגה
            const closeButton = document.createElement('button');
            closeButton.textContent = 'סגור תצוגה מקדימה';
            closeButton.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                padding: 8px 16px;
                border: none;
                border-radius: 4px;
                background: #007bff;
                color: white;
                cursor: pointer;
                font-family: Rubik, sans-serif;
                z-index: 1;
            `;

            // הצגת קובץ ה-PDF.
            const objectElement = document.createElement('object');
            objectElement.style.cssText = `
                width: 100%;
                height: 100%;
                border: none;
            `;
            objectElement.type = 'application/pdf';
            objectElement.data = URL.createObjectURL(pdfBlob);

            // סגירה
            const closePreview = () => {
                document.body.removeChild(overlay);
                URL.revokeObjectURL(objectElement.data);
            };

            closeButton.onclick = closePreview;
            overlay.onclick = (e) => {
                if (e.target === overlay) {
                    closePreview();
                }
            };

            // הרכבת האלמנטים
            previewContainer.appendChild(closeButton);
            previewContainer.appendChild(objectElement);
            overlay.appendChild(previewContainer);
            document.body.appendChild(overlay); //הצגה

        } catch (error) {
            console.error("Error previewing document:", error);
            alert("שגיאה בתצוגה המקדימה");
        }
    }, [companyDetails, receiptNumber, formData]);

    const handleSaveReceipt = useCallback(async (e: FormEvent) => {
        e.preventDefault();
    
        if (isProcessing || savedReceipt) return; // Prevent multiple submissions
    
        setLoading(true);
        setError('');
    
        // Validate required fields
        const requiredFields = ['customerName', 'amount', 'receiptType'];
        for (const field of requiredFields) {
            if (!formData[field as keyof InvoiceFormData]) {
                setError(`שדה ${field} הינו חובה`);
                setLoading(false);
                return;
            }
        }
    
        const saveData = {
            ...formData,
            receiptNumber: receiptNumber,
            bank: formData.bank?.toString(),
            branch: formData.branch?.toString(),
            account: formData.account?.toString(),
        };
    
        try {
            setIsProcessing(true);
    
            const userId = extractUserIdFromToken();
            if (!userId) throw new Error('User ID not found');
    
            const response = await axiosClient.post('/api/receipts/save', {
                ...saveData,
                userId,
            });
    
            if (response.status === 201) {
                setSavedReceipt({
                    id: response.data.receiptId,
                    number: response.data.receiptNumber,
                });
    
                alert('הקבלה נשמרה בהצלחה!');
            }
        } catch (err) {
            if (axios.isAxiosError(err) && err.response?.data) {
                setError((err.response.data).error);
            } else {
                setError('שמירת הקבלה נכשלה');
            }
        } finally {
            setIsProcessing(false);
            setLoading(false);
        }
    }, [isProcessing, savedReceipt, formData, receiptNumber, setLoading, setError, setSavedReceipt, setIsProcessing]);
    

    const handleSendEmail = useCallback(async (e: FormEvent) => {
        e.preventDefault();
    
        if (isProcessing || !savedReceipt || !receiptNumber || !companyDetails) return;
    
        try {
            setIsProcessing(true);
    
            // Email validation
            if (!formData.customerEmail) {
                alert('נא להזין כתובת אימייל');
                return;
            } else if (!validateEmail(formData.customerEmail)) {
                alert('כתובת אימייל אינה תקינה');
                return;
            }

            const receiptData: ReceiptData = {
                ...formData,
                receiptNumber: receiptNumber,
                // Convert string dates to Date objects
                date: new Date(formData.date),
                paymentDate: formData.paymentDate,
                bank: formData.bank?.toString(),
                branch: formData.branch?.toString(),
                account: formData.account?.toString(),
                amount: Number(formData.amount),
                customerName: formData.customerName,
                description: formData.description,
                receiptType: formData.receiptType,
                currency: formData.currency,
                details: formData.details,
                footerContent: formData.footerContent,
            };
            
    
            const pdfDoc = await generatePDF(receiptData, companyDetails);
            const pdfBlob = pdfDoc.output('blob');
    
            // Create FormData and append all necessary data
            const formDataToSend = new FormData();
            formDataToSend.append('pdf', new File([pdfBlob], `receipt_${receiptNumber}.pdf`, {
                type: 'application/pdf'
            }));
            formDataToSend.append('receiptNumber', receiptNumber.toString());
            formDataToSend.append('userId', extractUserIdFromToken());
            formDataToSend.append('customerEmail', formData.customerEmail);
            formDataToSend.append('emailContent', formData.emailContent || '');
    
            // Configure axios request
            const response = await axiosClient.post('/api/receipts/send-email', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
    
            if (response.status === 200) {
                alert('האימייל נשלח בהצלחה!');
                navigate('/');
            }
        } catch (error) {
            handleError(error);
        } finally {
            setIsProcessing(false);
        }
    }, [isProcessing, savedReceipt, receiptNumber, companyDetails, formData, navigate, setIsProcessing]);
    
        
    
    return (
        <>
        <div className="main">
        <form>
            <div className="title-main"> {isLoading ? "טוען..." : 
                 error ? "שגיאה בטעינת המספר" : 
                 `קבלה מספר ${receiptNumber} / ${companyDetails?.companyName}`}</div>
        <Box width="1100px">
            <div className="subtitle">פרטי המסמך</div>
            <div className="part-1">
                <div><Input title="שם הלקוח" value={formData.customerName} onChange={handleInputChange} type="text" id="customerName" placeholder="הקלידו את שם הלקוח" width="710px" isRequired/></div>
                <div><Input title="תאריך מסמך"  value={formData.date} onChange={handleInputChange} type="date" id="DocumentDate" placeholder="בחרו תאריך" isRequired/></div>
            </div>

            <div className="subtitle">תיאור תכולת המסמך</div>
            <div className="part-2">
                <Input type="text" id="description"  value={formData.description} onChange={handleInputChange} placeholder="למשל, שם הפרוייקט" isRequired/>
            </div>

            <div className="subtitle">פירוט תקבולים</div>
            <div className="part-3">
                <div><InputSelect id="receiptType" title="סוג תקבול" 
                     options={paymentTypeOptions} 
                     isRequired={true}
                     fullFrame={true}
                     width="190px"
                     value={formData.receiptType} 
                     onChange={handleInputChange} 
                 /></div>
                <div><Input title="תאריך" type="date"  value={formData.paymentDate} onChange={handleInputChange} id="paymentDate" fullFrame={true} fontSize="16px" height="23px" width="140px" /></div>
                <div><Input title="סכום" type="number"  value={formData.amount} onChange={handleInputChange} id="amount" fullFrame={true} fontSize="16px" height="23px" width="90px" /></div>
                <div><InputSelect id="currency" title="מטבע"
                     options={[
                    { value: "ILS", label: "שקל" },
                    { value: "USD", label: "דולר" },
                    { value: "EUR", label: "אירו" },
                    ]}
                    isRequired={true}
                    fullFrame={true}
                    width="100px"
                    value={formData.currency} 
                    onChange={handleInputChange}
                /></div>
                <div><Input title="פרטים נוספים" type="text"  value={formData.bank} onChange={handleInputChange} id="bank" placeholder="בנק" fullFrame={true} fontSize="16px" width="120px" height="23px" /></div>
                <div style={{paddingTop: "24px"}}><Input title=" " type="text"  value={formData.branch} onChange={handleInputChange} id="branch" placeholder="סניף" fullFrame={true} fontSize="16px" width="120px" height="23px" /></div>
                <div style={{paddingTop: "24px"}}><Input title="" type="text"  value={formData.account} onChange={handleInputChange} id="account" placeholder="חשבון" fullFrame={true} fontSize="16px" width="120px" height="23px" /></div>
            </div>
            
        </Box>
        <Box width="1100px">
            <div className="subtitle">הערות שיופיעו במסמך</div>
            <div className="part-3">
            <div><TextArea id="details" title="תוכן מתחת לשורות הפירוט"  value={formData.details} onChange={handleInputChange} placeholder="יוצג מתחת לשורות הפירוט, בסמוך לחתימה שלך" rows={5} width="500px" height="110px"/></div>
            <div><TextArea id="footerContent" title="הערות בתחתית המסמך"  value={formData.footerContent} onChange={handleInputChange} placeholder="מתאים לאותיות קטנות, תנאים ודיסקליימר" rows={5} width="500px" height="110px"/></div>
            </div>
            
        </Box>
        <Box width="1100px">
        <div className="subtitle">הערות שיופיעו במסמך</div>
        <div  style={{width: "450px", marginTop: "20px"}}><Input title="שליחת מסמך המקור במייל"  value={formData.customerEmail} onChange={handleInputChange} type="email" id="customerEmail" placeholder="הכנסת כתובת מייל" /></div>
        <div style={{width: "450px", marginTop: "20px"}}><TextArea id="emailContent"  value={formData.emailContent} onChange={handleInputChange} title="תוכן נוסף במייל ללקוח" placeholder="יצורף לגוף במייל הנשלח ללקוח" rows={5} height="110px"/></div>
        </Box>

        <div className="flex-button">
            <div><Button name="שליחה במייל" text={loading ? <CircularProgress size="20px" color="inherit"/> : 'שליחת הקבלה במייל'}  onClick={handleSendEmail} variant="filled" disabled={isProcessing || !savedReceipt}/></div>
            <div><Button name="שמירת קבלה" text={loading ? <CircularProgress size="20px" color="inherit"/> : 'שמירת הקבלה'} onClick={handleSaveReceipt} variant="outlined" disabled={isProcessing || savedReceipt !== null}/></div>
            <div><Button name="תצוגה מקדימה" text="תצוגה מקדימה" onClick={(e) => handlePreview(e)}  variant="outlined" disabled={!companyDetails || !receiptNumber}/></div>
        </div>
        </form>
        </div>
        </>
    )
}

export default memo(NewInvoice)