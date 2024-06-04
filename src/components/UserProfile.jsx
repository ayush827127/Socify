// src/components/UserProfile.jsx
import React, { useEffect, useState } from 'react';
import { getUserFollowers, getUserFollowing } from '../api';

const UserProfile = ({ user }) => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const fetchedFollowers = await getUserFollowers(user.email);
      const fetchedFollowing = await getUserFollowing(user.email);
      setFollowers(fetchedFollowers);
      setFollowing(fetchedFollowing);
    };
    
    fetchUserDetails();
  }, [user]);

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">{user.username}</h1>
      <div className="flex justify-between">
        <p className="text-lg font-semibold">Followers: {followers.length}</p>
        <p className="text-lg font-semibold">Following: {following.length}</p>
      </div>
    </div>
  );
};

export default UserProfile;
