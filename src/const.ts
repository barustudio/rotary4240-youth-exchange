export const ProgramCode = {
  RYE_LTEP: 'RYE-LTEP',
  RYE_STEP: 'RYE-STEP',
  RYE_CAMP: 'RYE-CAMP',
  NGSE: 'NGSE',
} as const;

export type ProgramCode = (typeof ProgramCode)[keyof typeof ProgramCode];

export const ProgramTitle = {
  [ProgramCode.RYE_LTEP]: 'Año escolar',
  [ProgramCode.RYE_STEP]: 'Vacaciones',
  [ProgramCode.RYE_CAMP]: 'Campamentos',
  [ProgramCode.NGSE]: 'Pasantía',
} as const;

export type ProgramTitle = (typeof ProgramTitle)[keyof typeof ProgramTitle];