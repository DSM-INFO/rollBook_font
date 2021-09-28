import * as S from './style';

const UserStatus = ({ data }) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.grade}</p>
    </div>
  );
};
export default UserStatus;
