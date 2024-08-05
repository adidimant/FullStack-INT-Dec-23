import LoginFooter from "../login/LoginFooter";
import LoginNavbar from "../login/LoginNavbar";
import './ResetPass.scss'
import '../login/LoginPage.css'
import ResetPassForm from "./ResetPassForm";
function ResetPass(){
    return(

<div>
<LoginNavbar />
<ResetPassForm />
<LoginFooter />
</div>
    )
}
export default ResetPass;