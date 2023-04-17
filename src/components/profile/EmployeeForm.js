import { useEffect, useState } from "react"
import { editEmployee, getEmployeeById } from "../ApiManager.js"

export const EmployeeForm = () => {
    // TODO: Provide initial state for profile
    const [profile, updateProfile] = useState({
        specialty:"",
        rate: 0,
        userId: 0
    })

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    // TODO: Get employee profile info from API and update state
    useEffect(() => {
        getEmployeeById(honeyUserObject.id)
            .then((employeeArray) => {
                const employeeObject = employeeArray[0]
                updateProfile(employeeObject)
            })
    }, [])


    ////////////////////////////////////////////////////////////////////////////////////////////////
    // FEEDBACK CH 13 - Add the following state and observer code.
    const [feedback, setFeedback] = useState("")

    useEffect(() => {
        if (feedback !== "") {
            // Clear feedback to make entire element disappear after 3 seconds
            setTimeout(() => setFeedback(""), 3000);
        }
    }, [feedback])
    /////////////////////////////////////////////////////////////////////////////////////////////



    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        /*
            TODO: Perform the PUT fetch() call here to update the profile.
            Navigate user to home page when done.
        */
            editEmployee(profile)

            // FEEDBACK CH 13 - chain the following Promise code to your PUT operation.
            .then(() => {
                setFeedback("Employee profile successfully saved")
            })


    }

    return (
        <>
        {/* FEEDBACK CH 13 - Add the following JSX above the profile form element */}
        <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
            {feedback}
        </div>
        

        <form className="profile">
            <h2 className="profile__title">Update Employee Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={profile.specialty}
                        onChange={
                            (event) => {
                                // TODO: Update specialty property
                                const copy = {...profile}
                                copy.specialty = event.target.value
                                updateProfile(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Hourly rate:</label>
                    <input type="number"
                        className="form-control"
                        value={profile.rate}
                        onChange={
                            (event) => {
                                // TODO: Update rate property
                                const copy = {...profile}
                                copy.rate = parseFloat(event.target.value, 2)
                                updateProfile(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
                onClick={(event) => handleSaveButtonClick(event)}
                className="btn btn-primary">
                Save Profile
            </button>
        </form>

        </>
    )
}