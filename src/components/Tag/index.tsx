import React, { memo, ReactElement, HTMLAttributes, RefObject } from 'react';
import useTheme from '@theme/useTheme';

import { GenericComponentProps } from '../../types';
import { StyledTag } from './Tag.styles';

export interface TagProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  ref?: RefObject<HTMLDivElement>;
  variant?: 'semiAccent' | 'text' | 'transparent';
  text: string;
  startIcon?: ReactElement;
  iconOnly?: boolean;
}

function Tag({
  ref,
  variant = 'text',
  text,
  startIcon,
  iconOnly,
  customStyle,
  ...props
}: TagProps) {
  const { theme } = useTheme();

  return (
    <StyledTag ref={ref} theme={theme} variant={variant} css={customStyle} {...props}>
      {startIcon && startIcon}
      {!iconOnly && text}
    </StyledTag>
  );
}

export default memo(Tag);