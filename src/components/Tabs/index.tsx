import {
  HTMLAttributes,
  MouseEvent,
  PropsWithChildren,
  forwardRef,
  useEffect,
  useRef
} from 'react';

import useTheme from '@theme/hooks/useTheme';

import { GenericComponentProps, ThemeMode } from '@typings';

import { StyledTabs, TabsInner } from './Tabs.styles';

export interface TabsProps
  extends GenericComponentProps<Omit<HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'>> {
  centered?: boolean;
  onChange: (value: number | string) => void;
  value: number | string;
  fullWidth?: boolean;
  hideLine?: boolean;
}

const Tabs = forwardRef<HTMLDivElement, PropsWithChildren<TabsProps>>(function Tabs(
  { children, centered = false, onChange, value, customStyle, ...props },
  ref
) {
  const { theme } = useTheme();

  const tabsInnerRef = useRef<HTMLDivElement>(null);
  const prevValueRef = useRef<number | string>(0);
  const prevThemeType = useRef<ThemeMode | null>(null);
  const isMountedRef = useRef(false);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const dataValue = (event.target as Element).getAttribute('data-value');

    if (!dataValue) return;

    if (!Number.isNaN(Number(dataValue))) {
      onChange(Number(dataValue));
    } else {
      onChange(dataValue);
    }
  };

  useEffect(() => {
    if (prevThemeType.current && prevThemeType.current !== theme.mode) {
      isMountedRef.current = false;
    }

    prevThemeType.current = theme.mode;
  }, [theme.mode]);

  useEffect(() => {
    if (tabsInnerRef.current && (!isMountedRef.current || prevValueRef.current !== value)) {
      isMountedRef.current = true;

      const { children: childrenEl } = tabsInnerRef.current;

      for (let i = 0; i < childrenEl.length; i += 1) {
        childrenEl[i].className = childrenEl[i].className.replace(/ selected/g, '');

        const dataValue = childrenEl[i].getAttribute('data-value');

        if (!Number.isNaN(Number(dataValue)) && Number(dataValue) === value) {
          childrenEl[i].className = `${childrenEl[i].className} selected`;
        } else if (dataValue === value) {
          childrenEl[i].className = `${childrenEl[i].className} selected`;
        }
      }
    }

    prevValueRef.current = value;
  }, [value, theme.mode]);

  return (
    <StyledTabs
      ref={ref}
      centered={centered}
      onClick={handleClick}
      {...props}
      css={customStyle}
      role="tablist"
    >
      <TabsInner ref={tabsInnerRef}>{children}</TabsInner>
    </StyledTabs>
  );
});

export default Tabs;
