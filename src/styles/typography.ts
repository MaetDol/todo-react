const family = `font-family: 'Noto Sans KR', sans-serif;`;
const weightNormal = `font-weight: 400;`;
const weightBold = `font-weight: 700;`;
const size = (rem: number) => `font-size: ${rem}rem;`;
const lineHeight = (rem: number) => `line-height: ${rem}rem;`;
const letterSpacing = (rem: number) => `letter-spacing: ${rem}rem;`;

const typography = {
  title: [family, weightNormal, size(3), lineHeight(4), letterSpacing(0.1)],
  title2: [
    family,
    weightNormal,
    size(2.4),
    lineHeight(3.2),
    letterSpacing(0.05),
  ],
  title3: [family, weightNormal, size(1.9), lineHeight(2.7)],
  body: [family, weightNormal, size(1.5), lineHeight(2.4)],
  emphasize: [
    family,
    weightBold,
    size(1.5),
    lineHeight(2.4),
    letterSpacing(0.05),
  ],
  subtitle: [family, weightNormal, size(1.2), lineHeight(2)],
  comment: [family, weightNormal, size(1), lineHeight(1.8)],
};

export default typography;
