import React from 'react';

import { Context } from './ContextAPI';
import AnotherLevelDeep from './another-level-deep';

const View = () => {
    // console.log('this.props.context :', this.props.context);
    return (
        <Context.Consumer>
            {(props) => {
                const {foo, baz, change} = props;
                return (
                    <div>
                        <h3>This is the view</h3>
                        <pre>Here is foo: {foo}</pre>
                        <pre>Here is baz: {baz}</pre>
                        <AnotherLevelDeep />
                    </div>
                )
            }}
        </Context.Consumer>
    );
}
export default View;