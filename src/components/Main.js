// import React from 'react';
// import Item from './Item';
// import AddItem from './AddItem';
// import Sort from './Sort';
// import ListItem from './ListItem';

// class Main extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             listItems: 
//             [
//                 {id:1, name:"Task 1", priority: 'high'}, 
//                 {id:2, name:"Task 2", priority: 'low'}, 
//                 {id:3, name:"Task 3", priority: 'medium'},
//                 {id:4, name:"Task 4", priority: 'low'}, 
//                 {id:5, name:"Task 5", priority: 'high'}
//             ]
//         };
//     }
//     render() {
//         //color of Priority
//         var red = 'label label-danger';
//         var green = 'label label-success';
//         var yellow = 'label label-warning';

//         var item = this.state.listItems.map((item, idx) => 
//         <Item key = {idx+1} 
//             id={item.id} 
//             name={item.name} 
//             colorPri = {(item.priority === 'high') ? red : (item.priority === 'low' ? green : yellow)} 
//             priority = {item.priority}/>)   

//         return (
//             <div className="container">
//                 <div className="page-header">
//                     <h1>ToDo List <small>ReactJS</small></h1>
//                 </div>
//                 <Sort />
//                 <AddItem />
//                 <ListItem item = {item}/>
//             </div>
//         );
//     }
// }
// export default Main;
