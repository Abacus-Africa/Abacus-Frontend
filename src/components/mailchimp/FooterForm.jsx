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
                className="flex flex-row mt-1 rounded-lg bg-white"
            >
            {status === 'sending' && (
                <div>
                </div>
            )}
            {status === 'error' && (
                <div dangerouslySetInnerHTML={{ __html: message }} />
            )}

            {status === 'success' && (
                <div dangerouslySetInnerHTML={{ __html: message }} className='p-2' />
            )}

            {status !== 'success' ? (
                <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input py-2 px-3 rounded-lg outline-none placeholder:text-pblack w-4/6"
                onChange={handleEmailChange}
                placeholder="Enter your email address"
                value={email}
                />
            ) : null}
            
            {status === 'success' ? <button></button> :
                <input
                type="submit"
                value='Be the first to know'
                formValues={[email]}
                className="bg-purple text-pblack p-2 rounded-r-lg w-3/6 text-xs md:text-base md:w-2/6"

                />

            }
          </form>
        </div>
    );
};

export default CustomForm