// Check if this work with tailwind purgecss

export const SideType = {
  T: 't',
  R: 'r',
  B: 'b',
  L: 'l',
  TL: 'tl',
  TR: 'tr',
  BR: 'br',
  BL: 'bl',
}

export type SideType = typeof SideType[keyof typeof SideType]

export const RoundedType = {
  NONE: 'none',
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  FULL: 'full',
} as const

export type RoundedType = typeof RoundedType[keyof typeof RoundedType]

export default (round: RoundedType, side?: SideType): string => {
  let o = 'rounded'

  if (side) o += `-${side}`

  const roundedMapping = {
    [RoundedType.NONE]: 'none',
    [RoundedType.TINY]: 'sm',
    [RoundedType.SMALL]: '',
    [RoundedType.MEDIUM]: 'md',
    [RoundedType.LARGE]: 'lg',
    [RoundedType.FULL]: 'full',
  }

  if (roundedMapping[round]) o += `-${roundedMapping[round]}`

  return o
}
