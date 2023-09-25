import './Contact.css';

const Contact=(props)=>{
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
          name: event.target.name.value,
          email: event.target.email.value,
          phone: event.target.phone.value,
        };
        props.onSubmit(formData);
      };
    return(
        <>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="name" />
            <label htmlFor="email">Email-ID</label>
            <input id="email" type="email" />
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default Contact;