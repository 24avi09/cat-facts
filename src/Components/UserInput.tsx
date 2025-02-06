/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";

const UserInput = () => {
    const navigate = useNavigate();
    const onFormSubmit = (e: any) => {
        e?.preventDefault()
        const noOfFacts: any = document.getElementById("noOfFacts");

        if (noOfFacts?.value === 0) {
            alert("Please enter a number greater than 0. eg: 1,2,3")
        } else {
            navigate(`/result/${noOfFacts?.value}`)
        }

    }

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} >
            <h1>"Cat Facts Generator</h1>
            <h2>Discover interesting facts about cats!"</h2>
            <form onSubmit={onFormSubmit} style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.5rem" }}  >
                <label htmlFor="noOfFacts">“How many facts about cats do you want to see?”</label>
                <input type="number" id="noOfFacts" name="noOfFacts" />
                <input type="submit" value="Submit" style={{ maxWidth: 200 }} />
            </form>
        </div>
    )
}

export default UserInput