import React, { useState } from 'react';
import style from './form.module.css';

export default function Form() {

    const [user,setUser]=useState({name:'',email:'',password:''});
    const{name,email,password}=user;

    const fnFieldChange=(e)=>{
        let fieldName=e.target.name;
        if(fieldName==='name'){
            setUser({name:e.target.value,email,password});
        }
        if(fieldName==='email'){
            setUser({name,email:e.target.value,password});
        }
        if(fieldName==='password'){
            setUser({name,email,password:e.target.value});
        }
    }

    const fnSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
    }

  return (
    <div>
        <div>
            <h4>Form exemple</h4>
            <form action='' onSubmit={fnSubmit} >

            <div  className={style.formGroup}>
                <label htmlFor='name'>Full Name</label>
                <input type="text" name="name" required value={name} onChange={fnFieldChange}/>
            </div>

            <div  className={style.formGroup}>
                <label htmlFor='email'>Email</label>
                <input type="email" name="email" required value={email} onChange={fnFieldChange}/>
            </div>
            <div  className={style.formGroup}>
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" required value={password} onChange={fnFieldChange}/>
            </div>

            <div  className={style.formGroup}>
                <button type='submit'>Submit</button>
            </div>

            </form>
           

        </div>

        <div>
            <h1>data transfer from child to parent and parent to child</h1>
            
        </div>
    </div>
  )
}
