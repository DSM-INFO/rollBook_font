import * as S from './style';

const UserStatus = ({ data }) => {
  return (
    <S.Status>
      <S.Inline>
        <span>이름 :&nbsp;</span>
        <p>{data.name}</p>
      </S.Inline>
      <S.Inline>
        <span>상태 :&nbsp;</span>
        <p>{data.grade}</p>
      </S.Inline>
    </S.Status>
  );
};
export default UserStatus;
