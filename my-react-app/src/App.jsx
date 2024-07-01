// import React, { useState } from 'react';
// import './App.css';
// import Heading from './components/Heading';

// function App() {
//   const [FoodItems, setFoodItems] = useState([
//     { foodname: "sabzi", date: "12/14/2002" },
//     { foodname: "chips", date: "12/14/2002" },
//     { foodname: "potato", date: "12/14/2002" },
//     { foodname: "jdksjqo", date: "12/14/2002" }
//   ]);
//   const [newFoodName, setNewFoodName] = useState('');
//   const [newDate, setNewDate] = useState('');
//   // Sample data for FoodItems
//   const addItem=()=>{
//     console.log("Add item functionality")
//     if(newFoodName!=''&&newDate!=''){
//       const newItem={foodname:newFoodName,date:newDate};
//       setFoodItems([...FoodItems,newItem]);
//       setNewDate('');
//       setNewFoodName('');
//     }
//     else{
//       alert("plz enter both the fields");
//     }
//     }
  
//   const deleteItem=(index)=>{
//     console.log("delete item functionality")
//     const updateItems=[...FoodItems];
//     updateItems.splice(index,1)
//     setFoodItems(updateItems)
//   }
//   const handleFoodNameChange = (event) => {
//     setNewFoodName(event.target.value);
//     console.log(event.target.value)
//   };

//   const handleDateChange = (event) => {
//     setNewDate(event.target.value);
//   };
 

//   return (
//     <>
//       <Heading />
//       <div className="container text-center">
//         <div className="row">
//           <div className="col-4"><input type="text" placeholder='Enter items here'value={newFoodName} onChange={handleFoodNameChange}/></div>
//           <div className="col-4"><input type="date" name="" id="" value={newDate} onChange={handleDateChange} /></div>
//           <div className="col-3"><button type="button" className="btn btn-success" onClick={addItem}>Add</button></div>
//         </div>
//         <div className="row">
//           {/* Mapping over FoodItems array */}
//           {FoodItems.map((items, index) => (
//             <React.Fragment key={index}>
//               <div className="col-4">{items.foodname}</div>
//               <div className="col-4">{items.date}</div>
//               <div className="col-3"><button type="button" className="btn btn-danger"onClick={deleteItem(index)}>Delete</button></div>
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
      
//     </>
//   );

//           }
// export default App;
import React, { useState,useRef } from 'react';
import './App.css';
import Heading from './components/Heading';
import { IoIosAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";



function App() {
  const [FoodItems, setFoodItems] = useState([
    { foodname: "sabzi", date: "12/14/2002" },
    { foodname: "chips", date: "12/14/2002" },
    { foodname: "potato", date: "12/14/2002" }
  ]);
  // const [newFoodName, setNewFoodName] = useState('');
  // const [newDate, setNewDate] = useState('');
  const todoNameElemet=useRef();
  const dueDateElemet=useRef();

  // const handleFoodNameChange = (event) => {
  //   setNewFoodName(event.target.value);
  //   noOfUpdates.current+=1;
  // };

  // const handleDateChange = (event) => {
  //   setNewDate(event.target.value);
  //   console.log( `number  of updates ${noOfUpdates.current} `);
  // };

  const addItem = (event) => {
    event.preventDefault();
    const todoName=todoNameElemet.current.value;
    const dueDate=dueDateElemet.current.value;
    const newItem = { foodname: todoName, date: dueDate };
    setFoodItems([...FoodItems, newItem]);
    todoNameElemet.current.value='';
    dueDate.current.value='';
    // todoNameElement.current.value = '';
    // dueDateElement.current.value = '';

    // if (newFoodName !== '' && newDate !== '') {
    //   const newItem = { foodname: newFoodName, date: newDate };
    //   setFoodItems([...FoodItems, newItem]);
    //   // setNewFoodName('');
    //   // setNewDate('');
    // } else {
    //   alert('Please enter both food name and date.');
    // }
  };

  const deleteItem = (index) => {
    const updatedItems = [...FoodItems];
    updatedItems.splice(index, 1);
    setFoodItems(updatedItems);
  };

  return (
    <>
      <Heading />
      <div className="container text-center">
        <form className="row" onSubmit={addItem}>
          <div className="col-4"><input type="text" ref={todoNameElemet} placeholder='Enter items here'  /></div>
          <div className="col-4"><input type="date" ref={dueDateElemet} name="" id="" /></div>
          <div className="col-3"><button type="submit" className="btn btn-success" >Add <IoIosAdd />
</button></div>
        </form>
        <div className="row">
          {FoodItems.map((items, index) => (
            <div key={index} className="col-12 col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{items.foodname}</h5>
                  <p className="card-text">Date: {items.date}</p>
                  <button type="submit" className="btn btn-danger" onClick={() => deleteItem(index)}>Delete <MdDelete />
</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
