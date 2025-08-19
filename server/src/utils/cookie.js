// src/utils/cookie.js
const setAuthCookies = (res, refreshToken) => {
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // HTTPS in prod
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};

const clearAuthCookies = (res) => {
  res.clearCookie("refreshToken");
};

module.exports = {
  setAuthCookies,
  clearAuthCookies,
};
