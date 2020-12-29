// TODO: remove this lint
// SFC has specified a displayName, but not worked.
/* eslint-disable react/display-name */
import * as React from 'react';
import { RenderEmptyHandler } from './renderEmpty';
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
  React.useEffect(() => {
    if (props.direction) {
    }
  }, [props.direction]);

  const getPrefixClsWrapper = (context: ConfigConsumerProps) => {
    return (suffixCls: string, customizePrefixCls?: string) => {
      const { prefixCls } = props;

      if (customizePrefixCls) return customizePrefixCls;

      const mergedPrefixCls = prefixCls || context.getPrefixCls('');

      return suffixCls ? `${mergedPrefixCls}-${suffixCls}` : mergedPrefixCls;
    };
  };

  const renderProvider = (context: ConfigConsumerProps) => {
    const {
      children,
      getTargetContainer,
      getPopupContainer,
      renderEmpty,
      csp,
      autoInsertSpaceInButton,
      input,
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

    let childNode = children;

    return (
      <SizeContextProvider size={componentSize}>
        <ConfigContext.Provider value={config}>
            {childNode}
        </ConfigContext.Provider>
      </SizeContextProvider>
    );
  };

  return (
        <ConfigConsumer>
          {context => renderProvider(context)}
        </ConfigConsumer>
  );
};

/** @private internal usage. do not use in your production */
ConfigProvider.ConfigContext = ConfigContext;
export default ConfigProvider;
