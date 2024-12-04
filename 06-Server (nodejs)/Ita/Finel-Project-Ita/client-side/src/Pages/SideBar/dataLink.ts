import diagram from "../../assets/diagram.png";
import document from "../../assets/document.png";
import expenses from "../../assets/expenses.png";
import menu from "../../assets/menu.png"

const sidebarItems = [
    {
      icon: menu,
      label: "בית",
      links: [
        { text: "נתונים", url: "/" },
        { text: "נתונים", url: "/settings" },
      ],
    },
    {
      icon: diagram,
      label: "הכנסות",
      links: [
        { text: "הרשאות", url: "/income/monthly" },
        { text: "הכנסות", url: "/income/yearly" },
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
        { text: "Daily Expenses", url: "/expenses/daily" },
        { text: "Budget", url: "/expenses/budget" },
      ],
    },
  ];

  export default sidebarItems