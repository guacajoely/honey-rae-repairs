import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getExpandedCustomerById } from "../ApiManager.js"

export const CustomerDetails = () => {

    const {customerId} = useParams()
    const [customer, updateCustomer] = useState({})

    useEffect(
        () => {
            getExpandedCustomerById(customerId)
            .then((customerArray) => {
                const singleCustomer = customerArray[0]
                updateCustomer(singleCustomer)
            })
        },
        [customerId]

    )

    return <section className="customer">
                <header className="customer__header">{customer?.user?.fullName}</header>
                <div>Email: {customer?.user?.email} </div>
                <div>Address: {customer?.address} </div>
                <div>Phone: {customer?.phoneNumber} </div>
            </section>

}