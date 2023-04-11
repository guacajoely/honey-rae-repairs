import { useState } from "react"
import { TicketList } from "./TicketList.js"
import { TicketSearch } from "./TicketSearch.js"

export const TicketContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
     <TicketSearch setterFunction={setSearchTerms} />
    <TicketList searchTermState={searchTerms}/>  

    </>
}