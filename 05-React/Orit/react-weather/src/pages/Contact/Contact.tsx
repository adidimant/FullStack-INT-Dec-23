import { ReactNode, memo } from 'react';
import './Contact.css'; // Ensure to link your CSS file or use inline styles

function Contact(): ReactNode {
    return (
        <section className="contact-page">
            <h1>Contact</h1>
            <p>Welcome to the contact page!</p>
            <p>This site was designed and developed by Orit Frank. 
                If you have ideas for improvements, noticed any errors, or simply want to say hello, 
                please reach out using the email address below.</p>
            <p>Your feedback is always welcome!</p>
            
            <div className="contact-info">
                <h2>Ways to Connect</h2>
                <p>Feel free to reach out via email or connect on social media:</p>
                <ul>
                    <li>Email: <a href="mailto:oritfrank@example.com">oritbg@gmail.com</a></li>
                    <li>LinkedIn: <a href="https://linkedin.com/in/orit-frank-47a906b7" target="_blank" rel="noopener noreferrer">linkedin.com/in/oritfrank</a></li>
                </ul>
            </div>
        </section>
    );
};

export default memo(Contact);