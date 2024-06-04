import React from 'react';
import { followUser, unfollowUser, getUserFollowers, getUserFollowing } from '../api';

const UserCard = ({ user, defaultUser, isFollowing, onFollowChange }) => {
  const handleFollow = async () => {
    if (isFollowing) {
      await unfollowUser(defaultUser.email, user.email);
      user.followers.pop();
    } else {
      await followUser(defaultUser.email, user.email);
      user.followers.push("gfskgfsjfjjj");
    }
    // Update the followers and following after follow/unfollow action
    const fetchedFollowers = await getUserFollowers(defaultUser.email);
    const fetchedFollowing = await getUserFollowing(defaultUser.email);
    onFollowChange(fetchedFollowers, fetchedFollowing);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
      <div className="flex items-center justify-center mb-4">
        <img src={user.profilePic} alt={user.username} className="w-16 h-16 rounded-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-center">{user.username}</h3>
      <div className="flex justify-center mt-2">
        <p className="text-sm text-gray-600 mr-4">
          <span className="font-semibold">{user.followers ? user.followers.length : 0}</span> Followers
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">{user.following ? user.following.length : 0}</span> Following
        </p>
      </div>
      <button
        onClick={handleFollow}
        className={`w-full mt-4 py-2 rounded-md ${
          isFollowing ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
        }`}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default UserCard;
