import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import "./Contact.css"

const MAX_FILE_SIZE = 5 * 1024 * 1024 
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf']

const contactSchema = z.object({
    name: z.string()
        .min(2, 'Name must be at least 2 characters.')
        .regex(/^[A-Za-z ]+$/, 'Name can only contain letters and spaces.'),
    email: z.string().email('Enter a valid email address.'),
    message: z.string().min(10, 'Message must be at least 10 characters.')
    .refine((val) => {
        const wordCount = val.trim().split(/\s+/).filter(Boolean).length
        return wordCount <= 200
        
    }, {
        message: 'Message must be at most 200 words.'
    }),
    sources: z.array(z.string()).optional(),
    attachment: z.any().optional()
    .refine((files) => !files || files.length === 0 || files[0].size <= MAX_FILE_SIZE, {
        message: 'File size must be less than 5MB.'
    })
    .refine((files) => !files || files.length === 0 || ACCEPTED_FILE_TYPES.includes(files[0].type), {
        message: 'Only JPEG, PNG, GIF images or PDFs are accepted.'
    })
})

const sourcesOptions = [
    {id: 'linkedin', label: 'LinkedIn'},
    {id: 'twitter', label: 'Twitter'},
    {id: 'github', label: 'GitHub'},
    {id: 'other', label: 'Other'}
]

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isSubmitting, isValid }
    } = useForm({
        resolver: zodResolver(contactSchema),
        mode: 'onTouched',
        defaultValues:{
            name: '',
            email: '',
            message: '',
            sources: [],
            attachment: undefined
        }
    })

    const onSubmit = (data) => {
        console.log(data)
        reset()
    }

    const messageValue = watch('message', '')

    const wordCount = messageValue.trim().split(/\s+/).filter(Boolean).length

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
                        <label>Email</label>
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
                        <label>Where did you hear about me?</label>
                        <div className="sources-options">
                            {sourcesOptions.map((option) => (
                                <div key={option.id} className="source-option">
                                    <input
                                        id={option.id}
                                        type="checkbox"
                                        value={option.id}
                                        {...register('sources')}
                                    />
                                    <label htmlFor={option.id}>{option.label}</label>
                                </div>
                            ))}
                        </div>
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
                        <div className='form-footer'>
                            <span className="form-error">{errors.message?.message}</span>
                            <span className="word-count" style={{ color: wordCount > 200 ? '#ef4444' : 'rgba(128, 128, 128, 0.6)' }}>
                                {wordCount}/200 words
                            </span>
                        </div>

                        <label htmlFor="attachment">Attachment (Optional)</label>
                        <div>
                            <input
                                id="attachment"
                                type="file"
                                accept="image/*,.pdf"
                                className={errors.attachment ? 'input-error' : ''}
                                {...register('attachment')}
                            />
                            <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                                Max size: 5MB. Accepts: Images & PDFs.
                            </span>
                            {errors.attachment && (
                                <span className="form-error">{errors.attachment.message}</span>
                            )}
                        </div>
                        
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