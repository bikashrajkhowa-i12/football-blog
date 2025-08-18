const authDto = require("../../dtos/auth.dto");
const authService = require("../../services/auth/auth.service");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login({ email, password });
    res.json({ user: result, message: "Login successful!!" });
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
    const newUser = await authService.signup(signupDto);
    res.status(201).json({ user: newUser, message: "Sign-up successful!!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Option A: OAuth Redirect Flow
const googleAuth = (req, res) => {
  // Redirect user to Google OAuth page
  res.send("Redirect to Google OAuth");
};

const googleCallback = (req, res) => {
  res.send("Google OAuth callback");
};

// Option B: Token Verification Flow
const googleLogin = async (req, res) => {
  try {
    const { token } = req.body;
    // Verify Google token (using Google API or client library)
    // Find or create user in DB
    // Generate JWT token
    return res.json({
      message: "Google login successful",
      token: "JWT_TOKEN",
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// ==========================
// Password Reset
// ==========================

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    // 1. Generate reset token
    // 2. Send email with link
    return res.json({ message: "Password reset link sent" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
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

module.exports = {
  login,
  logout,
  signup,
  googleAuth,
  googleCallback,
};
