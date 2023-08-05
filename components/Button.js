'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';//its come from next.org

function Button({value, className , ...props}) {

    const { pending } = useFormStatus();

  return (
    <button className={className} type="buttoon" {...props} disabled={pending}>
        {pending ? 'Loading' : value}
    </button>
  )
}

export default Button