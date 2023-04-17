export const getAllCustomers = () => {
    return fetch('http://localhost:8088/users?isStaff=false')
        .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch('http://localhost:8088/users?isStaff=true')
    .then(response => response.json())
}

export const getCustomerById = (id) => {
    return fetch(`http://localhost:8088/customers?userId=${id}`)
    .then(response => response.json())
}

export const getEmployeeById = (id) => {
    return fetch(`http://localhost:8088/employees?userId=${id}`)
    .then(response => response.json())
}

export const getExpandedCustomerById = (id) => {
    return fetch(`http://localhost:8088/customers?_expand=user&userId=${id}`)
            .then(response => response.json())
}

export const getExpandedEmployeeById = (id) => {
    return fetch(`http://localhost:8088/employees?_expand=user&_embed=employeeTickets&userId=${id}`)
            .then(response => response.json())
}

export const editCustomer = (profile) => {
    return fetch(`http://localhost:8088/customers/${profile.id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(profile)

})
.then(response => response.json())
}

export const editEmployee = (profile) => {
    return fetch(`http://localhost:8088/employees/${profile.id}`, {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(profile)

})
.then(response => response.json())
}

export const deleteTicket = (id) => {
    return fetch(`http://localhost:8088/serviceTickets/${id}`, {
        method: "DELETE"
    })
}


export const getTicketById = (id) => {
    return fetch(`http://localhost:8088/serviceTickets/${id}`)
    .then(response => response.json())
}


export const editTicket = (id, ticketObject) => {
    return fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticketObject)

        })
        .then(response => response.json())
}

export const claimTicket = (employeeId, ticketId) => {
    return fetch(`http://localhost:8088/employeeTickets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            employeeId: employeeId,
            serviceTicketId: ticketId
        })

    })
    .then(response => response.json())
}

export const createTicket = (ticketObject) => {
    return fetch('http://localhost:8088/serviceTickets', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ticketObject)
    })
    .then(response => response.json())
}









