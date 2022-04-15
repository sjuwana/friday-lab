 import React, { useRef }  from 'react';
 import '../styles/Email.css'
 import emailjs from 'emailjs-com';


 
 const Email = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_h95tao4', 'template_2dgd6oc', form.current, 'Pc26NPrGXuw0DVuT3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

     return (
         <div className='contact-form'>
             <form ref={form} onSubmit={sendEmail}>
                 <label htmlFor="Name">Name</label>
                 <input type="text" placeholder='Your Name' name='name'/>
                 <label htmlFor="Email">Email Address</label>
                 <input type="text" placeholder='Your Email' name='user_email'/>
                 <label htmlFor="Name">Subject</label>
                 <input type="text" placeholder='Subject' name='subject'/>
                 <label htmlFor="Name">Message</label>
                 <textarea name="message" id="" cols="20" rows="10" placeholder='write something...'></textarea>
                 <input type="submit" />
             </form>
     
         </div>
     );
 };
 
 export default Email;