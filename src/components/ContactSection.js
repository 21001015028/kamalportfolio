import styled from 'styled-components';
import React, { useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
    AOS.init({
        duration: 1200,
    })
    const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "", 
	});
	// const EMAIL_JS_SERVICE_ID=process.env.REACT_APP_sid;
	// const EMAIL_JS_TEMPLATE_ID=process.env.REACT_APP_tid;
	// const EMAIL_JS_PUBLIC_KEY=process.env.REACT_APP_pid;
    const EMAIL_JS_SERVICE_ID="service_618v8ah";
    const EMAIL_JS_TEMPLATE_ID="template_6hpl958";
    const EMAIL_JS_PUBLIC_KEY="62npBHRzs--ujlUk_";
    const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		// cleaning the form data
		const username = form.name.trim();
		const user_email = form.email.trim();
		const user_message = form.message.trim();

		if (username === '' || user_email === '' || user_message === '') {
			setLoading(false);
			toast.error("Please fill all the fields.", {
				position: 'bottom-right',
			});
			return;
		}
		// console.log(username,user_email,user_message)
     
		emailjs
			.send(
				EMAIL_JS_SERVICE_ID,
				EMAIL_JS_TEMPLATE_ID,
				{
					from_name: username,
					reply_to: user_email,
					message: user_message,
				},
				EMAIL_JS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					toast.success("Message sent successfully!", {
						position: 'bottom-right',
					});
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					// console.error(error);
					toast.error("Uh, oh! Something went wrong. Please try again later.", {
						position: 'bottom-right',
					});
				}
			);
	};

    return(
        <>
        <div id="contact">
            <H2>Want to connect?</H2>
            <H3>I'm currently looking for Internship opportunites or any Open Source Collaborations, my inbox is always open. <br/>Whether you have a question or would like to collab on a project!</H3>
        </div>
        <div className='relative z-0 bg-transparent w-screen s mt-12'>   
			<div className='text-#dfdfdf contact overflow-x-hidden pt-12 mt-8 ' id='contact'>
				<div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl' >
                    <form
                                    ref={formRef}
                                    onSubmit={handleSubmit}
                                    className='mt-12 flex flex-col gap-8 text-[#dfdede] '
                                >
                                        <label className='flex flex-col'>
                                        <span className='font-medium mb-4'>Your Message</span>
                                        <textarea
                                            rows={7}
                                            name='message'
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder='Do you have anything to say?'
                                            className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-[#010001a4]'
                                            required
                                        />
                                    </label>
                                    <label className='flex flex-col'>
                                        <span className=' font-medium mb-4'>Your Name</span>
                                        <input
                                            type='text'
                                            name='name'
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                            className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-[#010001a4]'
                                            required
                                        />
                                    </label>
                                    <label className='flex flex-col'>
                                        <span className=' font-medium mb-4'>Your email</span>
                                        <input
                                            type='email'
                                            name='email'
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="example@gmail.com"
                                            className='py-4 px-6 rounded-lg  font-medium bg-[#010001a4]'
                                            required
                                        />
                                    </label>
                                

                                    <button
                                        type='submit'
                                        className='p-3 px-8 text-[#9241d5] rounded-xl outline-none w-fit font-bold shadow-md bg-[#130f13a4]'
                                  onclick="sendMail()"  >
                                        {loading ? "Sending..." : "Send"}
                                    </button>
                     </form>
                </div>
                    <ToastContainer />
            </div>
        </div>
    </>
    )
}

const H2 = styled.h2 `
    text-align: center;
    margin-top: 10rem;
    margin-bottom: 2rem;
    font-weight: 900;
    font-size: 2.5rem;
    color: #dfdfdf;
    
@media (max-width: 768px){
        margin-top: 10vh;
        font-size: 5rem;
    }
@media (max-width: 480px){
        margin-top: 10vh;
        font-size: 3.5rem;
    }
`

const H3 = styled.h3 `
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 4rem;
    font-weight: 300;
    color: #dfdfdf;
    
@media (max-width: 768px){
        margin-top: 10vh;
        font-size: 2rem;
    }
@media (max-width: 480px){
        margin-top: 10vh;
        font-size: 1.5rem;
    }
`

export default ContactSection;
