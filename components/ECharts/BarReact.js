import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/grid';
import 'echarts/lib/chart/bar';

class BarReact extends React.Component {
    
    initPie = () => {
        const { option = {} } = this.props;
        const myChart = echarts.init(this.node);
        //设置options
        myChart.setOption(option)
        window.onresize = function () {
            myChart.resize()
        }
        myChart.on('click', params => {
            console.log('params :', params);
        })
    }

    componentDidMount() {
        this.initPie();
    }
    componentDidUpdate() {
        this.initPie();
    }

    render() {
        const { width = "100%", height = "200px" } = this.props;
        return <div ref={node => this.node = node} style={{ width, height }}></div>
    }
}

export default BarReact;
