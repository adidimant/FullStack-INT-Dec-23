import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';
import NotoSansHebrewRegular from '../fonts/NotoSansHebrew-Regular.ttf';
import rubikFont from '../fonts/Rubik-Regular.ttf';
import rubikBold from '../fonts/Rubik-Bold.ttf';
import { paymentTypeOptions } from '../utils';



// Type declarations
declare module 'jspdf' {
    interface jsPDF {
        autoTable: (options: UserOptions) => void;
        lastAutoTable: {
            finalY: number;
        };
    }
}

export interface ReceiptData {
  customerName: string;
  date: Date;
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
  receiptNumber: number;
}

export interface CompanyDetails {
  companyName: string;
  companyNumber: string;
  address: string;
  city: string;
  logoUrl?: string;
}

export interface IncomeExpenseData {
    receiptNumber: number;
    customer: string;
    description: string;
    paymentType: string;
    amount: number;
    date: string;
  }
  
export interface Filters {
    customer?: string;
    date?: string;
  }


export async function generatePDF(data: ReceiptData, company: CompanyDetails) {
    const doc = new jsPDF('p', 'mm', 'a4');
    
    // Add fonts
    doc.addFont(NotoSansHebrewRegular, 'NotoSansHebrew', 'normal');
    doc.addFont(rubikFont, 'Rubik', 'normal');
    doc.addFont(rubikBold, 'Rubik', 'bold');
    
    // Enable right-to-left
    doc.setR2L(true);
    
    // Set default font to Hebrew font
    doc.setFont('NotoSansHebrew', 'normal');
    
    // Add logo if exists
    if (company?.logoUrl) {
        try {
            const response = await fetch(company.logoUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const blob = await response.blob();
            if (blob.size > 0) {
                const logo = await new Promise<string>((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result as string);
                    reader.readAsDataURL(blob);
                });
                doc.addImage(logo, 'PNG', 165, 10, 30, 30);
            }
        } catch (error) {
            console.warn('Logo loading failed, continuing without logo:', error);
        }
    }
    
    // Company details
    doc.setFontSize(20);
    doc.text(company?.companyName || '', 190, 50, { align: 'right' });
    
    doc.setFontSize(12);
    doc.text(`ח.פ: ${company?.companyNumber}`, 190, 60, { align: 'right' });
    doc.text(`${company?.address}, ${company?.city}`, 190, 70, { align: 'right' });
    
    // Receipt details
    doc.text(`קבלה מספר: ${data.receiptNumber}`, 190, 90, { align: 'right' });
    doc.text(`תאריך: ${data.date}`, 190, 100, { align: 'right' });
    doc.text(`לכבוד: ${data.customerName}`, 190, 110, { align: 'right' });

    // Table
    doc.autoTable({
        head: [['סכום', 'אופן תשלום', 'פירוט']],
        body: [[
            `${data.amount.toLocaleString()} ${data.currency}`,
            `${data.receiptType}${data.bank ? ` בנק: ${data.bank}${data.branch ? `, סניף: ${data.branch}${data.account ? `, חשבון: ${data.account}` : ''}` : ''}` : ''}`,
            data.description
        ]],
        startY: 120,
        theme: 'grid',
        styles: {
            font: 'NotoSansHebrew',
            fontSize: 10,
            halign: 'right'
        },
        headStyles: {
            fillColor: [200, 200, 200],
            fontStyle: 'bold'
        },
        tableWidth: 'auto',
        margin: { right: 15 }
    });

    // Footer sections
    if (data.footerContent) {
        doc.setFontSize(10);
        doc.text(data.footerContent, 190, doc.lastAutoTable.finalY + 20, { align: 'right' });
    }

    if (data.details) {
        doc.setFontSize(8);
        doc.text(data.details, 190, doc.lastAutoTable.finalY + 40, { align: 'right' });
    }

     doc.setFontSize(8);
    doc.text('הופק על-ידי "חשבונית בקליק" בע"מ', 10, 290)
    
    return doc;
}


