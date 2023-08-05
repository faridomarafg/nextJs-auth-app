'use client';

import { useRef } from 'react';''

function Form({action,className, ...props}) {
    const formRef = useRef();

    const hadleAction = async(formData)=>{
      await action(formData);
      formRef.current.reset();
    };

  return (
    <form 
    className={className}
    {...props} 
    ref={formRef} 
    action={hadleAction}
    />
  )
}

export default Form