export interface Receipt {
    receiptId: string;
    userId: string;
    receiptNumber: number;
    customerName: string;
    date: Date;
    description: string;
    receiptType: 'Bank transfer' | 'Cash' | 'bit' | 'paybox' | 'Check' | 'Credit card';
    paymentDate: Date;
    amount: number;
    bank?: number;
    branch?: number;
    account?: number;
    details?: string;
    footerContent?: string;
    customerEmail?: string;
    createdAt: Date;
}