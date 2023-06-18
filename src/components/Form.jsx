import React, { useState } from 'react';

function Form({handleForm}) {
    const [data,setData] = useState({type:"DEBIT",reason:"",amount:0})
    const handleInputChange = (e)=>{ // e means event here
        let name = e.target.name;
        let value = e.target.value;
        setData((prev) => ({ ...prev,[name]:value  }))
    }
    const handleSave = ()=>{
        let date = new Date()?.toLocaleDateString()
        handleForm({ ...data, date })
    }
    const handleClear = ()=>{
        setData({ type: "DEBIT", reason: "", amount: 0 })
    }
  return (
    <div className="form">
      <div>
        <div className="form-fields">
          <label>Type</label>
          <select name="type" value={data.type} onChange={handleInputChange}>
            <option value={"DEBIT"}>DEBIT</option>
            <option value={"CREDIT"}>CREDIT</option>
          </select>
        </div>
        <div className="form-fields">
          <label>Reason</label>
          <input type="text" name="reason" value={data.reason} onChange={handleInputChange} />
        </div>
        <div className="form-fields">
          <label>Amount</label>
          <input type="text" name="amount" value={data.amount} onChange={handleInputChange} />
        </div>
        <div className="button-area">
          <button className="button" onClick={handleClear}>
            Clear
          </button>
          <button className="button primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form