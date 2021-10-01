import styles from './AddUser.module.css';
import Card from './Card';

const AddUser = (props) => {
    return(
    <Card className={styles.users}>
        <ul>
            {props.appendUser.map((user) => (
                <li key={user.id}>{user.name} </li>
            ))}
        </ul>
    </Card>
    )
}

export default AddUser;