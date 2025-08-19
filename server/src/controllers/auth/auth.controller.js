const authDto = require("../../dtos/auth.dto");
const authService = require("../../services/auth/auth.service");
const {
  verifyRefreshToken,
  generateToken,
} = require("../../services/auth/jwt-service");
const { setAuthCookies } = require("../../utils/cookie");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { accessToken, refreshToken, user } = await authService.login({
      email,
      password,
    });

    setAuthCookies(res, refreshToken);

    res.status(201).json({ accessToken, user, message: "Login successful" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Logout
const logout = async (req, res) => {
  try {
    // You can clear token on frontend or blacklist token on backend
    return res.json({ message: "Logout successful" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Register a new user
const signup = async (req, res) => {
  try {
    const signupDto = new authDto.Signup(req.body);
    const { accessToken, refreshToken, user } = await authService.signup(
      signupDto
    );

    setAuthCookies(res, refreshToken);

    res.status(201).json({ accessToken, user, message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    // 1. Verify reset token
    // 2. Hash new password
    // 3. Save user with new password
    return res.json({ message: "Password reset successful" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const googleAuth = async (req, res) => {
  try {
    const { credential } = req.body;
    const { accessToken, refreshToken, user } =
      await authService.authenticateWithGoogle(credential);

    setAuthCookies(res, refreshToken);

    res
      .status(201)
      .json({ accessToken, user, message: "Google-Authentication Successful" });
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Invalid Google token" });
  }
};

const refreshAccessToken = async (req, res) => {
  try {
    const token = req.refreshToken;
    const newAccessToken = await authService.renewAuthTokens(token);
    return res.json({ accessToken: newAccessToken });
  } catch (err) {
    return res.status(401).json({ message: "Invalid refresh token" });
  }
};

module.exports = {
  login,
  logout,
  signup,
  googleAuth,
  refreshAccessToken,
};
