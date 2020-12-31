import React from 'react';
import { render, mount } from 'enzyme';
import Empty from '..';
import ConfigProvider from '../../config-provider';
import mountTest from '../../../tests/shared/mountTest';

describe('Empty', () => {
  mountTest(Empty);

  it('description can be false', () => {
    const wrapper = mount(<Empty description={false} />);
    expect(wrapper.find('.ant-empty-description').length).toBe(0);
  });

  it('should render in RTL direction', () => {
    const wrapper = mount(
      <ConfigProvider direction="rtl">
        <Empty />
      </ConfigProvider>,
    );
    expect(render(wrapper)).toMatchSnapshot();
  });
});
