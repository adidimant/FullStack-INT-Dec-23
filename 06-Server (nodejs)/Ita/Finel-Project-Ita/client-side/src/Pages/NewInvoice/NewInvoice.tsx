import { memo } from "react";
import Box from "../../components/Box/Box";
import Input from "../../components/Input/Input";
import "./NewInvoice.css";
import InputSelect from "../../components/InputSelect/InputSelect";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/Button/Button";

function NewInvoice() {
    return (
        <>
        <div className="main">
        <form>
            <div className="title-main">קבלה מספר 80001 / (שם חברה)</div>
        <Box width="1100px">
            <div className="subtitle">פרטי המסמך</div>
            <div className="part-1">
                <div><Input title="שם הלקוח" type="text" id="CustomerName" placeholder="הקלידו את שם הלקוח" width="710px"/></div>
                <div><Input title="תאריך מסמך" type="date" id="DocumentDate" placeholder="בחרו תאריך" /></div>
            </div>

            <div className="subtitle">תיאור תכולת המסמך</div>
            <div className="part-2">
                <Input type="text" id="Description" placeholder="למשל, שם הפרוייקט" />
            </div>

            <div className="subtitle">פירוט תקבולים</div>
            <div className="part-3">
                <div><InputSelect id="Receipt" title="סוג תקבול" 
                     options={[
                    { value: "העברה בנקאית", label: "העברה בנקאית" },
                    { value: "מזומן", label: "מזומן" },
                    { value: "bit", label: "bit" },
                    { value: "paybox", label: "paybox" },
                    { value: "צ'יק", label: "צ'יק" },
                    { value: "כרטיס אשראי", label: "כרטיס אשראי" },
                    ]}
                    isRequired={true}
                    fullFrame={true}
                    withd="190px"
                /></div>
                <div><Input title="תאריך" type="date" id="payDate" fullFrame={true} fontSize="16px" height="23px" width="140px" /></div>
                <div><Input title="סכום" type="number" id="amount" fullFrame={true} fontSize="16px" height="23px" width="90px" /></div>
                <div><InputSelect id="Coin" title="מטבע"
                     options={[
                    { value: "ILS", label: "שקל" },
                    { value: "USD", label: "דולר" },
                    { value: "EUR", label: "אירו" },
                    ]}
                    isRequired={true}
                    fullFrame={true}
                    withd="100px"
                /></div>
                <div><Input title="פרטים נוספים" type="text" id="bank" placeholder="בנק" fullFrame={true} fontSize="16px" width="120px" height="23px" /></div>
                <div style={{paddingTop: "24px"}}><Input title=" " type="text" id="Branch" placeholder="סניף" fullFrame={true} fontSize="16px" width="120px" height="23px" /></div>
                <div style={{paddingTop: "24px"}}><Input title="" type="text" id="CustomerNum" placeholder="חשבון" fullFrame={true} fontSize="16px" width="120px" height="23px" /></div>
            </div>
            
        </Box>
        <Box width="1100px">
            <div className="subtitle">הערות שיופיעו במסמך</div>
            <div className="part-3">
            <div><TextArea id="Contents" title="תוכן מתחת לשורות הפירוט" placeholder="יוצג מתחת לשורות הפירוט, בסמוך לחתימה שלך" rows={5} width="500px" height="110px"/></div>
            <div><TextArea id="ContentsBelow" title="הערות בתחתית המסמך" placeholder="מתאים לאותיות קטנות, תנאים ודיסקליימר" rows={5} width="500px" height="110px"/></div>
            </div>
            
        </Box>
        <Box width="1100px">
        <div className="subtitle">הערות שיופיעו במסמך</div>
        <div  style={{width: "450px", marginTop: "20px"}}><Input title="שליחת מסמך המקור במייל" type="email" id="email" placeholder="הכנסת כתובת מייל" /></div>
        <div style={{width: "450px", marginTop: "20px"}}><TextArea id="ContentsEmail" title="תוכן נוסף במייל ללקוח" placeholder="יצורף לגוף במייל הנשלח ללקוח" rows={5} height="110px"/></div>
        </Box>

        <div className="flex-button">
            <div><Button name="הפקת מסמך" text="הפקת מסמך" onClick={() => {}} variant="filled"/></div>
            <div><Button name="שמירת טיוטה" text="שמירת טיוטה" onClick={() => {}} variant="outlined" /></div>
            <div><Button name="תצוגה מקדימה" text="תצוגה מקדימה" onClick={() => {}} variant="outlined" /></div>
        </div>
        </form>
        </div>
        </>
    )
}

export default memo(NewInvoice)