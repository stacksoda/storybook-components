import React from 'react';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

class SimpleExample extends React.Component {
    state = {
        editorState: EditorState.createEmpty()
    }
    onChange = editorState => {
        console.log('onchange state : ', editorState);
        this.setState({
            editorState
        })
    }
    render() {
        return (<Editor editorState={this.state.editorState} onChange={this.onChange} />)
    }
}
export default SimpleExample;
