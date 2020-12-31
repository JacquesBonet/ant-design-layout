---
order: 3
title:
  zh-CN: 全局化配置
  en-US: ConfigProvider
---

## zh-CN

自定义全局组件的 Empty 样式。

## en-US

Use ConfigProvider set global Empty style.

```jsx
import { ConfigProvider } from 'antd';

const customizeRenderEmpty = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Data Not Found</p>
  </div>
);

const style = { width: 200 };

class Demo extends React.Component {
  state = {
    customize: false,
  };

  render() {
    const { customize } = this.state;
    return (
      <div>
        <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
          <div className="config-provider">
            <h4>Select</h4>

            <h4>TreeSelect</h4>

            <h4>Cascader</h4>

            <h4>Transfer</h4>

            <h4>Table</h4>

            <h4>List</h4>
          </div>
        </ConfigProvider>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
```

<style>
.code-box-demo .config-provider h4 {
  font-size: inherit;
  margin: 16px 0 8px 0;
}
</style>
