import infoLogo from '../img/infoIcon.png';
import * as S from './style';

const MainScreen = () => {
  return (
    <S.MainPage>
      <article>
        <S.Section>
          <S.MainLogo src={infoLogo} alt="infoLogo" />
        </S.Section>
        <S.Section>
          <S.MainText>Attendance Check System</S.MainText>
        </S.Section>
      </article>
    </S.MainPage>
  );
};

export default MainScreen;
