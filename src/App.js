import React from 'react';
import './App.css';
import Item from './components/Item';
import AddItem from './components/AddItem'
import Control from './components/Control';
import ListItem from './components/ListItem';
import {orderBy as funcSort, remove} from 'lodash';
import mockdata from './components/mockdata';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: mockdata,
      strSearch: '',
      sortBy: 'name',
      sortByDir: 'asc',
    };
    this.getStringSearch = this.getStringSearch.bind(this);
    this.getTypeSort = this.getTypeSort.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }
  getStringSearch(str) {
    this.setState({
      strSearch: str
    });
  }
  //Sort
  getTypeSort(orderBy, orderByDir) {
    this.setState({
      sortBy: orderBy,
      sortByDir: orderByDir
    });
  }
  //Delete 
  deleteItem(id) {
    remove(this.state.listItems, function(item) {
      return item.id === id;
    });
    this.setState({
      listItems: this.state.listItems
    });
  }
  //Update 
  editItem(id, name, priority) {
    let lsItem = this.state.listItems;
    lsItem.forEach(function(item){
      if (item.id === id) {
        item.name = name;
        item.priority = priority;
      }
    });
    console.log(name,priority);
    this.setState({
      listItems: this.state.listItems
    });
  }
  addItem(name, priority) {
    var uniqid = require('uniqid');
    //let idMax = Number.MIN_VALUE;
    let lsItem = this.state.listItems;
    // lsItem.forEach(function(item){
    //   idMax = Math.max(idMax, item.id)
    // });
    lsItem.push(
      {
        id: uniqid(),
        name: name,
        priority: Number(priority)
      }
    );
    this.setState({
      listItems: lsItem
    });
  }

  render() {       
    let itemsOrigin = this.state.listItems;
    let items = [];
    let { sortBy, sortByDir } = this.state;  

    //loop list item => push Items
    if (this.state.strSearch.length > 0) {
      itemsOrigin.forEach((item) => {
        if (item.name.includes(this.state.strSearch)) {
          items.push(item);
        }
      });
    }
    else {
      items = itemsOrigin;
    }
    //sort
    items = funcSort(items, [sortBy], [sortByDir]);

    //mapping item to View
    let item = items.map((item, idx) => <Item stt={idx + 1} key={idx + 1}
                                        id={item.id}
                                        name={item.name}
                                        priority={item.priority} listItem = {this.deleteItem} editItem = {this.editItem} />)

    return (
      <div className="container">
        <div className="page-header">
          <h1>ToDo List <small>ReactJS</small></h1>
        </div>
        <Control stringSearch={this.getStringSearch} typeSort={this.getTypeSort} />
        <AddItem onClickAddItem = {this.addItem}/>
        <ListItem item={item} />
      </div>
    );
  }
}

export default App;
