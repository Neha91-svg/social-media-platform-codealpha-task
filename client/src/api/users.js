import { BASE_URL } from "../config";

const signup = async (user) => {
  try {
    const res = await fetch(BASE_URL + "api/users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const login = async (user) => {
  try {
    const res = await fetch(BASE_URL + "api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (params) => {
  try {
    const res = await fetch(BASE_URL + "api/users/" + params.id);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const getRandomUsers = async (query) => {
  try {
    const res = await fetch(
      BASE_URL + "api/users/random?" + new URLSearchParams(query)
    );
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (user, data) => {
  try {
    const res = await fetch(BASE_URL + "api/users/" + user._id, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": user.token,
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const followUser = async (userId, targetUserId, token) => {
  try {
    const res = await fetch(BASE_URL + "api/users/follow/" + targetUserId, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify({ userId }),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const unfollowUser = async (userId, targetUserId, token) => {
  try {
    const res = await fetch(BASE_URL + "api/users/unfollow/" + targetUserId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify({ userId }),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const getFollowers = async (userId) => {
  try {
    const res = await fetch(BASE_URL + "api/users/followers/" + userId);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export { signup, login, getUser, getRandomUsers, updateUser, followUser, unfollowUser, getFollowers };
