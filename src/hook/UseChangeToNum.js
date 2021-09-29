export const UseChangeToNum = (detail) => {
  if (detail === '출석') {
    return 1;
  } else if (detail === '조퇴') {
    return 2;
  } else if (detail === '결석') {
    return 3;
  } else if (detail === '병결') {
    return 4;
  } else if (detail === '외출 - 병원') {
    return 5;
  } else if (detail === '외출 - 수리') {
    return 6;
  } else if (detail === '현장체험학습') {
    return 7;
  } else if (detail === '자격증 시험') {
    return 8;
  } else if (detail === '기타') {
    return 9;
  } else {
    return 0;
  }
};