// Function to generate and download the PDF repor
export const generateIncomeExpenseReport = (data: IncomeExpenseData[], filters: Filters, reportType: "Income" | "Expense") => {
    const doc = new jsPDF('p', 'mm', 'a4');
  
    // Add fonts and enable RTL
    doc.addFont(NotoSansHebrewRegular, 'NotoSansHebrew', 'normal');
    doc.addFont(rubikFont, 'Rubik', 'normal');
    doc.addFont(rubikBold, 'Rubik', 'bold');
    
    // Enable right-to-left
    doc.setR2L(true);
    
    // Set default font to Hebrew font
    doc.setFont('NotoSansHebrew', 'normal');
  
    // Add the report title in Hebrew
    doc.setFontSize(18);
    doc.text(reportType === "Income" ? "נתוני הכנסות" : "נתוני הוצאות", 190, 20, { align: 'right' });
  
    // Add the filters section only if there are active filters
    if (filters.customer || filters.date) {
      doc.setFontSize(12);
      let filterText = "סינון לפי: ";
      if (filters.customer) filterText += `לקוח: ${filters.customer} `;
      if (filters.date) filterText += `תאריך: ${filters.date} `;
      doc.text(filterText, 190, 30, { align: 'right' });
    }
  
    // Helper function to get Hebrew payment type label
    const getPaymentTypeLabel = (type: string) => {
      const option = paymentTypeOptions.find(opt => opt.value === type);
      return option ? option.label : type;
    };
  
    // Format date function with LTR marker to prevent reversal
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `\u202D${day}/${month}/${year}\u202C`;
    };
    
    // Format number function with LTR marker
    const formatNumber = (num: number) => {
        return `\u202D${num.toLocaleString('en-US')}\u202C`;
    };
    
    // Format amount with shekel
    const formatAmount = (amount: number) => {
        return `\u202D₪ ${amount.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}\u202C`;
    };
  
    // Define table columns in reverse order
    const columns = [
      { header: "תאריך", dataKey: "date" },
      { header: "סכום", dataKey: "amount" },
      { header: "סוג תשלום", dataKey: "paymentType" },
      { header: "תיאור", dataKey: "description" },
      { header: "לקוח", dataKey: "customer" },
      { header: "מספר קבלה", dataKey: "receiptNumber" }
    ];
  
    // Calculate starting Y position based on whether filters are present
    const startY = (filters.customer || filters.date) ? 40 : 30;
  
    // Add the table with data
    doc.autoTable({
      head: [columns.map(col => col.header)],
      body: data.map(item => [
        formatDate(item.date),                // Date
        formatAmount(item.amount),           // Amount
        getPaymentTypeLabel(item.paymentType), // Payment type
        item.description || '',              // Description
        item.customer,                       // Customer
        formatNumber(item.receiptNumber)     // Receipt number
    ]),
      startY: startY,
      theme: 'grid',
      styles: {
        font: 'NotoSansHebrew',
        fontSize: 10,
        halign: 'right',
        cellPadding: 3
      },
      headStyles: {
        fillColor: [200, 200, 200],
        textColor: [0, 0, 0],
        fontSize: 12,
        fontStyle: 'bold',
        halign: 'right'
      },
      columnStyles: {
        0: { halign: 'right' }, // Date
        1: { halign: 'right' }, // Amount
        2: { halign: 'right' }, // Payment type
        3: { halign: 'right' }, // Description
        4: { halign: 'right' }, // Customer
        5: { halign: 'right' }  // Receipt number
      },
      margin: { right: 15 }
    });
  
    // Calculate total payment
    const totalPayment = data.reduce((sum, item) => {
      return sum + (typeof item.amount === 'number' ? item.amount : 0);
    }, 0);
  
    // Add the final payment amount with LTR marker
    const totalText = `סה"כ: ${formatAmount(totalPayment)}`;
    doc.text(totalText, 190, doc.lastAutoTable.finalY + 10, { align: 'right' });
  
    // Add footer
    doc.setFontSize(8);
    doc.text('הופק על-ידי "חשבונית בקליק" בע"מ', 10, 290);
  
    // Save the PDF with the report
    doc.save(`${reportType === "Income" ? "הכנסות" : "הוצאות"}-דוח.pdf`);
  };