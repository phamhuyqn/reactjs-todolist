import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            isEnable: true,
            input: this.props.name,
            priority: this.props.priority
        };
        this.editClick = this.editClick.bind(this);
        this.saveClick = this.saveClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }
    editClick() {
        this.setState({
            isEdit: !this.state.isEdit
        });
    }
    saveClick() {
        let { id } = this.props;
        let { input, priority } = this.state;
        this.props.editItem(id, input, priority);
        this.setState({
            isEdit: !this.state.isEdit,
            enable: !this.state.isEdit,
            isEnable:true
        });
    }
    handleChange(event) {
        this.setState({
            input: event.target.value,
            isEnable: false
        });
    }
    handleChangeSelect(event) {
        this.setState({
            priority: Number(event.target.value),
            isEnable: false
        });
    }

    render() {
        let priority = <span className='label label-default'>Small</span>

        if (this.props.priority === 1) {
            priority = <span className='label label-warning'>Medium</span>
        } else if (this.props.priority === 2) {
            priority = <span className='label label-danger'>High</span>
        }

        if (this.state.isEdit) {
            return (
                <tr>
                    {/* form edit */}
                    <td className="text-center">{this.props.stt}</td>
                    <td><input defaultValue={this.props.name} onChange={this.handleChange} type="text" className="form-control" /></td>
                    <td className="text-center">
                        <select defaultValue = {this.props.priority} className="form-control" onChange={this.handleChangeSelect}>
                            <option value = {0}>Small</option>
                            <option value = {1}>Medium</option>
                            <option value = {2}>High</option>
                        </select>
                    </td>
                    <td>
                        <button type="button" className="btn btn-default btn-sm" onClick={this.editClick}>Cancel</button>
                        &nbsp;<button disabled = {this.state.isEnable} type="button" className="btn btn-success btn-sm" onClick={this.saveClick}>Save</button>
                    </td>
                </tr>
            );
        }
        else {
            return (

                <tr>
                    <td className="text-center">{this.props.stt}</td>
                    <td>{this.props.name}</td>
                    <td className="text-center">{priority}</td>
                    <td>
                        <button type="button" className="btn btn-warning btn-sm" onClick={this.editClick}>Edit</button>&nbsp;
                        <button onClick={() => this.props.listItem(this.props.id)} type="button" className="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>
            );
        }
    }
}
export default Item;
