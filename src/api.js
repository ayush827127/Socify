// src/api.js
import axios from 'axios';

const API_URL = "https://socifybackend-yt66.onrender.com"

export const getAllUsers = async () => {
  const response = await axios.get(`/api/user/all`);
  return response.data;
};

export const getUserFollowers = async (email) => {
  const response = await axios.get(`/api/user/followers/${email}`);
  return response.data;
};

export const getUserFollowing = async (email) => {
  const response = await axios.get(`/api/user/following/${email}`);
  return response.data;
};

export const followUser = async (followerEmail, followedEmail) => {
  const response = await axios.post(`/api/user/follow/${followedEmail}`, { followerEmail });
  return response.data;
};

export const unfollowUser = async (followerEmail, followedEmail) => {
  const response = await axios.post(`/api/user/unfollow/${followedEmail}`, { followerEmail });
  return response.data;
};
