import React, { Component } from "react";

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num1: "",
            num2: "",
            result: ""
        };

        this.handleNum1Change = this.handleNum1Change.bind(this);
        this.handleNum2Change = this.handleNum2Change.bind(this);
        this.handleAddition = this.handleAddition.bind(this);
        this.handleSubtraction = this.handleSubtraction.bind(this);
        this.handleMultiplication = this.handleMultiplication.bind(this);
        this.handleDivision = this.handleDivision.bind(this);
    }

    handleNum1Change(event) {
        this.setState({ num1: event.target.value });
    }

    handleNum2Change(event) {
        this.setState({ num2: event.target.value });
    }

    handleAddition() {
        const result = parseInt(this.state.num1) + parseInt(this.state.num2);
        this.setState({ result });
    }

    handleSubtraction() {
        const result = parseInt(this.state.num1) - parseInt(this.state.num2);
        this.setState({ result });
    }

    handleMultiplication() {
        const result = parseInt(this.state.num1) * parseInt(this.state.num2);
        this.setState({ result });
    }

    handleDivision() {
        const result = parseInt(this.state.num1) / parseInt(this.state.num2);
        this.setState({ result });
    }

    render() {
        return ( <
            div >
            <
            br / >
            <
            br / >
            <
            br / >
            <
            br / >
            <
            br / >
            <
            br / >
            <
            br / >
            <
            h1 > Easy Calculator < /h1> <
            h2 > Enter the Numbers： < /h2> <
            input type = "number"
            value = { this.state.num1 }
            onChange = { this.handleNum1Change }
            placeholder = "Number" /
            >
            &
            ensp; <
            input type = "number"
            value = { this.state.num2 }
            onChange = { this.handleNum2Change }
            placeholder = "Number" /
            >
            <
            br / >
            <
            h3 > Choose the Mode: 　 < /h3> <
            button onClick = { this.handleAddition } > + < /button> &
            ensp; <
            button onClick = { this.handleSubtraction } > - < /button> &
            ensp; <
            button onClick = { this.handleMultiplication } > * < /button> &
            ensp; <
            button onClick = { this.handleDivision } > / </button >
            &
            ensp; <
            p > Calculated result: { this.state.result } < /p> <
            /div>
        );
    }
}

export default Calculator;