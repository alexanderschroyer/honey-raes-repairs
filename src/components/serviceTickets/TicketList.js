import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const [active, setActive] = useState("")
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    updateTickets(data)
                })
        },
        []
    )

    useEffect(() => {
        const activateTicketCount = tickets.filter(ticket => ticket.dateCompleted === "").length
        setActive(`There are ${activateTicketCount} open tickets`)
    }, [tickets])


    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                    .then(res => res.json())
                    .then((data) => {
                        updateTickets(data)
                    })
            }

        
    return (
            <>
                <div>
                    <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
                </div>
                {active}
                {
                    tickets.map(
                        (ticket) => {
                            return <div key={`ticket--${ticket.id}`}>
                                <p className={`ticket ${ticket.emergency ? 'emergency' : ''}`}>
                                    {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}> {ticket.description} </Link>
                                    submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                                    <button onClick={() => { deleteTicket(ticket.id) }}>Delete</button>
                                </p>
                            </div>
                        }
                    )
                }
            </>
        )
    }