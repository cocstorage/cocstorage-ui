import { HTMLAttributes, PropsWithChildren, ReactElement, forwardRef } from 'react';

import { BrandColor, GenericComponentProps, Variant } from '@typings';

import { StyledTag } from './Tag.styles';

export interface TagProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  variant?: Variant;
  color?: BrandColor;
  startIcon?: ReactElement;
  iconOnly?: boolean;
}

const Tag = forwardRef<HTMLDivElement, PropsWithChildren<TagProps>>(function Tag(
  { color = 'text', children, startIcon, iconOnly, customStyle, ...props },
  ref
) {
  return (
    <StyledTag ref={ref} tagColor={color} {...props} css={customStyle}>
      {startIcon && startIcon}
      {!iconOnly && children}
    </StyledTag>
  );
});

export default Tag;
