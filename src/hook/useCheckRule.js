// 허용되지 않은 특수 문자 입력 차단
const useCheckRule = () => {
  const CheckRule = (id, password) => {
    const check_spc = /^[A-Za-z0-9!@#$%^&*]*$/;

    const Allow = !check_spc.test(password) || !check_spc.test(id);

    if (Allow) {
      alert(`error : 사용할 수 없는 특수문자가 포함되어 있습나다`);
    }
    return Allow;
  };
  return { CheckRule };
};
export default useCheckRule;
