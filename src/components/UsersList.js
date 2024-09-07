import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";
import { useSelector } from "react-redux";

function UsersList() {
   const dispatch = useDispatch();

   const { isLoading, data, error } = useSelector((state) => {
      return state.users; // { data: [], isLoading: false, error: null }
   });

   useEffect(() => {
      dispatch(fetchUsers());
   }, []);

   if(isLoading){
      return <div>Loading...</div>;
   }

   if(error){
      return <div>Error fetching data!</div>;
   }

   return <div>{data.length}</div>;

}

export default UsersList;