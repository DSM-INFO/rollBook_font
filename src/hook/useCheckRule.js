const useCheckRule = () => {
    const CheckRule = (id, password) => {
        const check_spc = /^[A-Za-z0-9!@#$%^&*]*$/;

        const Allow = !check_spc.test(password) || !check_spc.test(id);

        if (Allow) {
            alert(`error : 특수문자는 사용 하실 수 없습니다`);
        }
        return Allow;
    };
    return { CheckRule };
};
export default useCheckRule;
