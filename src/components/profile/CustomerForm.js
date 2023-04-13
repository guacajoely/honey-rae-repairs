import { useEffect, useState } from "react"

export const CustomerForm = () => {
    // TODO: Provide initial state for profile
    const [profile, updateProfile] = useState({
        address:"",
        phoneNumber: "",
        userId: 0
    })

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    // TODO: Get customer profile info from API and update state
    useEffect(() => {
        fetch(`http://localhost:8088/customers?userId=${honeyUserObject.id}`)
            .then(response => response.json())
            .then((customerArray) => {
                const customerObject = customerArray[0]
                updateProfile(customerObject)
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
            fetch(`http://localhost:8088/customers/${profile.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profile)

            })
            .then(response => response.json())

            // FEEDBACK CH 13 - chain the following Promise code to your PUT operation.
            .then(() => {
                setFeedback("Customer profile successfully saved")
            })


    }

    return (
        <>
        {/* FEEDBACK CH 13 - Add the following JSX above the profile form element */}
        <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
            {feedback}
        </div>
        

        <form className="profile">
            <h2 className="profile__title">Update Customer Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={profile.address}
                        onChange={
                            (event) => {
                                // TODO: Update address property
                                const copy = {...profile}
                                copy.address = event.target.value
                                updateProfile(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="text"
                        className="form-control"
                        value={profile.phoneNumber}
                        onChange={
                            (event) => {
                                // TODO: Update phoneNumber property
                                const copy = {...profile}
                                copy.phoneNumber = event.target.value
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