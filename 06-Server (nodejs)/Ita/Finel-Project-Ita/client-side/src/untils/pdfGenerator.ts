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
  profilePic?: string; 
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


function formatDate(dateString: string | Date): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};


const getHebrewPaymentType = (paymentType: string): string => {

  const option = paymentTypeOptions.find(opt => opt.value === paymentType);
  return option ? option.label : paymentType;
};

const reverseDate = (date: string): string => {
  return date.split('').reverse().join('');
};

const reverseAmount = (amount: number): string => {
  return amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).split('').reverse().join('');
};

const reverseReceiptNumber = (receiptNumber: number): string => {
  return receiptNumber.toString().split('').reverse().join('');
};

const formatAmount = (amount: number) => {
  return `\u202D₪ ${amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  })}\u202C`;
};


export async function generatePDF(data: ReceiptData, company: CompanyDetails): Promise<jsPDF> {
  const doc = new jsPDF('p', 'mm', 'a4');
  

  doc.addFont(NotoSansHebrewRegular, 'NotoSansHebrew', 'normal');
  doc.addFont(rubikFont, 'Rubik', 'normal');
  doc.addFont(rubikBold, 'Rubik', 'bold');
  
  doc.setR2L(true);
  
  doc.setFont('NotoSansHebrew', 'normal');

  

  try {
      if (company?.profilePic) {
          try {
              const base64Data = company.profilePic.split(',')[1] || company.profilePic;
              doc.addImage(
                  base64Data,
                  'JPEG',
                  165,
                  10,
                  30,
                  30
              );
          } catch (logoError) {
              console.error('Error adding company logo:', logoError);
          }
      }
  

      doc.setFontSize(20);
      doc.text(company?.companyName || '', 190, 50, { align: 'right' });
      
      doc.setFontSize(12);
      doc.text(`ח.פ: ${company?.companyNumber}`, 190, 60, { align: 'right' });
      doc.text(`${company?.address}, ${company?.city}`, 190, 70, { align: 'right' });
      
      doc.text(`קבלה מספר: ${data.receiptNumber}`, 190, 90, { align: 'right' });
      doc.text(`תאריך: ${formatDate(data.date)}`, 190, 100, { align: 'right' });
      doc.text(`לכבוד: ${data.customerName}`, 190, 110, { align: 'right' });

      const hebrewPaymentType = getHebrewPaymentType(data.receiptType);
      
      const paymentDetails = hebrewPaymentType + 
          (data.bank ? ` בנק: ${data.bank}` : '') +
          (data.branch ? ` סניף: ${data.branch}` : '') +
          (data.account ? ` חשבון: ${data.account}` : '');

      
      doc.autoTable({
        head: [['תאריך', 'סכום', 'אופן תשלום', 'פירוט']],
        body: [[
          reverseDate(formatDate(data.date)), 
          `₪ ${reverseAmount(data.amount)}`,   
          paymentDetails,         
          data.description          
        ]],
        startY: 120,
        theme: 'grid', 
        styles: {
          font: 'NotoSansHebrew',
          fontSize: 10,
          halign: 'right' 
        }
      });

      if (data.footerContent) {
          doc.setFontSize(10);
          doc.text(data.footerContent, 190, doc.lastAutoTable.finalY + 20, { align: 'right' });
      }

      if (data.details) {
          doc.setFontSize(8);
          doc.text(data.details, 190, doc.lastAutoTable.finalY + 40, { align: 'right' });
      }

      doc.addImage(logo, 'PNG', 20, 280, 20, 8);
        doc.setFontSize(8);
        doc.text('הופק על-ידי "חשבונית בקליק" בע"מ', 10, 290);

      return doc;
  } catch (error) {
      console.error('Error generating PDF:', error);
      throw error;
  }
}

// 
export async function generateIncomeExpenseReport(data: IncomeExpenseData[], company: CompanyDetails, filters: Filters, reportType: "Income" | "Expense"):  Promise<void> {
    const doc = new jsPDF('p', 'mm', 'a4');
  
    doc.addFont(NotoSansHebrewRegular, 'NotoSansHebrew', 'normal');
    doc.addFont(rubikFont, 'Rubik', 'normal');
    doc.addFont(rubikBold, 'Rubik', 'bold');
    doc.setR2L(true);
    doc.setFont('NotoSansHebrew', 'normal');
  
    try {
      // Add company logo if available
      if (company?.profilePic) {
        try {
          const base64Data = company.profilePic.split(',')[1] || company.profilePic;
          doc.addImage(base64Data, 'JPEG', 165, 10, 30, 30);
        } catch (logoError) {
          console.error('Error adding company logo:', logoError);
        }
      }
  
      
      doc.setFontSize(20);
      doc.text(company?.companyName || '', 190, 50, { align: 'right' });
  
      doc.setFontSize(12);
      doc.text(`ח.פ: ${company?.companyNumber}`, 190, 60, { align: 'right' });
      doc.text(`${company?.address}, ${company?.city}`, 190, 70, { align: 'right' });
  
      
      doc.setFontSize(18);
      doc.text(reportType === "Income" ? "נתוני הכנסות" : "נתוני הוצאות", 190, 90, { align: 'right' });
  
      let filterText = '';
      if (filters.customer || filters.date) {
        filterText = "סינון לפי: ";
        if (filters.customer) filterText += `לקוח: ${filters.customer} `;
        if (filters.date) filterText += `תאריך: ${filters.date}`;
      }
      doc.setFontSize(12);
      doc.text(filterText, 190, 100, { align: 'right' });
  
      
      doc.autoTable({
        head: [['תאריך', 'סכום', 'סוג תשלום', 'תיאור', 'לקוח', 'מספר קבלה']],
        body: data.map(item => [
          reverseDate(formatDate(item.date)),        
          reverseAmount(item.amount),                
          getHebrewPaymentType(item.paymentType),   
          item.description || '',                  
          item.customer,                             
          reverseReceiptNumber(item.receiptNumber)  
        ]),
        startY: 110,
        theme: 'grid',
        styles: {
          font: 'NotoSansHebrew',
          fontSize: 10,
          halign: 'right' 
        }
      });
  
      const totalPayment = data.reduce((sum, item) => sum + Number(item.amount), 0);
      const totalText = `סה"כ: ₪${formatAmount(totalPayment)}`;
      doc.text(totalText, 60, doc.lastAutoTable.finalY + 10, { align: 'right' });
  
      doc.addImage(logo, 'PNG', 20, 280, 20, 8);
      doc.setFontSize(8);
      doc.text('הופק על-ידי "חשבונית בקליק" בע"מ', 10, 290);
  
      doc.save(`${reportType === "Income" ? "הכנסות" : "הוצאות"}-דוח.pdf`);
    } catch (error) {
      console.error('Error generating income/expense report:', error);
      throw error;
    }
  }