import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import "./Contact.css"

const contactSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters.')
        .regex(/^[A-Za-z ]+$/, 'Name can only contain letters and spaces.'),
    email: z.string().email('Enter a valid email address.'),
    message: z.string().min(10, 'Message must be at least 10 characters.')
})

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting, isValid }
    } = useForm({
        resolver: zodResolver(contactSchema),
        mode: 'onTouched'
    })

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    return(
        <section id="contact" className='contact-section'>
            <h2 className='contact-title'>Contact</h2>
            <p className='contact-subtitle'>Get in touch!</p>

            <div className="contact-card">
                <form onSubmit={handleSubmit(onSubmit)} className='contact-form' noValidate>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            className={errors.name ? 'input-error' : ''}
                            {...register('name')}
                            placeholder="Your name"
                        />
                        {errors.name && (
                            <span className="form-error">{errors.name.message}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            className={errors.email ? 'input-error' : ''}
                            {...register('email')}
                            placeholder="you@example.com"
                        />
                        {errors.email && (
                            <span className="form-error">{errors.email.message}</span>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            className={errors.message ? 'input-error' : ''}
                            {...register('message')}
                            placeholder="Tell me about your project"
                        />
                        {errors.message && (
                            <span className="form-error">{errors.message.message}</span>
                        )}
                    </div>
                    <button type="submit" className='submit-btn' disabled={!isValid || isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                </form> 
            </div>
        </section>
    )
}

export default Contact