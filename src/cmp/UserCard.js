function UserCard({ user }) {

    if (user) {
        return <div className="card w-25 m-5 text-center mx-auto">
            <div className="card-header">
                User Info:
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{user.firstName}</li>
                <li className="list-group-item">{user.lastName}</li>
                <li className="list-group-item">{user.score}</li>
            </ul>
        </div>
    }
    else {
        return <div>
            <h2 className="text-center m-3">There is no user with such an ID in the DB. Choose another ID</h2>
        </div>
    }




}

export default UserCard;