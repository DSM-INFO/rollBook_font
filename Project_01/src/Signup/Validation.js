const Validation = (values) => {
    let errors = {};

    if (!values.Name){
        errors.Name = "이름을 입력하세요."
    } else if(!values.Name.blank){
        errors.Name = "공백없이 입력하세요."
    }

    if (!values.ID){
        errors.ID = "ID를 입력하세요."
    } else if(!values.ID.blank){
        errors.ID = "공백없이 입력하세요."
    }
    
    if (!values.PassWord){
        errors.PassWord = "비밀 번호를 입력하세요."
    } else if (values.PassWord.lenght < 7){
        errors.PassWord = "8자 이상 입력 하세요."
    } else if(!values.PassWord.blank){
        errors.PassWord = "공백없이 입력하세요."
    }

    return errors;
};

export default Validation;