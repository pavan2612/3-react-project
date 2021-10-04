import ReactDom from 'react-dom';
import Button from './Button';
import styles from './ErrorModal.module.css'
import Card from './Card';
import React from 'react';
import reactDom from 'react-dom';

const BackDrop = (props) => {
    return <div className = {styles.backdrop} onClick={props.cancel}></div>
}

const Layoff = (props) => {
    return (
        <Card className = {styles.modal}>
        <header className = {styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className= {styles.actions}>
            <Button onClick={props.cancel}>Ok</Button>
        </footer>
    </Card>
    )
}


const ErrorModal = (props) => {
    return(
        <React.Fragment>
            {ReactDom.createPortal(<BackDrop cancel={props.cancel}/>,document.getElementById('backDrop'))}
            {reactDom.createPortal(<Layoff title={props.title} message={props.message} cancel={props.cancel}/>,document.getElementById('overLay'))}
        </React.Fragment>
    )
}

export default ErrorModal; 