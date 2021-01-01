import * as React from 'react';
import classNames from 'classnames';
import DefaultEmptyImg from './empty';
import SimpleEmptyImg from './simple';

const defaultEmptyImg = <DefaultEmptyImg />;
const simpleEmptyImg = <SimpleEmptyImg />;

export interface TransferLocale {
  description: string;
}

export interface EmptyProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /** @since 3.16.0 */
  imageStyle?: React.CSSProperties;
  image?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

interface EmptyType extends React.FC<EmptyProps> {
  PRESENTED_IMAGE_DEFAULT: React.ReactNode;
  PRESENTED_IMAGE_SIMPLE: React.ReactNode;
}

const Empty: EmptyType = ({
  className,
  prefixCls: customizePrefixCls,
  image = defaultEmptyImg,
  description,
  children,
  imageStyle,
  ...restProps
}) => (
  <>
    {(locale: TransferLocale) => {
      const prefixCls = '';
      const des = typeof description !== 'undefined' ? description : locale.description;
      const alt = typeof des === 'string' ? des : 'empty';

      let imageNode: React.ReactNode = null;

      if (typeof image === 'string') {
        imageNode = <img alt={alt} src={image} />;
      } else {
        imageNode = image;
      }

      return (
        <div
          className={classNames(
            prefixCls,
            {
              [`${prefixCls}-normal`]: image === simpleEmptyImg,
              [`${prefixCls}-rtl`]: false,
            },
            className,
          )}
          {...restProps}
        >
          <div className={`${prefixCls}-image`} style={imageStyle}>
            {imageNode}
          </div>
          {des && <p className={`${prefixCls}-description`}>{des}</p>}
          {children && <div className={`${prefixCls}-footer`}>{children}</div>}
        </div>
      );
    }}
  </>
);

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;

export default Empty;
