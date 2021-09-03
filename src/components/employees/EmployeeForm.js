import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState({
        description: "",
    });
    const history = useHistory()

    const submitEmployee = (event) => {
        event.preventDefault()

        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty,
            dateHired: ""
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }


    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Hire Information</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input
                    onChange={
                        (event) => {
                            const copy = {...employee}
                            copy.name = event.target.value
                            updateEmployee(copy)
                        }
                    } 
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Specialty:</label>
                    <input 
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.specialty = event.target.value
                                updateEmployee(copy)
                            }
                        } 
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Your specialty"
                        />
                </div>
            </fieldset>
            <button onClick={submitEmployee} className="btn btn-primary">
                Finish Hiring
            </button>
        </form>
    )
}
