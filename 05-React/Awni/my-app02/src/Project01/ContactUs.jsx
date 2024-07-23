
const FormsContact = [
    { id: 1, name: 'Name', type: 'text', placeholder: 'Enter your name' },
    { id: 2, name: 'Email', type: 'email', placeholder: 'Enter your email' },
    { id: 3, name: 'Message', type: 'text', placeholder: 'Enter your message' },
    { id: 4, name: 'Phone', type: 'text', placeholder: 'Enter your phone number' },
    { id: 5, name: 'Address', type: 'text', placeholder: 'Enter your address' },
    { id: 6, name: 'City', type: 'text', placeholder: 'Enter your city' },
    { id: 7, name: 'Country', type: 'text', placeholder: 'Enter your country' },
    { id: 8, name: 'Zip Code', type: 'text', placeholder: 'Enter your zip code' },
    { id: 9, name: 'State', type: 'text', placeholder: 'Enter your state' },
    { id: 10, name: 'Date of Birth', type: 'date', placeholder: 'Enter your date of birth' },
]
export default function ContactUs() {
    return (
        <div className='contact-us'>
            <h1>Contact Us</h1>
            <form>
                {FormsContact.map((form) => {
                    return (
                        <div key={form.id}>
                            <label>{form.name}</label>
                            <input type={form.type} placeholder={form.placeholder} />
                        </div>
                    )
                })}
                <button>Submit</button>
            </form>
        </div>


    );
}
