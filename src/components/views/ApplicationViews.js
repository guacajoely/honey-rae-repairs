import { EmployeeViews } from "./EmployeeViews.js"
import { CustomerViews } from "./CustomerViews.js"

export const ApplicationViews = () => {

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    if(honeyUserObject.staff) {
        return <EmployeeViews />
    }

    else{
        return <CustomerViews />
    }
}

