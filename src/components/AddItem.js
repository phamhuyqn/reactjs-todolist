import React from 'react';
import Form from './Form';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowForm: false
        };
        this.showToogleForm = this.showToogleForm.bind(this);
    }
    showToogleForm(){
        this.setState({
            isShowForm: !this.state.isShowForm
        });
    }
    render() {
        let elmForm = null;
        let titleForm = <button type="button" className="btn btn-info btn-block marginB10" onClick={this.showToogleForm}>Add Task</button>
        if (this.state.isShowForm) {
            titleForm = <button type="button" className="btn btn-danger btn-block marginB10" onClick={this.showToogleForm}>Close Form</button>
            elmForm = <Form onGoClickCancel = {this.showToogleForm} onGoAddItem = {this.props.onClickAddItem} />;
        }
        return (
            <div className="row marginB10">
                <div className="col-md-offset-7 col-md-5">
                    {titleForm}
                    {elmForm}
                </div>
            </div>
        );
    }
}
export default AddItem;