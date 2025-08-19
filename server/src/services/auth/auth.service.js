const {
  generateAuthTokens,
  verifyGoogleToken,
  verifyRefreshToken,
  generateToken,
} = require("./jwt-service");
const { findUserByEmail, createUser } = require("./common-service");
const { verifyPassword, hashPassword } = require("./password.service");
const authDto = require("../../dtos/auth.dto");
const { extractFields } = require("./helper");

const login = async ({ email, password }) => {
  try {
    const user = await findUserByEmail(email);
    if (!user) {
      throw new Error(`Invalid email or password.`);
    }

    const isMatch = await verifyPassword(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid email or password.");
    }

    const authTokens = generateAuthTokens(user);

    return { user: extractFields(user), ...authTokens };
  } catch (error) {
    throw error;
  }
};

const signup = async (data) => {
  try {
    const exists = await findUserByEmail(data.email);
    if (exists)
      throw new Error(
        `An account with this email already exists. Please log in.`
      );

    const hashedPassword = await hashPassword(data.password);
    const user = await createUser({ ...data, password: hashedPassword });
    const authTokens = generateAuthTokens(user);

    return { user: extractFields(user), ...authTokens };
  } catch (error) {
    throw error;
  }
};

const authenticateWithGoogle = async (credential) => {
  try {
    const payload = await verifyGoogleToken(credential);
    let user = await findUserByEmail(payload.email);

    if (!user) {
      const userDto = new authDto.GoogleAuth(payload);
      user = await createUser(userDto);
    }

    const authTokens = generateAuthTokens(user);

    return { user: extractFields(user), ...authTokens };
  } catch (error) {
    throw error;
  }
};

const renewAuthTokens = async (token) => {
  try {
    const decoded = verifyRefreshToken(token);
    const user = await findUserByEmail(decoded.id);
    if (!user)
      throw new Error("User doesn't exist for with the refresh token!");

    return generateToken(user);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  login,
  signup,
  authenticateWithGoogle,
  renewAuthTokens,
};
