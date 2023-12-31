import { HTMLAttributes, forwardRef, useEffect, useState } from 'react';

import Icon from '@components/Icon';
import Skeleton from '@components/Skeleton';

import { CSSValue, GenericComponentProps, IconName } from '@typings';
import { convertNumberToCSSValue } from '@utils';

import { AvatarWrapper, SkeletonWrapper } from './Avatar.styles';

export interface AvatarProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  src: string;
  alt: string;
  width?: CSSValue;
  height?: CSSValue;
  round?: CSSValue;
  fallback?: {
    name?: IconName;
    width?: CSSValue;
    height?: CSSValue;
  };
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(function Avatar(
  {
    src,
    alt,
    width = 'auto',
    height = 'auto',
    round = '50%',
    fallback = {
      name: 'UserFilled',
      width: 24,
      height: 24
    },
    customStyle,
    ...props
  },
  ref
) {
  const [loaded, setLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);

  const handleLoad = () => setLoaded(true);
  const handleError = () => setLoadFailed(true);

  useEffect(() => {
    setLoaded(false);
    setLoadFailed(false);
  }, [src]);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onerror = () => setLoadFailed(true);
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <AvatarWrapper
      ref={ref}
      round={round}
      {...props}
      style={{
        width: convertNumberToCSSValue(width),
        height: convertNumberToCSSValue(height),
        ...props.style
      }}
      css={customStyle}
    >
      {src && !loadFailed && (
        <img
          width={width}
          height={height}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            visibility: loaded && !loadFailed ? 'visible' : 'hidden'
          }}
        />
      )}
      {src && !loaded && !loadFailed && (
        <SkeletonWrapper>
          <Skeleton width="100%" height="100%" disableAspectRatio />
        </SkeletonWrapper>
      )}
      {(!src || loadFailed) && fallback && (
        <Icon
          name={fallback.name || 'UserFilled'}
          width={fallback.width}
          height={fallback.height}
        />
      )}
    </AvatarWrapper>
  );
});

export default Avatar;
