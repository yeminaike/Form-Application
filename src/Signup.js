import React, { useState } from 'react';



function SignUp() {
    const [signUpData, setSignUPData] = useState({

        EmailAddress: "",
        Password: "",
        ConfirmPassword: "",
        joinedNewsLetter: "true",
    })

    function handleSubmit(e){
        e.preventDefault();
        if(signUpData.Password === signUpData.ConfirmPassword){
            console.log("Successful")
        }else{
            console.log("passwords do not match")
            return
        }

        if(signUpData.joinedNewsLetter){
            console.log("Thanks for Signing up for our news letter")
        }
        }

    

    function handleChange(event){
const {name, value, type, checked} = event.target

        setSignUPData(prevSignUpData => {
            return{
                ...prevSignUpData,
                [name]: type === 'checkbox' ? checked: value

                
            }
            
            
            
        })
    }
    

    return ( 
        <div className="form-container">
    <form className='form' onSubmit={handleSubmit}>
<input 
    type='EmailAddress'
    placeholder='EmailAddress'
    onChange={handleChange}
    name='EmailAddress'
    className='form--input'
    value={signUpData.EmailAddress}
/>

<input
type='Password'
placeholder='Password'
onChange={handleChange}
name='Password'
value={signUpData.Password}
className='form--input'
/>

<input
type='password'
placeholder='Confirm Password'
onChange={handleChange}
name='ConfirmPassword'
value={signUpData.ConfirmPassword}
className='form--input'
/>


<input 
type='checkbox'
id='okayToEmail'
checked={signUpData.joinedNewsLetter}
onChange={handleChange}
name='joinedNewsLetter'
/>

<label htmlFor='okayToEmail'>I want to join the NewsLetter</label>
<br/>
<br/>

<button className='form--submit'>SignUp</button>

</form>
</div>
       
     );
    }
    


export default SignUp;