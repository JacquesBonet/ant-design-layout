import _extends from "@babel/runtime/helpers/extends";
// TODO: remove this lint
// SFC has specified a displayName, but not worked.

/* eslint-disable react/display-name */
import * as React from 'react';
import { ConfigConsumer, ConfigContext } from './context';
import { SizeContextProvider } from './SizeContext';
export { ConfigContext, ConfigConsumer };
export var configConsumerProps = ['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader'];

var ConfigProvider = function ConfigProvider(props) {
  React.useEffect(function () {
    if (props.direction) {}
  }, [props.direction]);

  var getPrefixClsWrapper = function getPrefixClsWrapper(context) {
    return function (suffixCls, customizePrefixCls) {
      var prefixCls = props.prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      var mergedPrefixCls = prefixCls || context.getPrefixCls('');
      return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
    };
  };

  var renderProvider = function renderProvider(context) {
    var children = props.children,
        getTargetContainer = props.getTargetContainer,
        getPopupContainer = props.getPopupContainer,
        renderEmpty = props.renderEmpty,
        csp = props.csp,
        autoInsertSpaceInButton = props.autoInsertSpaceInButton,
        input = props.input,
        pageHeader = props.pageHeader,
        componentSize = props.componentSize,
        direction = props.direction,
        space = props.space,
        virtual = props.virtual,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;

    var config = _extends(_extends({}, context), {
      getPrefixCls: getPrefixClsWrapper(context),
      csp: csp,
      autoInsertSpaceInButton: autoInsertSpaceInButton,
      direction: direction,
      space: space,
      virtual: virtual,
      dropdownMatchSelectWidth: dropdownMatchSelectWidth
    });

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

    var childNode = children;
    return /*#__PURE__*/React.createElement(SizeContextProvider, {
      size: componentSize
    }, /*#__PURE__*/React.createElement(ConfigContext.Provider, {
      value: config
    }, childNode));
  };

  return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (context) {
    return renderProvider(context);
  });
};
/** @private internal usage. do not use in your production */


ConfigProvider.ConfigContext = ConfigContext;
export default ConfigProvider;