import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {

  const {user} = useAuth0();

  return (

    <>
   <h2>{user?.name}</h2>
   <img src={user?.picture} alt={user?.name} />
   <h3>{user?.email}</h3>
    </>

  )
}
