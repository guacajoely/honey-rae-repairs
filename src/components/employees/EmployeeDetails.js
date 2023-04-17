import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getExpandedEmployeeById } from "../ApiManager.js"

export const EmployeeDetails = () => {

    const {employeeId} = useParams()
    const [employee, updateEmployee] = useState({})

    useEffect(
        () => {
            getExpandedEmployeeById(employeeId)
            .then((employeeArray) => {
                const singleEmployee = employeeArray[0]
                updateEmployee(singleEmployee)
            })
        },
        [employeeId]

    )

    return <section className="employee">
                <header className="employee__header">{employee?.user?.fullName}</header>
                <div>Email: {employee?.user?.email} </div>
                <div>Specialty: {employee?.specialty} </div>
                <div>Rate: {employee?.rate} </div>
                <footer className="employee__footer">Currently working on {employee?.employeeTickets?.length} tickets</footer>
            </section>

}