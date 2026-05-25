import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Container from '../ui/Container'
import { useMemo } from 'react'
import { gsap } from 'gsap'

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

    const onSubmit = async (data, e) => {

        const formData = new FormData(e.target)
        formData.append("form-name", "contact")

        try{
            const response = await fetch("/", {
                method: "POST",
                body: formData
            })

            if(response.ok){
                console.log("Form submitted successfully")
                alert("Message sent successfully!")
                reset()
            }
            else{
                throw new Error("Network response was not ok")
            }
        } catch (error){
            console.error("Error submitting form:", error)
            alert("Failed to send message. Please try again.")
            reset()
        }
        // try {
        //     const result = await emailjs.sendForm(
        //         'service_82h8ey4',
        //         'template_t38oe9z',
        //         e.target,
        //         'oMk9N_E5mIh_Zf6Df'
        //     )
        //     console.log('Email sent successfully:', result.text)
        //     alert('Message sent successfully!')
        //     reset()
        // }
        // catch (error) {
        //     console.error('Error sending email:', error.text || error)
        //     alert('Failed to send message. Please try again.')
        // }


    }

    const messageValue = watch('message', '')
    const wordCount = useMemo(() => {
        return messageValue.trim().split(/\s+/).filter(Boolean).length

    }, [messageValue]);

    const inputBase =
        'w-full rounded-2xl border bg-transparent px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-zinc-500/20'
    const textBase =
        'w-full rounded-2xl border bg-transparent px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-zinc-500/20'
    const fileBase =
        'w-full rounded-2xl border border-dashed bg-transparent px-4 py-3 text-sm transition file:mr-4 file:rounded-lg file:border file:border-zinc-500/30 file:bg-transparent file:px-3 file:py-1.5 file:text-xs file:font-semibold file:uppercase file:tracking-[0.12em]'

    return(
        <section id="contact" className="py-16 sm:py-20">
            <Container>
                <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
                    <div 
                    onMouseEnter={() => gsap.to('#cursor', {scale: 4, duration: 0.1})} 
                    onMouseLeave={() => gsap.to('#cursor', {scale: 1, duration: 0.2})}
                    className="space-y-4 lg:pt-33">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] opacity-60">
                            Contact
                        </p>
                        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            Let's connect and build something meaningful.
                        </h2>
                        <p className="max-w-md text-sm leading-relaxed opacity-70 sm:text-base">
                            Reach out for work opportunities, collaborations, or project
                            inquiries. I will get back with clear next steps.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-zinc-500/20 bg-zinc-500/5 p-6 sm:p-8">
                    <form name= "contact" onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate data-netlify="true">
                        <div className="form-group">
                            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.18em] opacity-60">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className={`${inputBase} ${errors.name ? 'border-red-500' : 'border-zinc-500/30'}`}
                                {...register('name')}
                                placeholder="Your name"
                            />
                            {errors.name && (
                                <span className="text-xs text-red-500">{errors.name.message}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="text-xs font-semibold uppercase tracking-[0.18em] opacity-60">Email</label>
                            <input
                                id="email"
                                type="email"
                                className={`${inputBase} ${errors.email ? 'border-red-500' : 'border-zinc-500/30'}`}
                                {...register('email')}
                                placeholder="you@example.com"
                            />
                            {errors.email && (
                                <span className="text-xs text-red-500">{errors.email.message}</span>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="text-xs font-semibold uppercase tracking-[0.18em] opacity-60">
                                Where did you hear about me?
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {sourcesOptions.map((option) => (
                                    <div key={option.id} className="flex items-center gap-2 rounded-full border border-zinc-500/20 px-3 py-1.5 text-xs font-semibold">
                                        <input
                                            id={option.id}
                                            type="checkbox"
                                            value={option.id}
                                            className="h-4 w-4 accent-current"
                                            {...register('sources')}
                                        />
                                        <label htmlFor={option.id}>{option.label}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.18em] opacity-60">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className={`${textBase} ${errors.message ? 'border-red-500' : 'border-zinc-500/30'}`}
                                {...register('message')}
                                placeholder="Your message"
                            />
                            <div className="flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
                                <span className="text-xs text-red-500">{errors.message?.message}</span>
                                <span
                                    className="text-xs"
                                    style={{ color: wordCount > 200 ? '#ef4444' : 'rgba(128, 128, 128, 0.6)' }}
                                >
                                    {wordCount}/200 words
                                </span>
                            </div>

                            <label htmlFor="attachment" className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] opacity-60">
                                Attachment (Optional)
                            </label>
                            <div>
                                <input
                                    id="attachment"
                                    type="file"
                                    accept="image/*,.pdf"
                                    className={`${fileBase} ${errors.attachment ? 'border-red-500' : 'border-zinc-500/30'}`}
                                    {...register('attachment')}
                                />
                                <span className="mt-2 block text-xs opacity-60">
                                    Max size: 5MB. Accepts: Images & PDFs.
                                </span>
                                {errors.attachment && (
                                    <span className="text-xs text-red-500">{errors.attachment.message}</span>
                                )}
                            </div>
                            
                        </div>
                        <button
                            type="submit"
                            className="inline-flex w-full items-center justify-center rounded-full border border-zinc-500/30  px-6 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 group-data-[theme=dark]:bg-white group-data-[theme=dark]:text-black group-data-[theme=light]:bg-black group-data-[theme=light]:text-white hover:bg-zinc-500/90 hover:cursor-pointer"
                            disabled={!isValid || isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </button>
                    </form> 
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Contact