import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            priority: 0,
            notify: ['', ''],
            display: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        if (this.state.input.length > 0) 
        {
            this.props.onGoAddItem(this.state.input, this.state.priority);
            this.setState({
                input: '',
                notify: ['Added success!', 'green'],
                display: 'block'
            });
        }
        else
        {
            this.setState({
                notify: ['Please enter something!', 'red'],
                display: 'block'
            });
        }
        setTimeout( () => this.setState({display:'none'}), 2000);
    }
    handleChange(e) {
        this.setState({
            input: e.target.value
        });
    }
    handleChange1(e) {
        this.setState({
            priority: e.target.value
        });
    }

    render() {
        console.log(this.state.display);

        return (
            <form className="form-inline">
                <div className="form-group">
                    <input value={this.state.input} type="text" className="form-control" placeholder="Item Name" onChange={this.handleChange} />&nbsp;
                    
                </div>
                <div className="form-group">&nbsp;
                    <select className="form-control" onChange={this.handleChange1}>
                        <option value={0}>Small</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option> 
                    </select>
                </div>&nbsp;
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>&nbsp;
                <button type="button" className="btn btn-default" onClick = {this.props.onGoClickCancel}>Cancel</button>
                <br /><span className = "notify" style = {{color:this.state.notify[1], display: this.state.display}}>{this.state.notify[0]}</span>
            </form>
        );
    }
}
export default Form;
