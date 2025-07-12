import ContactForm from '../components/ContactForm'

const ContactUs = () => {
    return (
        <div className="contact-content">
            <div className="container library-header pt-5 bg-white">
                <h1 className="fw-bold" style={{ fontSize: '3rem' }}>
                    Liên hệ
                </h1>
                <p class="leading-5 text-gray3 mb-0 mt-1 fs-5">Nếu có thắc mắc hãy gửi câu hỏi đến chúng tôi để được hỗ trợ sớm nhất.</p>
            </div>
            <div className="contact-form py-5">
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactUs