import React from 'react'
import { sendOtp } from '../../services/auth';

function SendOtpForm({ setStep, mobile, setMobile }) {
    const submitHandler = async (event) => {
        event.preventDefault();
        
        if(mobile.length !== 11) return;

        const { response, error} = await sendOtp(mobile);

        if(response) setStep(2);
        if(error) console.log(error.response.data.message);
        console.log({response, error})
    }
  return (
    <form onSubmit={submitHandler}>
        <p>ورود به حساب کاربری</p>
        <span>قبل از ثبت آگهی، لطفاً وارد حساب خود شوید.
            کد تأیید به این شماره پیامک می‌شود.
        </span>
        <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
        <input
         type="text"   
         id="input" 
         placeholder="شماره موبایل" 
         value={mobile} 
         onChange={(e) => setMobile(e.target.value)}
        />
        <button type="submit">تایید</button>
    </form>
  )
}

export default SendOtpForm