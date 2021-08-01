const Validation = (values) => {
    let errors = {};

    if (!values.fullname){
        errors.fullname = "이름을 입력하세요"
    }

    if (!values.ID){
        errors.ID = "ID를 입력하세요."
    }

    if (!values.Grade){
        errors.Grade = "학년을 입력하세요."
    }

    if (!values.PassWord){
        errors.PassWord = "비밀 번호를 입력하세요."
    } else if (values.PassWord.lenght < 8){
        errors.PassWord = "8자 이상 입력 하세오."
    }

    return errors;
};

export default Validation
