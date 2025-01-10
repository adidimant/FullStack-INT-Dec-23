import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { UserOptions } from 'jspdf-autotable';
import NotoSansHebrewRegular from '../fonts/NotoSansHebrew-Regular.ttf';
import rubikFont from '../fonts/Rubik-Regular.ttf';
import rubikBold from '../fonts/Rubik-Bold.ttf';
import { paymentTypeOptions } from '../utils';
import logo from '../assets/logo.png';



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

const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
};



export async function generatePDF(data: ReceiptData, company: CompanyDetails): Promise<jsPDF> {
    const doc = new jsPDF('p', 'mm', 'a4');

    const img = new Image();
    img.src = logo;
    
    // Add fonts
    doc.addFont(NotoSansHebrewRegular, 'NotoSansHebrew', 'normal');
    doc.addFont(rubikFont, 'Rubik', 'normal');
    doc.addFont(rubikBold, 'Rubik', 'bold');
    
    // Enable right-to-left
    doc.setR2L(true);
    
    // Set default font to Hebrew font
    doc.setFont('NotoSansHebrew', 'normal');

  try {
    // Load logo
    const img = await loadImage(logo);
    const aspectRatio = img.width / img.height;
    const autoWidth = 8 * aspectRatio;

    // Add company logo if exists
    if (company?.logoUrl) {
        doc.addImage(company.logoUrl, 'PNG', 165, 10, 30, 30);
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

    // Add footer logo and text
    doc.addImage(logo, 'PNG', 20, 280, autoWidth, 8);
    doc.setFontSize(8);
    doc.text('הופק על-ידי "חשבונית בקליק" בע"מ', 10, 290);

    return doc;
} catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
}
}


// 
export async function generateIncomeExpenseReport(data: IncomeExpenseData[], filters: Filters, reportType: "Income" | "Expense"):  Promise<void> {
    const doc = new jsPDF('p', 'mm', 'a4');
  
    doc.addFont(NotoSansHebrewRegular, 'NotoSansHebrew', 'normal');
    doc.addFont(rubikFont, 'Rubik', 'normal');
    doc.addFont(rubikBold, 'Rubik', 'bold');
    doc.setR2L(true);
    doc.setFont('NotoSansHebrew', 'normal');
  
    try {
      // Load and add logo at the top
      const img = await loadImage(logo);
      const aspectRatio = img.width / img.height;
      const logoWidth = 30;  // Fixed width for top logo
      const logoHeight = logoWidth / aspectRatio;
      doc.addImage(logo, 'PNG', 165, 10, logoWidth, logoHeight);

      // Add the report title in Hebrew
      doc.setFontSize(18);
      doc.text(reportType === "Income" ? "נתוני הכנסות" : "נתוני הוצאות", 190, 20 + logoHeight, { align: 'right' });
      
      // Adjust starting Y position for filters based on logo height
      let currentY = 30 + logoHeight;
      
      // Add the filters section only if there are active filters
      if (filters.customer || filters.date) {
          doc.setFontSize(12);
          let filterText = "סינון לפי: ";
          if (filters.customer) filterText += `לקוח: ${filters.customer} `;
          if (filters.date) filterText += `תאריך: ${filters.date} `;
          doc.text(filterText, 190, currentY, { align: 'right' });
          currentY += 10;
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
  
   
    doc.autoTable({
      head: [columns.map(col => col.header)],
      body: data.map(item => [
        formatDate(item.date),             
        formatAmount(item.amount),           
        getPaymentTypeLabel(item.paymentType),
        item.description || '',              
        item.customer,                       
        formatNumber(item.receiptNumber)     
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
        0: { halign: 'right' }, 
        1: { halign: 'right' }, 
        2: { halign: 'right' }, 
        3: { halign: 'right' }, 
        4: { halign: 'right' }, 
        5: { halign: 'right' }  
      },
      margin: { right: 15 }
    });
  
    const totalPayment = data.reduce((sum, item) => sum + (typeof item.amount === 'number' ? item.amount : 0), 0);
        const totalText = `סה"כ: ${formatAmount(totalPayment)}`;
        doc.text(totalText, 190, doc.lastAutoTable.finalY + 10, { align: 'right' });
  
    const footerLogoWidth = 8 * aspectRatio;
        doc.addImage(logo, 'PNG', 20, 280, footerLogoWidth, 8);
        doc.setFontSize(8);
        doc.text('הופק על-ידי "חשבונית בקליק" בע"מ', 10, 290);
  
        doc.save(`${reportType === "Income" ? "הכנסות" : "הוצאות"}-דוח.pdf`);
      } catch (error) {
          console.error('Error generating income/expense report:', error);
          throw error;
      }
  };