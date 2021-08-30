import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/Employees.js"
import { TicketList } from "./serviceTickets/TicketList.js"
import { CustomerList } from "./customers/CustomerList.js"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/Employees">
                <EmployeeList />
            </Route>

            <Route path="/customers">
                <CustomerList />
            </Route>
            
            <Route path="/tickets">
                <TicketList />
            </Route>
        </>
    )
}
