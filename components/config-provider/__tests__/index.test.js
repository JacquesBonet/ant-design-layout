import React from 'react';
import { mount } from 'enzyme';
import ConfigProvider, { ConfigContext } from '..';
import Button from '../../button';
import Table from '../../table';
import Input from '../../input';
import mountTest from '../../../tests/shared/mountTest';

describe('ConfigProvider', () => {
  mountTest(() => (
    <ConfigProvider>
      <div />
    </ConfigProvider>
  ));
});
