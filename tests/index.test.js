import pkg from '../package.json';

const testDist = process.env.LIB_DIR === 'dist';

describe('ant-design-layout dist files', () => {
  it('exports modules correctly', () => {
    // eslint-disable-next-line global-require,import/no-unresolved
    const antd = testDist ? require('../dist/ant-design-layout') : require('../components');
    expect(Object.keys(antd)).toMatchSnapshot();
  });

  // https://github.com/ant-design/ant-design/issues/1970
  // https://github.com/ant-design/ant-design/issues/1804
  if (testDist) {
    it('ant design layout should export version', () => {
      // eslint-disable-next-line global-require,import/no-unresolved
      const antd = require('../dist/ant-design-layout');
      expect(antd).toBeTruthy();
      expect(antd.version).toBe(pkg.version);
    });

    it('ant-design-layout should export version', () => {
      // eslint-disable-next-line global-require,import/no-unresolved
      const antd = require('../dist/ant-design-layout.min');
      expect(antd).toBeTruthy();
      expect(antd.version).toBe(pkg.version);
    });
  }
});
