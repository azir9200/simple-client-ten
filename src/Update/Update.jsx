import { useLoaderData } from 'react-router-dom'

const Update = () => {
  const loadedUsers = useLoaderData();

  const handleUpdateUser = event => {

    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

  return (
    <div>
      <h1>Update here...  {loadedUsers.name} </h1>
      <form onSubmit={handleUpdateUser}  >
        <input type="text" name='name' defaultValue={loadedUsers?.name} id='' /><br />
        <input type="email" name='email' defaultValue={loadedUsers.email} id='' /><br />
        <input type="Submit" name='Update User' id='' />

      </form>
    </div>
  );
};

export default Update;