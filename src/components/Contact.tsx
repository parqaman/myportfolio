import { object, string } from 'yup';
import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactSchema = object({
    name: string().required(),
    email: string().email().required(),
    message: string().required(),
});

export const Contact = () => {

    const formRef = useRef<HTMLFormElement>(null);

    const contact_handler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = formRef.current?.elements.namedItem('name') as HTMLInputElement;
        const email = formRef.current?.elements.namedItem('email') as HTMLInputElement;
        const message = formRef.current?.elements.namedItem('message') as HTMLInputElement;
        const data = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        const isValid = await ContactSchema.isValid(data);
        if(isValid) {
            fetch('https://getform.io/f/a67e0906-f905-4e9b-a482-de9bdc7dce08', {
                method: 'POST',
                body: new FormData(e.target as HTMLFormElement)
            }).then(async (res) => {
                if(res.status === 200) {
                    toast('Message sent successfully!', {
                        position: "bottom-center",
                        type: "success",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        theme: "light",
                    });
                    formRef.current?.reset();
                } else {
                    const data = await res.json()
                    toast(data.message, {
                        position: "bottom-center",
                        type: "error",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        theme: "light",
                    });
                }
            })
            formRef.current?.reset();
        } else {
            toast('Please fill all the fields correctly!', {
                position: "bottom-center",
                type: "error",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                theme: "light",
            });
        }

        
        
    }

  return (
    <div id='contact' className="min-h-screen flex  flex-col items-center justify-center">
    <div className="content opacity-0 transition-all duration-700  w-full max-w-3xl">
      <div>
        <h1 className='text-4xl font-semibold'>Get in touch.</h1>
        <p className='text-lg'>
            Great ideas are born from collaboration.
        </p>
        <form className='flex flex-col gap-4 mt-4' ref={formRef} onSubmit={contact_handler}>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input className='p-2 rounded-md focus:outline-none bg-input' type="text" name="name" id="name" />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input className='p-2 rounded-md focus:outline-none bg-input' type="email" name="email" id="email" />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="message">Message</label>
                <textarea className='resize-none p-2 rounded-md focus:outline-none bg-input' name="message" id="message" cols={30} rows={10}></textarea>
            </div>
            <button type='submit' className='btn bg-navbar hover:bg-slate-800 text-white'>Send</button>
        </form>
      </div>
    </div>
    <ToastContainer/>
  </div>
  )
}