import * as S from './style';
import message404 from '../img/Message.png';
import cat404 from '../img/empty.png';
import githubLink from '../img/github.png';

const EmtpyPage = () => {
  return (
    <main>
      <S.EmtpyPage_Background>
        <S.EmptyMessage src={message404} alt="Message" />
        <S.Cat404 src={cat404} alt="404Cat" />
      </S.EmtpyPage_Background>

      <S.ShowDevelopersScreen>
        <S.ShowDevelopers>
          <S.DevelopmentPart>Front-End</S.DevelopmentPart>
          <center>
            <S.Developer>이서유</S.Developer>
            <S.Developer>배준수</S.Developer>
          </center>
        </S.ShowDevelopers>

        <S.ShowDevelopers>
          <S.DevelopmentPart>Server</S.DevelopmentPart>
          <center>
            <S.Developer>정대현</S.Developer>
          </center>
        </S.ShowDevelopers>
      </S.ShowDevelopersScreen>

      <S.Footer>
        <S.ShowProjectInfo>
          <S.ProjectName>2021 INFO RollBook</S.ProjectName>
          <div>
            <a
              href="https://github.com/DSM-INFO"
              target="_blank"
              rel="noreferrer"
            >
              <S.GithubIcon src={githubLink} alt="githubLogo" />
            </a>
          </div>
        </S.ShowProjectInfo>
      </S.Footer>
    </main>
  );
};

export default EmtpyPage;
