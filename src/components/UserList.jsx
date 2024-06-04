import React, { useEffect, useState } from "react";
import { getAllUsers, getUserFollowers, getUserFollowing } from "../api";
import UserCard from "./UserCard";

const UserList = ({ defaultUser }) => {
  const [users, setUsers] = useState([]);
  const [userFollowers, setUserFollowers] = useState([]);
  const [userFollowing, setUserFollowing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      const fetchedUsers = await getAllUsers();
      setUsers(fetchedUsers);

      const fetchedFollowers = await getUserFollowers(defaultUser.email);
      setUserFollowers(fetchedFollowers);

      const fetchedFollowing = await getUserFollowing(defaultUser.email);
      setUserFollowing(fetchedFollowing);
      setLoading(false);
    };

    fetchUsers();
  }, [defaultUser]);

  const handleFollowChange = async (newFollowers, newFollowing) => {
    setUserFollowers(newFollowers);
    setUserFollowing(newFollowing);
  };

  return (
    <>
      {loading ? (
        <div className="animate-pulse flex flex-wrap justify-center mt-40 md:mt-20">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-500 w-64 h-64 rounded-lg m-2"
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-screen-lg">
          {users.map((user) => (
            <div key={user._id} className="max-w-96">
              <UserCard
                user={user}
                defaultUser={defaultUser}
                isFollowing={userFollowing.some(
                  (follow) => follow._id === user._id
                )}
                onFollowChange={handleFollowChange}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UserList;
