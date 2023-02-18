import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';

const CardForm = props => {
const [title, setTitle] = useState('');
const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: title }, props.columnId);
    setTitle('');
};

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <label>Title:</label> 
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;