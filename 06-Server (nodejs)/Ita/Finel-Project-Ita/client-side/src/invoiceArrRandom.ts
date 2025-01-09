export const invoices = Array.from({ length: 30 }, (_, index) => {
    const randomDate = new Date(
      new Date(2022, 0, 1).getTime() +
        Math.random() * (new Date(2024, 11, 31).getTime() - new Date(2022, 0, 1).getTime())
    );
    const paymentTypes = ['cash', 'credit', 'bank_transfer', 'check'];
    const currencyTypes = ['USD', 'EUR', 'GBP', 'JPY'];
    const descriptions = [
      'Consulting services',
      'Product purchase',
      'Maintenance fee',
      'Software license',
      'Annual subscription'
    ];
    const customerNames = [
      'Alice Johnson',
      'Bob Smith',
      'Charlie Brown',
      'Diana Prince',
      'Edward Nygma'
    ];
  
    const invoiceBaseNumber = 3000; // Starting invoice number
    const currentInvoiceNumber = invoiceBaseNumber + index;
  
    return {
      userId: `user_${Math.floor(Math.random() * 100)}`,
      invoiceNumber: currentInvoiceNumber.toString(),
      randomInvoiceNumber: `INV-${Date.now().toString().slice(-6)}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      customerName: customerNames[Math.floor(Math.random() * customerNames.length)],
      invoiceDate: randomDate,
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      paymentReceiptType: paymentTypes[Math.floor(Math.random() * paymentTypes.length)],
      payment: parseFloat((Math.random() * 10000).toFixed(2)),
      currencyType: currencyTypes[Math.floor(Math.random() * currencyTypes.length)],
      createdAt: new Date()
    };
  });
  
