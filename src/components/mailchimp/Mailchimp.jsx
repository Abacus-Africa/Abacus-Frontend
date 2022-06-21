import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from './CustomForm';

const Mailchimp = (props) => {
    
    const REACT_APP_MAILCHIMP_U="4726fd530663a3d12c8c7234b"
    const REACT_APP_MAILCHIMP_ID="a3e7d05ea3"

    const postUrl = `https://gmail.us13.list-manage.com/subscribe/post?u=${REACT_APP_MAILCHIMP_U}&id=${REACT_APP_MAILCHIMP_ID}`;
    // const postUrl = `https://gmail.us13.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div>
        <MailchimpSubscribe url={postUrl}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
        />
    </div>
  )
}

export default Mailchimp