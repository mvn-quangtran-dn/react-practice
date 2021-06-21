import React,  {Component} from 'react';

class Circle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.number,
            isStart: this.props.isStart
        }
        this.countDown = this.countDown.bind(this);
        this.interval = null;
        this.circle = React.createRef();
    };

    countDown() {
        const {number, isStart} = this.state;
        this.setState({isStart: !isStart});
        if (isStart) {
            if (number !== undefined) {
              this.interval = setInterval(() => {
                this.setState((prevState) => ({
                    number : (prevState.number - 1) > 0 ? this.state.number - 1 : clearInterval(this.interval)
                }))
              }, 1000) 
            }
        } else {
            clearInterval(this.interval);
        }
    }
    componentDidMount() {
      console.log('componentDidMount');
        this.countDown();
    }
    componentWillUnmount() {
      console.log('componentWillUnmount');
        clearInterval(this.interval);
    }

    render(){
        const {number, isStart} = this.state;
        const {width, height} = this.props;
        console.log(width,height);

        const styles = {
            width: width,
            height: height,
            borderRadius: '50%',
            backgroundColor: 'red'
        };
        return (
            <div className="circle">
                <button className="button-trigger" onClick={this.countDown}>{isStart ? 'Start' : 'Stop'}</button>
                <div className="context-circle" ref={this.circle} style={styles}>
                    {number || 0}
                </div>
            </div>
        );
    }
}
export default Circle;