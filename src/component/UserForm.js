import { useState,useRef } from "react";
import styles from './UserForm.module.css';
import Card from "./Card";
import Button from "./Button"
import ErrorModal from "./ErrorModal";

const UserForm = (props) => {

    const nameInputRef = useRef()
    const ageInputRef = useRef()

//    const [Name,setName] = useState('')
//    const [Age,setAge] = useState('')
    const [Error,setError] = useState()

//   const nameHandler = (event) => {
//        setName(event.target.value)
//    }
//    const ageHandler = (event) => {
//        setAge(event.target.value)
//    }

    const submitForm = (event) => {
        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value
            event.preventDefault()
        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title:'Invalid input',
                message:'Please enter the valid name and age',
            })
            return
        }
        
        if (+enteredAge < 2){
            setError({
                title:'Invalid age',
                message:'Please enter the age > 1',
            })
            return
        }
        
        const userDetails = {
            name : enteredName,
            age : enteredAge
        }
        props.usersList(userDetails)

        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    const onCancel = () => {
            setError(false)
        }

    return(
    <div>
        {Error && <ErrorModal title={Error.title} message = {Error.message}  cancel={onCancel}/>}
        <Card className={styles.input}>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor='userName'>UserName</label>
                    <input id='userName' 
                    type='text'
                    ref = {nameInputRef}
     //                value={Name} 
     //                onChange={nameHandler}
                    />
                </div>
                <div>
                    <label htmlFor='userAge'>Age(Years)</label>
                    <input id='userAge' 
                    type='number' 
                    ref = {ageInputRef}
     //               value={Age} 
     //               onChange={ageHandler}
                    />
                </div>
                <div>
                    <Button type='submit'>Add User</Button>
                </div>
            </form>
        </Card>
    </div>
    )
};

export default UserForm;