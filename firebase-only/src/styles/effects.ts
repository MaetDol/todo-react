const shadows = {
  default: `box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.25);`,
} as const;

const effects = {
  shadows,
} as const;

export type effectsType = typeof effects;
export default effects;
