import React from 'react';
import { useForm } from '../hooks/useform';

function CreateMessage (){
    const [values, handleChange] = useForm({title: '', content: ''});

    const onSubmit = (e) => {

        e.preventDefault();
        console.log('Form Submitted');
        console.log(`Message Title ${values.title}`);
        console.log(`Message Content: ${values.content}`);

        //empty out form after submission

    }

    return(
        <>
            <h3>Create New Message</h3>
            <form onSubmit={onSubmit}>
                <input type = 'text' name = 'title' value={values.title} onChange={handleChange}/>
                <input type = 'text' name = 'content' value={values.content} onChange={handleChange}/>
                <button type='submit'>Share Message</button>

            </form>
        </>
    )

}

export default CreateMessage;

