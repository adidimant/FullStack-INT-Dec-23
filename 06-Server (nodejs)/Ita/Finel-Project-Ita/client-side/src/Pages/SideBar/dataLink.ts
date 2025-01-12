import diagram from "../../assets/diagram.png";
import document from "../../assets/document.png";
import expenses from "../../assets/expenses.png";

const sidebarItems = [
    {
      icon: diagram,
      label: "הכנסות",
      links: [
        { text: "הפקת חשבונית חדשה", url: "/new-invoice" },
        { text: "ריכוז נתוני הכנסות", url: "/Income-data" },
      ],
    },
    {
      icon: document,
      label: "ניהול שוטף",
      links: [
        { text: "Tasks", url: "/tasks" },
        { text: "Reports", url: "/reports" },
      ],
    },
    {
      icon: expenses,
      label: "הוצאות",
      links: [
        { text: "הוצאה חדשה", url: "/expenses/daily" },
        { text: "ריכוז נתוני הוצאות", url: "/Expense-data" },
      ],
    },
  ];
   export const settingsLinks = [
    { url: '/update-details', text: 'עדכון פרטים' },
    { url: '/logout', text: 'התנתק' }
  ];

  export default sidebarItems