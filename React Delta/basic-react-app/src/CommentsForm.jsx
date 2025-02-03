import { useState } from "react"

export default function() {
    let [formData, setFormData] = useState({
        username : "",
        remarks : "",
        rating : 5
    })

    let handleInputChange = (event) => {
        setFormData( (currData) => {
            return {...currData, [event.target.name] : event.target.value};
        })
    }

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username : "",
            remarks : "",
            rating : 5
        })
    }

    return (
        <div>
            <h2>Add a comment</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input placeholder="username" 
                type="text" 
                value={formData.username} 
                onChange={handleInputChange}
                name="username"
                id="username"/>
                <br></br> <br></br>

                <label htmlFor="remakrs">Remarks: </label>
                <textarea placeholder="add remarks" 
                value={formData.remarks} 
                onChange={handleInputChange}
                name="remarks"
                id="remarks">Remarks</textarea>
                <br></br> <br></br>

                <label htmlFor="rating">Ratings: </label>
                <input placeholder="rating" 
                type="number" min={1} max={5} 
                value={formData.rating} 
                onChange={handleInputChange}
                name="rating"
                id="rating"/>
                <br></br>  <br></br>

                <button>Add Comment</button>
            </form>
        </div>
    )
}