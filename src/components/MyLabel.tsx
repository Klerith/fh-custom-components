import './MyLabel.css';

export interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  
  /**
   * Capitalize all letters
   */
  allCaps?: boolean;

  /**
   * Label color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
   * Font color
   */
  fontColor?: string;
}



export const MyLabel = ({
  label,
  size = 'normal',
  allCaps = false,
  color,
  fontColor,
}: Props) => {
  return (
    <span className={`${ size } ${ color } label`}
      style={{ color: fontColor }}
    >
      { allCaps ? label.toUpperCase() : label }
    </span>
  )
}

