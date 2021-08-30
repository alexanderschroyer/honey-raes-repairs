import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/Employees.js"
import { TicketList } from "./serviceTickets/TicketList.js"
import { CustomerList } from "./customers/CustomerList.js"
import { TicketForm } from "./serviceTickets/TicketForm.js"

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/customers">
                <CustomerList />
            </Route>
            
            <Route exact path="/tickets">
                <TicketList />
            </Route>

            <Route path="/tickets/create">
                <TicketForm />
            </Route>
        </>
    )
}
