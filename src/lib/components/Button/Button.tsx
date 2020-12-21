import React, { useContext } from 'react'
import cx from 'classnames'
import { ThemeContext } from '../../context/ThemeContext'
import { RoundedType } from '../../utils/borderRadius'

export const PriorityType = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const

export type PriorityType = typeof PriorityType[keyof typeof PriorityType]

export const SizeType = {
  XSMALL: 'xsmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
} as const

export type SizeType = typeof SizeType[keyof typeof SizeType]

export const SkinType = {
  GENERAL: 'general',
  BRAND: 'brand',
  INVERTED: 'inverted',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
  URGENT: 'urgent',
  NEUTRAL_ERROR: 'neutralError',
  NEUTRAL_WARNING: 'neutralWarning',
  NEUTRAL_INFO: 'neutralInfo',
  NEUTRAL_SUCCESS: 'neutralSuccess',
  NEUTRAL_URGENT: 'neutralUrgent',
  LIGHT: 'light',
  DARK: 'dark',
  TRANSPARENT: 'transparent',
}

export type SkinType = typeof SkinType[keyof typeof SkinType]

export interface Props {
  children?: React.ReactNode;
  /**
   * Additional classes
   */
  className?: string,
  /**
   * Priority of Button content
   */
  priority?: PriorityType;
  /**
   * Skins of Button content
   */
  skin?: SkinType;
  /**
   * Rounded corners for Button content
   */
  rounded?: RoundedType;
  /**
  * Remove all styles from button
  */
  unStyled?: boolean;
  /**
  * Applies disabled styles
  */
  disabled?: boolean;
  /**
   * Size of Button content
   */
  size?: SizeType;
  /**
   * render as some other component or DOM tag
   */
  tag?: React.ElementType;
}

export interface ButtonAsAnchorProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export interface ButtonAsButtonProps extends Props, React.ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ButtonAsSpanProps extends Props, React.ButtonHTMLAttributes<HTMLSpanElement> {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ButtonAsComponentProp extends Props, React.ComponentProps<any> {}

export type ButtonProps = Props | ButtonAsAnchorProps | ButtonAsButtonProps | ButtonAsSpanProps | ButtonAsComponentProp;

type RefType = React.ElementType;

const Button = React.forwardRef<RefType, ButtonProps>(({
  className = '',
  children,
  priority = 'primary',
  skin = 'error',
  size = 'medium',
  rounded = 'medium',
  unStyled = false,
  disabled = false,
  tag: Tag = 'button',
  ...otherProps
}, ref) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { theme: { button } } = useContext(ThemeContext)

  const props = {
    className: cx(className),
    ref,
    ...otherProps,
  }
  
  console.log(button)

  return <Tag {...props}>{ children }</Tag>
})
Button.displayName = 'Button'

export default Button
