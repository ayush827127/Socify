import React, { useEffect, useState } from "react";
import UserProfile from "./components/UserProfile";
import UserList from "./components/UserList";
import { getAllUsers } from "./api";

const App = () => {
  const [defaultUser, setDefaultUser] = useState(null);

  useEffect(() => {
    const fetchDefaultUser = async () => {
      const users = await getAllUsers();
      setDefaultUser(users[7]); // Assuming the first user is the default user
    };

    fetchDefaultUser();
  }, []);

  if (!defaultUser) {
    return (
      <div className="animate-pulse flex flex-wrap justify-center mt-40 md:mt-20">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-500 w-64 h-64 rounded-lg m-2"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-8">
        {/* <h1 className="text-5xl mx-auto">Socify</h1> */}
        <UserProfile user={defaultUser} />
        <UserList defaultUser={defaultUser} />
      </div>
    </div>
  );
};

export default App;
