var uniqid = require('uniqid');

var listItems = [
  { id: uniqid(), name: "Task 1", priority: 0 },
  { id: uniqid(), name: "Task 2", priority: 1 },
  { id: uniqid(), name: "Task 3", priority: 2 },
  { id: uniqid(), name: "Task 4", priority: 1 },
  { id: uniqid(), name: "Task 5", priority: 0 }
];

// if (localStorage.getItem("InitListItem") === null) {
//   localStorage.setItem('InitListItem', JSON.stringify(listItems));
// }
//var initDefault = JSON.parse(localStorage.getItem('InitListItem'));
export default listItems;