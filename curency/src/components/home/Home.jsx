import React, { useState } from 'react'


function Home() {

    const [target, setTarget] = useState("Doller");
    const [source, setSource] = useState("Doller");
    const [amount, setAmount] = useState(0);
    const [value, setValue] =  useState(0) ;
    

    //This converts currency
    function submitHanddler(e) {
        e.preventDefault();
        if(source=="Doller" && target=="Rupee") {
              setValue(amount*77);
        }
        if(source=="Doller" && target=="Euro") {
            setValue(amount*0.84);
        }
        if(source=="Euro" && target=="Doller") {
            setValue(amount*1.20);
        }
        if(source=="Euro" && target=="Rupee"){
            setValue(amount*86);
        }
        if(source=="Rupee" && target=="Doller"){
            setValue(amount*0.014);
        }
        if(source=="Rupee" && target=="Euro"){
            setValue(amount*0.012);
        }
        
    }

    return (
        <>
            <h1>Enter the converion Details.</h1>
            <form onSubmit={submitHanddler}>
            <div className="form-group">
                    <label>Source</label>
                    <select class="form-select" name="source" id="source" onChange={(event) => setSource(event.target.value)}>
                         <option value="Doller">Doller</option>
                         <option value="Rupee">Rupee</option>
                         <option value="Euro">Euro</option>
                    </select>
            </div>
                <div className="form-group">
                <label>Target</label>
                <select class="form-select" name="target" id="target" onChange={(event) => setTarget(event.target.value)}>
                         <option value="Doller">Doller</option>
                         <option value="Rupee">Rupee</option>
                         <option value="Euro">Euro</option>
                       
                </select>
                </div>   
                <div className="form-group">
                    <label>Amount in {source}</label>
                    <input type="number" className="form-control " placeholder="Enter Amount" onChange={(event) => setAmount(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Convert</button>
            </form>
        
        {!value==0? <p>converted value is:{value} {target}</p>:""}
        </>
    )
}

export default Home
