import { useState } from 'react';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  const [table, setTable] = useState([{date:"12/4/2023",reason:"Lunch",type:"DEBIT",amount:200}])
  const handleForm =(p)=>{
    let t =table
    t.push(p)
    setTable(t)
  }
  return (
    <div className="App">
      <Header />
      <Table tableData={table} />
      <h4 align="center">Add Transactions</h4>
      <Form handleForm={handleForm} />
    </div>
  );
}

export default App;
