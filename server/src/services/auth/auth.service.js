const jwt = require("jsonwebtoken");

const { User } = require("../../modals/index");
const { verifyPassword, hashPassword } = require("./password.service");

const findUserByEmail = async (email) => {
  try {
    return await User.findOne({ where: { email } });
  } catch (error) {
    throw error;
  }
};

const createUser = async (data) => {
  try {
    return await User.create(data);
  } catch (error) {
    throw error;
  }
};

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

    return {
      id: user.id,
      email: user.email,
      role: user.role,
      status: user.status,
      name: user.name,
    };

    // Issue token
    // const token = jwt.sign(
    //   { id: user.id, isAdmin: user.isAdmin },
    //   process.env.JWT_SECRET,
    //   { expiresIn: "1d" }
    // );
    // return { user, token };
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
    const { id, name, username, email, role, status } = await createUser({
      ...data,
      password: hashedPassword,
    });

    return { id, name, username, email, role, status };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  login,
  signup,
};
