import { useState } from "react";

function ChooseUser({ onChooseUserId }) {

    const [id, setId] = useState(-1);

    const handleChange = (id) => {
        onChooseUserId(id);
    }


    return (
        <div>
            <h1 className="text-center m-5">Choose the id of user to show the user:</h1>
            <div className="d-flex justify-content-center">

                <input className="rounded"
                    value={id}
                    onChange={(event) => { setId(event.target.value) }}
                    type="number"
                />
                <button className="btn btn-primary" onClick={() => handleChange(id)}>Get User!</button>
            </div>
        </div>
    )


}


export default ChooseUser;