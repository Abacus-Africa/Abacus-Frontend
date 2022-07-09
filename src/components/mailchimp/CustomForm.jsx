import React, { useState, useEffect } from "react";

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');

    console.log(email);
    const handleEmailChange=(e)=>{
        const emailInput = e.target.value.trim();
        setEmail(emailInput);
    }

    const handleSubmit=(e)=>{
        // prevent page from reloading on submit
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({ EMAIL: email });
    }
    
    useEffect(() => {
      if(status === 'success') clearFields();
    }, [status])
    
    const clearFields = () => {
        setEmail('');
    }
    
    return (
        <div>
            <form
                onSubmit={(e)=> handleSubmit(e)}
                className="flex flex-wrap"
            >
            {status === 'sending' && (
                <div>
                </div>
            )}
            {status === 'error' && (
                <div dangerouslySetInnerHTML={{ __html: message }} />
            )}

            {status === 'success' && (
                <div dangerouslySetInnerHTML={{ __html: message }} />
            )}

            {status !== 'success' ? (
                <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input px-4 py-3 rounded-xl border-2 border-black mr-8 w-3/4 md:w-2/4 outline-none"
                onChange={handleEmailChange}
                placeholder="Your Email"
                value={email}
                />
            ) : null}
            
            {status === 'success' ? <button></button> :
                <input
                type="submit"
                value='Notify Me'
                formValues={[email]}
                className="text-white p-2 mt-2 sm:mt-0 rounded-xl notify-btn bg-pblue hover:bg-gradient-to-tr from-pviolet to-pblack"

                />

            }
          </form>
        </div>
    );
};

export default CustomForm