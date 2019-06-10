import React from 'react';
import {
  convertToRaw,
  CompositeDecorator,
  Editor,
  EditorState,
  RichUtils,
} from 'draft-js';
import 'draft-js/dist/Draft.css';

export default class LinkEditorExample extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   editorState: EditorState.createEmpty(),
    //   showURLInput: false,
    // }

    const decorator = new CompositeDecorator([
      {
        strategy: findLinkEntities,
        component: Link,
      }
    ])

    this.state = {
      editorState: EditorState.createEmpty(decorator),
      showURLInput: false,
      urlValue: '',
    };

    // this.focus = () => this.refs.editor.focus();
  }
  
  // 确认富文本组件选中了内容 如果选择了内容不为空 则弹出输入框
  promptForLink = e => {
    e.preventDefault();
    const {editorState} = this.state;
    const selection = editorState.getSelection();
    // 如果当前有选中的内容则显示urlInput控件
    if (!selection.isCollapsed()) {
      const contentState = editorState.getCurrentContent();
      const startKey = editorState.getSelection().getStartKey();
      const startOffset = editorState.getSelection().getStartOffset();
      const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey);
      const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset);
      // 如果当前实体有引用，则将引用地址存入state
      let url = '';
      if (linkKey) {
        const linkInstance = contentState.getEntity(linkKey);
        url = linkInstance.getData().url;
      }

      this.setState({
        showURLInput: true,
        urlValue: url,
      }, () => {
        setTimeout(() => this.refs.url.focus(), 0);
      })
    }
  }
  // 设置富文本样式到状态
  confirmLink = e => {
    e.preventDefault();
    const {editorState, urlValue} = this.state;
    const contentState = editorState.getCurrentContent();
    console.log('urlValue :', urlValue);
    const contentStateWithEntity = contentState.createEntity(
      'LINK',
      'MUTABLE',
      {url: urlValue}
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    console.log('entityKey :', entityKey);
    const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity});
    this.setState({
      editorState: RichUtils.toggleLink(
        newEditorState,
        newEditorState.getSelection(),
        entityKey
      ),
      showURLInput: false,
      urlValue: '',
    }, () => {
      setTimeout(() => this.refs.editor.focus(), 1000);
    })
  }
  onLinkInputKeyDown = e => {
    if (e.which === 13) {
      this.confirmLink(e);
    }
  }
  // 编辑器内容变化直接设置为editorState
  onChange = editorState => this.setState({editorState});
  // URL地址变化 存入state
  onURLChange = e => this.setState({urlValue: e.target.value});
  // 打印编辑器内容状态
  logState = () => {
    const content = this.state.editorState.getCurrentContent();
    console.log(convertToRaw(content));
  }

  render() {
    let urlInput;
    if (this.state.showURLInput) {
      urlInput =
        <div style={styles.urlInputContainer}>
          <input
            onChange={this.onURLChange}
            ref="url"
            style={styles.urlInput}
            type="text"
            value={this.state.urlValue}
            onKeyDown={this.onLinkInputKeyDown}
          />
          <button onMouseDown={this.confirmLink}>
            Confirm
          </button>
        </div>;
    }
    return (
      <div style={styles.root}>
        <div style={{ marginBottom: 10 }}>
          Select some text, then use the buttons to add or remove links
          on the selected text.
            </div>
        <div style={styles.buttons}>
          <button
            onMouseDown={this.promptForLink}
            style={{ marginRight: 10 }}>
            Add Link
              </button>
          <button onMouseDown={this.removeLink}>
            Remove Link
              </button>
        </div>
        {urlInput}
        <div style={styles.editor} onClick={this.focus}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="Enter some text..."
            ref="editor"
          />
        </div>
        <input
          onClick={this.logState}
          style={styles.button}
          type="button"
          value="Log State"
        />
      </div>
    );
  }
}
/**
 * 寻找 Link 实体
 * @param {*} contentBlock 
 * @param {*} callback 
 * @param {*} contentState 
 */
function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'LINK'
      );
    },
    callback
  );
}

const styles = {
  root: {
    fontFamily: '\'Georgia\', serif',
    padding: 20,
    width: 600,
  },
  buttons: {
    marginBottom: 10,
  },
  urlInputContainer: {
    marginBottom: 10,
  },
  urlInput: {
    fontFamily: '\'Georgia\', serif',
    marginRight: 10,
    padding: 3,
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    minHeight: 80,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
  link: {
    color: '#3b5998',
    textDecoration: 'underline',
  },
};
/**
 * 创建一个链接
 * @param {*} props 
 */
const Link = (props) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  return (
    <a href={url} style={styles.link}>
      {props.children}
    </a>
  )
}