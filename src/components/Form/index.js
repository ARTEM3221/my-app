import { useState } from 'react';
import PropTypes from 'prop-types';

import { Row, Input, Button, Comment } from './styles';

const Form = (props) => {

    const [form, setForm] = useState({
            value: '',
            date: new Date().toISOString().substring(0, 10),
            comment: ''
    })
    

    const onSubmit = (e) => {
        e.preventDefault();
        props.onChange(form);
        setForm({
            ...form,
            value: '',
            comment: ''
        })
    }

    const onChange = (e) => {
        const {value, name} = e.target;

    setForm({
        ...form,
       [name]: value
    })
}
    

        return (
        <form onSubmit={onSubmit}>
            <Row>
                <Input name="date" type="date"
                    value={form.date}
                    onChange={onChange}/>

                <Input name="value" type="number" placeholder="Sum"
                    value={form.value}
                     onChange={onChange}/>
            </Row>

            <Row>
                <Button>Save</Button>
                <Comment name="comment" 
                     value={form.comment} 
                     onChange={onChange}/>
            </Row>
        </form>
                )   
            }
        

Form.propTypes = {
    onChange: PropTypes.func
};

export default Form;