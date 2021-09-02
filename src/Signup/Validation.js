const Validation = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = '이름을 입력하세요.';
  } else if (values.name.indexOf(' ') !== -1) {
    errors.name = '공백이 있습니다.';
  }

  if (values.id.length !== 4) {
    errors.id = 'ID 4글자를 입력하세요.';
  } else if (values.id.length > 5) {
    errors.id = '4자 이하로 입력하세요.';
  } else if (values.id.indexOf(' ') !== -1) {
    errors.id = '공백이 있습니다.';
  }

  if (!values.password) {
    errors.password = '비밀 번호를 입력하세요.';
  } else if (values.password.length < 7) {
    errors.password = '8자 이상 입력 하세요.';
  } else if (values.password.indexOf(' ') !== -1) {
    errors.password = '공백이 있습니다.';
  }

  if (!values.grade) {
    errors.grade = '학번을 입력하세요.';
  } else if (values.grade.indexOf(' ') !== -1) {
    errors.grade = '공백이 있습니다.';
  }

  return errors;
};

export default Validation;
