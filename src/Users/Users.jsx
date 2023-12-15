import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData()
  const [users, setUsers] = useState(loadedUsers);


  const handleDelete = _id => {
    fetch(`http://localhost:5000/users/${_id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.deletedCount > 0) {
          alert('deleted Successfully !');
          const remaining = users.filter(user => user._id !== _id);
          setUsers(remaining)
        }
      });
  }

  return (
    <div>
      <h2 className="text-3xl">all users</h2>
      <h2>  total users {users.length} </h2>
      <div>
        {
          users.map(user => <p key={user._id}>
            {user.name} : {user.email}
            <Link to={`/update/${user._id}`}  >   Update</Link>

            <button onClick={() => handleDelete(user._id)} >Click</button> </p>)
        }
      </div>

    </div>
  );
};

export default Users;