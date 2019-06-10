import React from 'react';
import View from './View';

export const Context = React.createContext({});
class ContextAPI extends React.Component {
    state = {
        foo: 'bar',
        baz: 'blah',
    }
    handleChange = (value) => {
        this.setState({
            foo: value
        })
    }

    render() {
        return (
            <Context.Provider 
                value={{
                    foo: this.state.foo,
                    baz: this.state.baz,
                    change: this.handleChange
                }}>
                <View />
            </Context.Provider>
        )
    }
}
export default ContextAPI;
