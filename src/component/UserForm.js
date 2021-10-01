import { useState } from "react";
import styles from './UserForm.module.css';
import Card from "./Card";
import Button from "./Button"

const UserForm = (props) => {

    const [Name,setName] = useState('')
    const [Age,setAge] = useState('')

    const nameHandler = (event) => {
        setName(event.target.value)
    }
    const ageHandler = (event) => {
        setAge(event.target.value)
    }

    const submitForm = (event) => {
            event.preventDefault()
        if(Name.trim().length === 0 || Age.trim().length === 0){
            return
        }
        
        if (+Age < 1){
            return
        }
        
        const userDetails = {
            name : {Name},
            age : {Age}
        }

        props.usersList(userDetails)

        setName('')
        setAge('')
    }


    return(
        <Card className={styles['input']}>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor='userName'>UserName</label>
                    <input id='userName' type='text' value={Name} onChange={nameHandler}/>
                </div>
                <div>
                    <label htmlFor='userAge'>Age(Years)</label>
                    <input id='userAge' type='number' value={Age} onChange={ageHandler}/>
                </div>
                <div>
                    <Button type='submit'>Add User</Button>
                </div>
            </form>
        </Card>
    )
};

export default UserForm;