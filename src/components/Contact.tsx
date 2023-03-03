import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {

    const formRef = useRef<HTMLFormElement>(null);

    const contact_handler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
    }

  return (
    <div id='contact' className="min-h-screen flex  flex-col items-center justify-center">
    <div className="max-w-3xl w-full">
      <div>
        <h1 className='text-4xl font-semibold'>Get in touch.</h1>
        <p className='text-lg'>
            Great ideas are born from collaboration.
        </p>
        <form className='flex flex-col gap-4 mt-4' ref={formRef} onSubmit={contact_handler}>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input className='p-2 rounded-md focus:outline-none' type="text" name="name" id="name" />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input className='p-2 rounded-md focus:outline-none' type="email" name="email" id="email" />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="message">Message</label>
                <textarea className='resize-none p-2 rounded-md focus:outline-none' name="message" id="message" cols={30} rows={10}></textarea>
            </div>
            <button type='submit' className='btn bg-navbar hover:bg-slate-800 text-white'>Send</button>
            <ToastContainer />
        </form>
      </div>
    </div>
  </div>
  )
}