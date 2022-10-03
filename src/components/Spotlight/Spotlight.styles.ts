import styled, { CSSObject } from '@emotion/styled';

import { SpotlightProps } from '.';

export const StyledSpotlight = styled.div<
  Pick<SpotlightProps, 'open' | 'transitionDuration'> & {
    top: number;
    left: number;
  }
>`
  position: fixed;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: fit-content;
  height: fit-content;
  background-color: ${({
    theme: {
      palette: { common }
    }
  }) => common.white};

  opacity: 0;
  pointer-events: none;
  transition: opacity ${({ transitionDuration }) => transitionDuration}ms ease;

  ${({ open }): CSSObject =>
    open
      ? {
          opacity: 1,
          pointerEvents: 'visible'
        }
      : {}};
`;