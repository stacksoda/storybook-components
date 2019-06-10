import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'
import { ContentUtils } from 'braft-utils'

export default class Demo extends React.Component {

  state = {
    editorState: BraftEditor.createEditorState(null)
  }

  clearContent = () => {
    this.setState({
      editorState: ContentUtils.clear(this.state.editorState)
    })
  }

  insertText = () => {
    this.setState({
      editorState: ContentUtils.insertText(this.state.editorState, 'Hello World!')
    })
  }

  handleChange = (editorState) => {
    this.setState({ editorState })
  }

  render() {

    const extendControls = [
      {
        key: 'clear-editor',
        type: 'button',
        text: '清空编辑器',
        onClick: this.clearContent
      }, {
        key: 'insert-text',
        type: 'button',
        text: '插入自定义文本',
        onClick: this.insertText
      }
    ]
    const hooks = {
      'toggle-link': ({ href, target }) => {
        console.log('href :', href);
        console.log('target :', target);
        href = href.indexOf('http') === 0 ? href : `http://${href}`
        return { href, target }
      },
      'toggle-inline-style': (props) => {
        console.log('props :', props);
      }
    }

    return (
      <BraftEditor
        value={this.state.editorState}
        onChange={this.handleChange}
        extendControls={extendControls}
        hooks={hooks}
      />
    )

  }

}