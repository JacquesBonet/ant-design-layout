// TODO: remove this lint
// SFC has specified a displayName, but not worked.
/* eslint-disable react/display-name */
import * as React from 'react';
import { RenderEmptyHandler } from './renderEmpty';
import LocaleProvider, { Locale, ANT_MARK } from '../locale-provider';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import {
  ConfigConsumer,
  ConfigContext,
  CSPConfig,
  DirectionType,
  ConfigConsumerProps,
} from './context';
import { SizeType, SizeContextProvider } from './SizeContext';

export {
  RenderEmptyHandler,
  ConfigContext,
  ConfigConsumer,
  CSPConfig,
  DirectionType,
  ConfigConsumerProps,
};

export const configConsumerProps = [
  'getTargetContainer',
  'getPopupContainer',
  'rootPrefixCls',
  'getPrefixCls',
  'renderEmpty',
  'csp',
  'autoInsertSpaceInButton',
  'locale',
  'pageHeader',
];

export interface ConfigProviderProps {
  getTargetContainer?: () => HTMLElement;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  prefixCls?: string;
  children?: React.ReactNode;
  renderEmpty?: RenderEmptyHandler;
  csp?: CSPConfig;
  autoInsertSpaceInButton?: boolean;
  input?: {
    autoComplete?: string;
  };
  locale?: Locale;
  pageHeader?: {
    ghost: boolean;
  };
  componentSize?: SizeType;
  direction?: DirectionType;
  space?: {
    size?: SizeType | number;
  };
  virtual?: boolean;
  dropdownMatchSelectWidth?: boolean;
}

const ConfigProvider: React.FC<ConfigProviderProps> & {
  ConfigContext: typeof ConfigContext;
} = props => {
  React.useEffect(() => {}, [props.direction]);

  const getPrefixClsWrapper = (context: ConfigConsumerProps) => (
    suffixCls: string,
    customizePrefixCls?: string,
  ) => {
    const { prefixCls } = props;

    if (customizePrefixCls) return customizePrefixCls;

    const mergedPrefixCls = prefixCls || context.getPrefixCls('');

    return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
  };

  const renderProvider = (context: ConfigConsumerProps, legacyLocale: Locale) => {
    const {
      children,
      getTargetContainer,
      getPopupContainer,
      renderEmpty,
      csp,
      autoInsertSpaceInButton,
      input,
      locale,
      pageHeader,
      componentSize,
      direction,
      space,
      virtual,
      dropdownMatchSelectWidth,
    } = props;

    const config: ConfigConsumerProps = {
      ...context,
      getPrefixCls: getPrefixClsWrapper(context),
      csp,
      autoInsertSpaceInButton,
      locale: locale || legacyLocale,
      direction,
      space,
      virtual,
      dropdownMatchSelectWidth,
    };

    if (getTargetContainer) {
      config.getTargetContainer = getTargetContainer;
    }

    if (getPopupContainer) {
      config.getPopupContainer = getPopupContainer;
    }

    if (renderEmpty) {
      config.renderEmpty = renderEmpty;
    }

    if (pageHeader) {
      config.pageHeader = pageHeader;
    }

    if (input) {
      config.input = input;
    }

    const childrenWithLocale =
      locale === undefined ? (
        children
      ) : (
        <LocaleProvider locale={locale || legacyLocale} _ANT_MARK__={ANT_MARK}>
          {children}
        </LocaleProvider>
      );
    return (
      <SizeContextProvider size={componentSize}>
        <ConfigContext.Provider value={config}>{childrenWithLocale}</ConfigContext.Provider>
      </SizeContextProvider>
    );
  };

  return (
    <LocaleReceiver>
      {(_, __, legacyLocale) => (
        <ConfigConsumer>
          {context => renderProvider(context, legacyLocale as Locale)}
        </ConfigConsumer>
      )}
    </LocaleReceiver>
  );
};

/** @private internal usage. do not use in your production */
ConfigProvider.ConfigContext = ConfigContext;
export default ConfigProvider;
