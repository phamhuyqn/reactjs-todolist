import React from 'react';
import './App.css';
import Title from './components/Title';
import Item from './components/Item';
import AddItem from './components/AddItem'
import Control from './components/Control';
import ListItem from './components/ListItem';
import { orderBy as funcSort, remove } from 'lodash';
import mockdata from './components/mockdata';


class App extends React.Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem("InitListItem") === null) {
      localStorage.setItem('InitListItem', JSON.stringify(mockdata));
    }
    this.state = {
      listItems: JSON.parse(localStorage.getItem("InitListItem")),
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
    remove(this.state.listItems, function (item) {
      return item.id === id;
    });
    this.setState({
      listItems: this.state.listItems
    });
    localStorage.setItem('InitListItem', JSON.stringify(this.state.listItems));
  }
  //Update 
  editItem(id, name, priority) {
    let lsItem = this.state.listItems;
    lsItem.forEach(function (item) {
      if (item.id === id) {
        item.name = name;
        item.priority = priority;
      }
    });
    this.setState({
      listItems: this.state.listItems
    });
    localStorage.setItem('InitListItem', JSON.stringify(this.state.listItems));
  }
  //add item
  addItem(name, priority) {
    var uniqid = require('uniqid');
    let lsItem = this.state.listItems;
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
    localStorage.setItem('InitListItem', JSON.stringify(this.state.listItems));
  }

  render() {
    var storedItems = JSON.parse(localStorage.getItem("InitListItem"));
    console.log(storedItems);

    let itemsOrigin = storedItems;
    let items = [];
    let { sortBy, sortByDir } = this.state;

    //search
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
    let item = items.map((item, idx) => <Item stt={idx + 1} key={idx + 1} id={item.id} name={item.name}
      priority={item.priority} listItem={this.deleteItem} editItem={this.editItem} />)

    return (
      <div className="container">
        <Title />
        <Control stringSearch={this.getStringSearch} typeSort={this.getTypeSort} />
        <AddItem onClickAddItem={this.addItem} />
        <ListItem item={item} />
      </div>
    );
  }
}

export default App;
