import React from 'react';
import './App.css';
import OperatedButton from './components/OperatedButton';
import StoperDisplay from './components/StoperDisplay';
import ScoreList from './components/ScoreList';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            running: false,
            timeList: [],
            time: {
                miliseconds: 0,
                seconds: 0,
                minutes: 0
            }
        };
        this.interval = null;
        this.start = this.start.bind(this);
    }

    pad0(value) {
        let number = value.toString();

        if (number.length < 2) {
            number = "0" + number
        }
        return number;
    }

    format(time) {
        return (`${this.pad0(time.minutes)}:${this.pad0(time.seconds)}:${this.pad0(time.miliseconds)}`)
    }

    calculate(time) {
        let result = time;
        result.miliseconds += 1;

        if (result.miliseconds >= 100) {
            result.seconds += 1;
            result.miliseconds = 0;
        }

        if (result.seconds >= 60) {
            result.minutes += 1;
            result.seconds = 0;
        }
        return result;
    }

    start() {
        this.setState({
            running: true
        });
        this.interval = setInterval(() => {

            if (this.state.running) {
                this.setState({
                    time: this.calculate(this.state.time)
                })
            }
        }, 10);



    }

    stop() {
        this.setState({
            running: false
        });
        clearInterval(this.interval);
    }

    reset = () => {
        this.setState({
            time: {
                miliseconds: 0,
                seconds: 0,
                minutes: 0
            }
        })
    };

    addScore = () => {
        this.setState({
            timeList: [this.format(this.state.time), ...this.state.timeList]
        });
    };

    clearScore = () => {
        this.setState({
            timeList: []
        })
    };

    render() {
        return (
            <div>
                <div className="App">
                    <OperatedButton name={"Start"} onClick={this.start}/>
                    <OperatedButton name={"Stop"} onClick={this.stop.bind(this)}/>
                    <OperatedButton name={"Reset"} onClick={this.reset}/>
                    <OperatedButton name={"Add score"} onClick={this.addScore}/>
                    <OperatedButton name={"Clear score"} onClick={this.clearScore}/>
                    <StoperDisplay output={this.format(this.state.time)}/>
                </div>
                <ScoreList scoreList={this.state.timeList}/>
            </div>

        )
    }
}

export default App;
