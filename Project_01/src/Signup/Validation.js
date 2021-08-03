const Validation = (values) => {
    let errors = {};

    if (!values.Name){
        errors.Name = "이름을 입력하세요."
    } 

    if (values.Name.indexOf(" ") != -1) {
        errors.Name = "공백이 있습니다."    
    }

    if (!values.ID){
        errors.ID = "ID를 입력하세요."
    } 
    
    if (values.ID.indexOf(" ") != -1) {
        errors.ID = "공백이 있습니다."    
    }

    if (!values.Password){
        errors.Password = "비밀 번호를 입력하세요."
    } 

    else if (values.Password.length < 7){
        errors.Password = "8자 이상 입력 하세요."
    }

    if (values.Password.indexOf(" ") != -1) {
        errors.Password = "공백이 있습니다."    
    }

    

    return errors;
};

export default Validation;