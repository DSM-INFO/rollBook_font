import { Link } from 'react-router-dom';
import * as S from './style';

const AllGrades = () => {
  return (
    <S.ShowRollPage>
      <S.Wrapper>
        <S.Title>출석현황</S.Title>

        <nav>
          <Link to="/admin/rollShow1">
            <S.GradeDivisionBtn>1학년</S.GradeDivisionBtn>
          </Link>

          <Link to="/admin/rollShow2">
            <S.GradeDivisionBtn>2학년</S.GradeDivisionBtn>
          </Link>

          <Link to="/admin/rollShow3">
            <S.GradeDivisionBtn>3학년</S.GradeDivisionBtn>
          </Link>
        </nav>
      </S.Wrapper>
    </S.ShowRollPage>
  );
};

export default AllGrades;
