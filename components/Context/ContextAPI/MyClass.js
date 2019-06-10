import React from 'react';
import { MyContext } from './ContextAPI';

class MyClass extends React.Component {
    static contextType = MyContext;
    componentDidMount() {
        let value = this.context;
        console.log('value :', value);
    }
    render(){
        return (
            <div>Hello class</div>
        )
    }
}
// MyClass.contextType = MyContext;
export default MyClass;
