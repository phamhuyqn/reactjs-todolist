import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strSearch: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
    handleChange(event){
        this.props.str(event.target.value);
    }
    handleClear(){
        this.props.str('');
        this.setState({
            strSearch: ''
        });
    }
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search item name" onChange = {this.handleChange} />
                    <span className="input-group-btn">
                        <button className="btn btn-warning" type="button" onClick = {this.handleClear}>Clear</button>
                    </span>
                </div>
            </div>
        );
    }
}
export default Search;
