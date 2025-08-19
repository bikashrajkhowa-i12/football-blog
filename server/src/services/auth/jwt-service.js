import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Generate short-lived access token (JWT)
export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role || "user",
    },
    process.env.JWT_SECRET,
    { expiresIn: "15m" }
  );
};

// Verify access token (JWT)
export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

//Generate long-lived refresh token
export const generateRefreshToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });
};

// Verify refresh token
export const verifyRefreshToken = (token) => {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
};

// Verify Google ID token and return user payload
export const verifyGoogleToken = async (idToken) => {
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    return ticket.getPayload();
  } catch (err) {
    throw new Error("Invalid Google token");
  }
};

export const generateAuthTokens = (user) => {
  return {
    accessToken: generateToken(user),
    refreshToken: generateRefreshToken(user),
  };
};
