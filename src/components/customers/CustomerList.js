import { useEffect, useState } from "react"
import "./Customers.css"
import { Customer } from "./Customer.js"
import { getAllCustomers } from "../ApiManager.js"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getAllCustomers()
            .then((customerArray) => {
                setCustomers(customerArray)
            })
        }, []
    )

    return <article className="customers">
        {
            customers.map(customer => <Customer key={`Customer--${customer.id}`}
                                        id={customer.id} 
                                        fullName={customer.fullName} 
                                        email={customer.email} />)
        }
    </article>
}