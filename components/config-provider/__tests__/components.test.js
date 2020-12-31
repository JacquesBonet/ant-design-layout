import React from 'react';
import { render } from 'enzyme';
import ConfigProvider from '..';

import { Row, Col } from '../../grid';

describe('ConfigProvider', () => {
  describe('components', () => {
    function testPair(name, renderComponent) {
      // eslint-disable-next-line jest/valid-describe
      describe(`${name}`, () => {
        // normal
        it('normal', () => {
          expect(render(renderComponent({}))).toMatchSnapshot();
        });

        // prefixCls
        it('prefixCls', () => {
          expect(render(renderComponent({ prefixCls: `prefix-${name}` }))).toMatchSnapshot();
        });

        // configProvider
        it('configProvider', () => {
          expect(
            render(
              <ConfigProvider pageHeader={{ ghost: false }} prefixCls="config">
                {renderComponent({})}
              </ConfigProvider>,
            ),
          ).toMatchSnapshot();
        });

        it('configProvider componentSize large', () => {
          expect(
            render(
              <ConfigProvider componentSize="large" prefixCls="config">
                {renderComponent({})}
              </ConfigProvider>,
            ),
          ).toMatchSnapshot();
        });

        it('configProvider componentSize middle', () => {
          expect(
            render(
              <ConfigProvider componentSize="middle" prefixCls="config">
                {renderComponent({})}
              </ConfigProvider>,
            ),
          ).toMatchSnapshot();
        });

        it('configProvider virtual and dropdownMatchSelectWidth', () => {
          expect(
            render(
              <ConfigProvider virtual={false} dropdownMatchSelectWidth={false}>
                {renderComponent({})}
              </ConfigProvider>,
            ),
          ).toMatchSnapshot();
        });
      });
    }

    // Grid
    testPair('Grid', props => {
      const rowProps = {};
      const colProps = {};
      if (props.prefixCls) {
        rowProps.prefixCls = 'prefix-row';
        colProps.prefixCls = 'prefix-col';
      }

      return (
        <Row {...rowProps}>
          <Col {...colProps} span={1} />
        </Row>
      );
    });
  });
});
