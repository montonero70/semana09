import React, { Fragment, useState } from 'react';

const Formulario = () => {


    const [datos, setDatos] = useState({
        Target: '',
        Value: '',
        Type:'',
        Target2:'',
        Source: '',
        Type2:''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.Target]: event.target.Value
        })
    }

 

    return (
        <Fragment>

            <form className="row m-3">
                <div className="row mt-5">
                    <div className="col-md-4">
                        <label htmlFor="Target"><span style={{ color: 'red' }}>*</span>Target:</label>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="Value"><span style={{ color: 'red' }}>*</span>Value:</label>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="Type"><span style={{ color: 'red' }}>*</span>Type:</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <input type="text" placeholder="phone" className="form-control" onChange={handleInputChange} name="Target"></input>
                    </div>
                    <div className="col-md-4">
                        <input type="text" placeholder="phone" className="form-control" onChange={handleInputChange} name="Value"></input>
                    </div>
                    <div className="col-md-4">
                        <select>
                            <option value="direct">direct</option>
                            <option value="custom">custom</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4">
                        <label htmlFor="Target"><span style={{ color: 'red' }}>*</span>Target:</label>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="Source"><span style={{ color: 'red' }}>*</span>Source(s):</label>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="Type"><span style={{ color: 'red' }}>*</span>Type:</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <input type="text" placeholder="Select target" className="form-control" onChange={handleInputChange} name="Target"></input>
                    </div>
                    <div className="col-md-4">
                        <input type="text" placeholder="Select source" className="form-control" onChange={handleInputChange} name="Source"></input>
                    </div>
                    <div className="col-md-4">
                        <select with="100%">
                            <option value="direct">direct</option>
                            <option value="custom">custom</option>
                        </select>
                    </div>
                </div>
                <div className="row mt-3 ">
                    <label className="col-md-4 align-self-end" htmlFor="Functions1"><span style={{ color: 'red' }}>*</span>Functions parameters:</label>
                    <input className="col-md-8" type="text" placeholder="Set Functions parameters" onChange={handleInputChange} name="Functions11"></input>
                </div>
                <div className="row mt-3 d-flex ">
                    <label className="align-items-start col-md-4 align-self-end" htmlFor="Functions2"><span style={{ color: 'red' }}>*</span>Functions body:</label>
                    <textarea className="col-md-8" onChange={handleInputChange} name="Function2">define code</textarea>
                </div>
                <div className="mt-3 align-items-center">
                        <button type="submit" className="btn btn-light border ">+ Add maping</button>
                </div>
            </form>
           
        </Fragment>
    );
}

export default Formulario;