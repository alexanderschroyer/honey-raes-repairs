import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/Employees.js"
import { TicketList } from "./serviceTickets/TicketList.js"
import { CustomerList } from "./customers/CustomerList.js"
import { TicketForm } from "./serviceTickets/TicketForm.js"
import { EmployeeForm } from "./employees/EmployeeForm.js"
import { Ticket } from "./serviceTickets/Ticket.js"
import { Employee } from "./employees/Employee.js"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/tickets">
                <TicketList />
            </Route>

            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>

            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>
            
            <Route path="/employees/create">
                <EmployeeForm />
            </Route>

            <Route path="/tickets/create">
                <TicketForm />
            </Route>



        </>
    )
}
