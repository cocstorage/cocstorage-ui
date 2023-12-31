import { HTMLAttributes, useEffect, useState } from 'react';

import Icon from '@components/Icon';
import Skeleton from '@components/Skeleton';

import { CSSValue, GenericComponentProps, IconName } from '@typings';
import { convertNumberToCSSValue } from '@utils';

import {
  FallbackBox,
  FallbackWrapper,
  ImageWrapper,
  Img,
  RatioImageBox,
  RatioImageInner,
  RatioImageWrapper,
  RatioImg,
  SkeletonWrapper
} from './Image.styles';

export interface ImageProps extends GenericComponentProps<HTMLAttributes<HTMLDivElement>> {
  src: string;
  alt: string;
  width?: CSSValue;
  height?: CSSValue;
  ratio?: `${number}:${number}`;
  round?: CSSValue;
  disableResponsive?: boolean;
  disableBackgroundColor?: boolean;
  disableAspectRatio?: boolean;
  fallback?: {
    name?: IconName;
    width?: CSSValue;
    height?: CSSValue;
  };
}

function Image({
  src,
  alt,
  width = 'auto',
  height = 'auto',
  ratio = '1:1',
  round = 6,
  disableResponsive,
  disableBackgroundColor,
  disableAspectRatio,
  fallback = {
    name: 'ImageOutlined',
    width: 24,
    height: 24
  },
  customStyle,
  ...props
}: ImageProps) {
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

  if (disableAspectRatio) {
    if ((!src || loadFailed) && fallback) {
      return (
        <FallbackBox
          round={round}
          disableResponsive={disableResponsive}
          disableBackgroundColor={disableBackgroundColor}
          style={
            disableResponsive
              ? {
                  width: convertNumberToCSSValue(width),
                  height: convertNumberToCSSValue(height)
                }
              : {
                  width: '100%',
                  height: '100%',
                  maxWidth: convertNumberToCSSValue(width),
                  maxHeight: convertNumberToCSSValue(height),
                  minHeight: convertNumberToCSSValue(height)
                }
          }
        >
          <Icon
            name={fallback.name || 'ImageOutlined'}
            width={fallback.width}
            height={fallback.height}
          />
        </FallbackBox>
      );
    }

    return (
      <ImageWrapper
        round={round}
        disableResponsive={disableResponsive}
        disableBackgroundColor={disableBackgroundColor}
        {...props}
        style={
          disableResponsive
            ? {
                width: convertNumberToCSSValue(width),
                height: convertNumberToCSSValue(height),
                ...props.style
              }
            : {
                width: '100%',
                height: '100%',
                maxWidth: convertNumberToCSSValue(width),
                maxHeight: convertNumberToCSSValue(height),
                ...props.style
              }
        }
        css={customStyle}
      >
        {src && !loadFailed && (
          <Img
            width={width}
            height={height}
            src={src}
            alt={alt}
            loaded={loaded}
            loadFailed={loadFailed}
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
        {src && !loaded && !loadFailed && (
          <SkeletonWrapper
            style={{
              width: width ? convertNumberToCSSValue(width) : '100%',
              height: height ? convertNumberToCSSValue(height) : '100%'
            }}
          >
            <Skeleton width={width} height={height} disableAspectRatio />
          </SkeletonWrapper>
        )}
      </ImageWrapper>
    );
  }

  return (
    <RatioImageBox dataWidth={width} dataHeight={height} round={round} {...props} css={customStyle}>
      <RatioImageWrapper ratio={ratio} disableBackgroundColor={disableBackgroundColor}>
        <RatioImageInner>
          {src && loaded && !loadFailed && <RatioImg src={src} alt={alt} />}
          {src && !loaded && !loadFailed && (
            <SkeletonWrapper
              style={{
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Skeleton width="100%" height="100%" disableAspectRatio />
            </SkeletonWrapper>
          )}
          {(!src || loadFailed) && fallback && (
            <FallbackWrapper>
              <Icon
                name={fallback.name || 'ImageOutlined'}
                width={fallback.width}
                height={fallback.height}
              />
            </FallbackWrapper>
          )}
        </RatioImageInner>
      </RatioImageWrapper>
    </RatioImageBox>
  );
}

export default Image;
