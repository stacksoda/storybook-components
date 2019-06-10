import ThemedButton from './ThemeButton';
// 中间的组件再也不必指明往下传递 theme 了。
function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
}

export default Toolbar;
