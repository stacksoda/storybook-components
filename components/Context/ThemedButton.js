import React from 'react';
import { ThemeContext } from './ContextTheme';

export default class ThemedButton extends React.Component {
    // 指定 contextType 读取当前的 theme context。
    // React 会往上找到最近的 theme Provider，然后使用它的值。
    // 在这个例子中，当前的 theme 值为 “dark”。
    static contextType = ThemeContext;
    render() {
    //   return <Button theme={this.context} />;
    console.log('this.context :', this.context.value);
    return <h1>hello</h1>
    }
  }