const Contact = () => {
    return ( 
        <section className="contact">
            <h1 className="title-placeholder hide">Contact</h1>
            <h1 className="section-title">Contact</h1>
            <div className="contact-info">
                <h2 className="name">Phone</h2>
                <p className="phone">+1 (805) 807-9144</p>
            </div>

            <div className="contact-info">
                <h2 className="name">Email</h2>
                <p className="email">rdavisrohlfing@gmail.com</p>
            </div>

            <div className="contact-info">
                <h2 className="name">LinkedIn</h2>
                <a className="linkedin" href="https://www.linkedin.com/in/reedrohlfing/" target="_blank" rel="noreferrer">
                    <p className="linkedin">www.linkedin.com/in/reedrohlfing &#x2197;</p></a>
            </div>
        </section>
     );
}
 
export default Contact;