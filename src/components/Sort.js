import React from 'react';

class Sort extends React.Component {
    constructor(props) {
         super(props);
        this.state = {
            sortBy: "name",
            sortByDir: "asc"
        };
        this.handleSort = this.handleSort.bind(this);
    }
    handleSort(orderBy, orderDir){
        this.setState({
            sortBy: orderBy,
            sortByDir: orderDir
          });
        this.props.typeSort(orderBy, orderDir);
    }
    render() {
        
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="dropdown">
                    <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Sort by <span className="caret" />
                    </button>&nbsp;
                    <ul className="dropdown-menu">
                        <li><a href='link' onClick = {(e)=>{this.handleSort('name','asc'); e.preventDefault();}} role="button">Name ASC</a></li>
                        <li><a href='link' onClick = {(e)=>{this.handleSort('name','desc'); e.preventDefault();}} role="button">Name DESC</a></li>
                        <li role="separator" className="divider" />
                        <li><a href='link' onClick = {(e)=>{this.handleSort('priority','asc'); e.preventDefault();}} role="button">Level ASC</a></li>
                        <li><a href='link' onClick = {(e)=>{this.handleSort('priority','desc'); e.preventDefault();}} role="button">Level DESC</a></li>
                    </ul>
                    <span style = {{fontSize: '11px'}}  className="label label-success label-medium">{this.state.sortBy.toUpperCase() + '-' + this.state.sortByDir.toUpperCase()}</span>
                </div>
            </div>
        );
    }
}
export default Sort;
