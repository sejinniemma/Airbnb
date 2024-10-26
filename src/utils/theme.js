import { createTheme } from '@mui/material';

const theme = createTheme({
  primary: {
    main: '#FF5A5F', // Airbnb의 기본 브랜드 색상
    light: '#FF7A7D', // 더 밝은 색상
    dark: '#C51C23', // 어두운 버전
  },
  secondary: {
    main: '#00A699', // 보조 색상
    light: '#33B2A2', // 더 밝은 보조 색상
    dark: '#007B74', // 어두운 보조 색상
  },
  text: {
    primary: '#383838', // 주요 텍스트 색상
    secondary: '#737373', // 보조 텍스트 색상
    disabled: '#B0B0B0', // 비활성화된 텍스트 색상
  },
  background: {
    default: '#F7F7F7', // 기본 배경 색상
    paper: '#FFFFFF', // 카드 및 종이 배경 색상
  },
  typography: {
    useNextVariant: false,
    h1: {
      fontFamily: 'Pretendard',
      fontSize: 45,
      letterSpacing: -1.58,
      userSelect: 'none',
    },
    h2: {
      fontFamily: 'Pretendard',
      fontSize: 40,
      letterSpacing: -1.4,
      userSelect: 'none',
    },
    h3: {
      fontFamily: 'Pretendard',
      fontSize: 30,
      letterSpacing: -1.23,
      fontWeight: 500,
      userSelect: 'none',
    },
    h4: {
      fontFamily: 'Pretendard',
      fontSize: 25,
      letterSpacing: -0.88,
      fontWeight: 300,
      userSelect: 'none',
    },
    h5: {
      fontFamily: 'Pretendard',
      fontSize: 22,
      letterSpacing: -0.77,
      userSelect: 'none',
    },
  },
});

export default theme;
