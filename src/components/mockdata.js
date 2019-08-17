var uniqid = require('uniqid');

var listItems=
        [
          { id: uniqid(), name: "Task 1", priority: 0 },
          { id: uniqid(), name: "Task 2", priority: 1 },
          { id: uniqid(), name: "Task 3", priority: 2 },
          { id: uniqid(), name: "Task 4", priority: 1 },
          { id: uniqid(), name: "Task 5", priority: 0 }
        ]
export default listItems;