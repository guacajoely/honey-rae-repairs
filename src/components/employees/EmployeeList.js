import { getAllEmployees } from "../ApiManager.js"
import { Employee } from "./Employee.js"
import "./Employees.css"
import { useEffect, useState } from "react"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployees()
            .then((employeeArray) => {
                setEmployees(employeeArray)
            })
        }, []
    )

    return <article className="employees">
        {
            employees.map(employee => <Employee key={`employee--${employee.id}`}
                                        id={employee.id} 
                                        fullName={employee.fullName} 
                                        email={employee.email} />)
        }
    </article>
}