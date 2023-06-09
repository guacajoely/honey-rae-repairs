import "./NavBar.css"
import { EmployeeNav } from "./EmployeeNav.js"
import { CustomerNav } from "./CustomerNav.js"

export const NavBar = () => {

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    if(honeyUserObject.staff) {
        return <EmployeeNav />
    }

    else{
        return <CustomerNav />
    }

}

