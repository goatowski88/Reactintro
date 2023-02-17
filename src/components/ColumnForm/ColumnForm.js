import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import styles from './ColumnForm.module.scss';

const ColumnForm = props => {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
      e.preventDefault();
      props.action({icon, title: value});
      setValue('');
    };
    const [icon, setIcon] = useState('');


	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title:</span><TextInput value={value} onChange={e => setValue(e.target.value)} />
            <span>Icon:</span><TextInput value={icon} onChange={e => setIcon(e.target.value)}/>
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;