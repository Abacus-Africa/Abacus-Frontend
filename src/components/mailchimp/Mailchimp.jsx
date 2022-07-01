import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from './CustomForm';

const Mailchimp = (props) => {
    
    const REACT_APP_MAILCHIMP_U="bfb7a2ed1074f146913926fdc"
    const REACT_APP_MAILCHIMP_ID="70c5c621e9"

    const postUrl = `https://gmail.us11.list-manage.com/subscribe/post?u=${REACT_APP_MAILCHIMP_U}&id=${REACT_APP_MAILCHIMP_ID}`;
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