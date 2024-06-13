import React from 'react'
import { checkOtp } from '../../services/auth';
import { setCookie } from '../../utils/cookie';

function CheckOtpForm({ code, setCode, mobile, setStep }) {
    const submitHandler = async (event) => {
        event.preventDefault();
        
        if(code.length !== 5) return;

        const {response, error} = await checkOtp(mobile, code);

        if(response) {
            setCookie(response.data)
            console.log(response.data)
        }

        if(error) console.log(error.response.data.message)

    }
  return (
    <form onSubmit={submitHandler}>
        <p>کد تأیید را وارد کنید</p>
        <span>
        کد پیامک‌شده به شمارۀ «{mobile}» را وارد کنید.
        </span>
        <input 
            type="text" 
            id="input"
            placeholder="کد تایید"
            value={code}
            onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit">ورود</button>
        <button onClick={() => setStep(1)}>تغیر شماره موبایل</button>
    </form>
  )
}

export default CheckOtpForm