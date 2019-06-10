import React, { Component } from "react";

import { Context } from "./ContextAPI";

class AnotherLevelDeep extends Component {

    constructor(props) {
        super(props);
    }
    handleChange = () => {
        this.parentChange('this is perfect change');
    }

    render() {
        // const { foo, baz, change } = this.props.context;
        return (
            <Context.Consumer>
                {(props) => {
                    const { foo, baz, change } = props;
                    this.parentChange = change;
                    return (
                        <div>
                            <h4>Here is the AnotherLevelDeep component</h4>
                            <pre>Here is foo: {foo}</pre>
                            <pre>Here is baz: {baz}</pre>
                            <button onClick={this.handleChange}>change value</button>
                        </div>
                    )
                }}
            </Context.Consumer>

        );
    }
}

export default props => (
    <Context.Consumer>
        {state => <AnotherLevelDeep context={state} />}
    </Context.Consumer>
);