import React from 'react';
import { useState } from 'react';


function Form() {

    const [FormData, setFormData] = useState({
        FirstName: "",
         LastName: "", 
         Email: "",
         Comments: "",
         isFriendly: true,
         employment: "",
         favColor: ""
        
        
        }
        );



        function handleSubmit(event){
            event.preventDefault();
            // submitToApi(FormData)
            console.log(FormData)

        }
    // console.log(FormData.favColor)
    function handleChange(event){
        const {name, value, type, checked} = event.target

        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]:type === "checkbox" ? checked : value
            }
        })

        
    }

    return ( 
<form onSubmit={handleSubmit}>
    <input 
    type='text'
    placeholder='FirstName'
    onChange={handleChange}
    name='FirstName'
    value={FormData.FirstName}

     />

     <input
     type='text'
     placeholder='LastName'
     onChange={handleChange}
    name='LastName'
    value={FormData.LastName}

     />

<input
     type='email'
     placeholder='Email'
     onChange={handleChange}
    name='Email'
    value={FormData.Email}

     />  

<textarea
      value={FormData.Comments}
     placeholder='Fill your Comments here'
     onChange={handleChange}
     name='Comments'
   
     />  

    <input 
        type="checkbox" 
        id="isFriendly" 
        checked={FormData.isFriendly}
        onChange={handleChange}
        name= "isFriendly"
            
    />
    <label htmlFor="isFriendly">Are you friendly?</label>
    <br />
    <br />
            
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value ="unemployed"
                    checked={FormData.employment === "unemployed"}
                    onChange={handleChange}
                    
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value= "Part-time"
                    checked={FormData.employment === "Part-time"}
                    onChange={handleChange}
                

                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value= "Full-time"
                    checked={FormData.employment === "Full-time"}
                    onChange={handleChange}
                    
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>
            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={FormData.favColor}
                onChange={handleChange}
                name ="favColor"
                
            >   <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>

            <br />
            <br />
            <button type='submit'>Submit</button>
    
</form>

     );
}

export default Form;