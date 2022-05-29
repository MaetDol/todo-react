const colorSet = {
  gray90: '#283345',
  gray80: '#303D53',
  gray70: '#384861',
  gray60: '#4A6082',
  gray50: '#5D77A2',
  gray40: '#7D93B5',
  gray30: '#9EAEC7',
  gray20: '#BEC9DA',
  gray10: '#DFE4EC',

  blue90: '#113369',
  blue80: '#17448C',
  blue70: '#1D55AF',
  blue60: '#2266D3',
  blue50: '#3F7DE0',
  blue40: '#5A8FE4',
  blue30: '#75A1E9',
  blue20: '#91B4ED',
  blue10: '#BAD0F4',

  green90: '#008952',
  green80: '#00AB67',
  green70: '#00CD7B',
  green60: '#00F090',
  green50: '#35FFAE',
  green40: '#7AFFCA',
  green30: '#9CFFD7',
  green20: '#BEFFE5',
  green10: '#DEFFF2',

  red90: '#7B0E1B',
  red80: '#A41324',
  red70: '#CD182D',
  red60: '#E62D43',
  red50: '#EB5567',
  red40: '#EE6E7D',
  red30: '#F18693',
  red20: '#F49EA8',
  red10: '#F7B7BE',
} as const;

const named = {
  background: colorSet.gray80,
  'text-primary': colorSet.gray90,
} as const;

const colors = {
  ...colorSet,
  ...named,
} as const;

export type colorsType = typeof colors;
export default colors;
