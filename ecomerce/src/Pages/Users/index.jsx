import { useEffect } from "react";
import UsersService from "../../services/UsersService";
const Users = () => {
  useEffect(() => {
    const service = new UsersService();
    service.getUsers(callbackSuccesGetUsers, callbackErrorGetUsers);
  }, []);

  const callbackSuccesGetUsers = (res) => {
    const { data, status } = res;
    console.log(data);
    console.log(status);
  };
  const callbackErrorGetUsers = (err) => {
    console.log(err);
  };
  return (
    <>
      <h1>Hola!</h1>
    </>
  );
};

export default Users;
