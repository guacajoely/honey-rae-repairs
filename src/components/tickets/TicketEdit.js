import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const TicketEdit = () => {

    const navigate = useNavigate()

    // TODO: This state object should not be blank
    const [ticket, setTicket] = useState({
        "description": "",
        "emergency": false,
    })

    // TODO: What is the variable in which you stored the route parameter?
    const { ticketId } = useParams()

    // TODO: Get the ticket state from the API.
    useEffect(() => {
        fetch(`http://localhost:8088/serviceTickets/${ticketId}`)
            .then(response => response.json())
            .then((responseArray) => {
                setTicket(responseArray)
            })
    }, [ticketId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Write the fetch for the PUT request to replace the object being edited
        return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticket)
        })
        .then(response => response.json())
        .then(() => {
            navigate("/tickets")
        })
    }


    return <form className="ticketForm">
        <h2 className="ticketForm__title">Edit Service Ticket</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    value={ticket.description}
                    onChange={
                        (event) => {
                            // TODO: Update state with a modified copy
                            const copy = { ...ticket }
                            copy.description = event.target.value
                            setTicket(copy)
                        }
                    }>{ticket.description}</textarea>
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="emergency">Emergency:</label>
                <input type="checkbox"
                    checked={ticket.emergency}
                    onChange={
                        (event) => {
                            // TODO: Update state with a modified copy
                            const copy = { ...ticket }
                            copy.emergency = event.target.checked
                            setTicket(copy)
                        }
                    } />
            </div>
        </fieldset>
        <button
            // WASNT WORKING BECAUSE BOILER PLATE CODE WASNT PASSING EVENT INTO CLICK EVENT. REALLY COOL!!!
            onClick={(event) => handleSaveButtonClick(event)}
            className="btn btn-primary">
            Save Edits
        </button>
    </form>
}