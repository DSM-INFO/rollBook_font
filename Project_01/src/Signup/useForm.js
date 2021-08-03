import {useEffect, useState} from 'react';
import Validation from './Validation';

const useForm = (submitForm) =>{

    const [values, setValues] = useState({
        Name:"",
        ID:"",
        Grade:"",
    });
    
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    
    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name] : event.target.value,
        });
    };
    
    const handleFromSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        setDataIsCorrect(true);
    };
    
    useEffect( () => {
        if(Object.keys(errors).length === 0 &&dataIsCorrect){
            submitForm(true)
        }
    }, [errors]);
    
    return {handleChange, handleFromSubmit, errors, values};
}

export default useForm;