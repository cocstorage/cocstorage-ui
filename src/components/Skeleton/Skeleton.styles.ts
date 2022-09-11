import styled, { CSSObject } from '@emotion/styled';

import { parseNumberToCSSValue } from '@utils';

import { CSSValue } from '../../types';

import { SkeletonProps } from '.';

export const SkeletonWrapper = styled.div<Pick<SkeletonProps, 'ratio' | 'round'>>`
  position: relative;
  overflow: hidden;

  ${({ ratio }): CSSObject => {
    let cssObject;
    switch (ratio) {
      case '1:2':
        cssObject = {
          paddingTop: '200%'
        };
        break;
      case '2:1':
        cssObject = {
          paddingTop: '50%'
        };
        break;
      case '4:3':
        cssObject = {
          paddingTop: '75%'
        };
        break;
      case '16:9':
        cssObject = {
          paddingTop: '56.25%'
        };
        break;
      default:
        cssObject = {
          paddingTop: '100%'
        };
        break;
    }
    return cssObject;
  }};

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const SkeletonInner = styled.div<Pick<SkeletonProps, 'round'>>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translate(50%, 50%);

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};
`;

export const StyledSkeleton = styled.div<
  Pick<
    SkeletonProps,
    | 'maxWidth'
    | 'maxHeight'
    | 'minWidth'
    | 'minHeight'
    | 'round'
    | 'disableAspectRatio'
    | 'disableAnimation'
  > & {
    customWidth?: CSSValue;
    customHeight?: CSSValue;
  }
>`
  position: relative;
  overflow: hidden;

  ${({ customWidth }) => (customWidth ? `width: ${parseNumberToCSSValue(customWidth)}` : '')};
  ${({ customHeight }) => (customHeight ? `height: ${parseNumberToCSSValue(customHeight)}` : '')};
  ${({ maxWidth }) => (maxWidth ? `max-width: ${parseNumberToCSSValue(maxWidth)}` : '')};
  ${({ maxHeight }) => (maxHeight ? `max-height: ${parseNumberToCSSValue(maxHeight)}` : '')};
  ${({ minWidth }) => (minWidth ? `min-width: ${parseNumberToCSSValue(minWidth)}` : '')};
  ${({ minHeight }) => (minHeight ? `min-height: ${parseNumberToCSSValue(minHeight)}` : '')};

  background-color: ${({
    theme: {
      palette: { background }
    }
  }) => background.fg1};

  ${({ round }): CSSObject =>
    round
      ? {
          borderRadius: round
        }
      : {}};

  ${({ disableAspectRatio }): CSSObject =>
    !disableAspectRatio
      ? {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: 'translate(-50%, -50%)'
        }
      : {}};
  ${({
    theme: {
      palette: { box }
    },
    disableAnimation
  }) =>
    !disableAnimation
      ? {
          '&:after': {
            content: '""',
            position: 'absolute',
            background: `linear-gradient(
      90deg,
      transparent,
      ${box.filled.normal},
      transparent
    )`,
            animation: 'wave 1.5s infinite linear',
            inset: 0
          }
        }
      : {}};

  @keyframes wave {
    0% {
      transform: translateX(-100%);
    }
    50%,
    100% {
      transform: translateX(200%);
    }
  }
`;
