class Signup {
  constructor({ email, password }) {
    const normalizedEmail = email.trim().toLowerCase();

    this.email = normalizedEmail;
    this.password = password; // hashing in service
    this.username = this.generateUsername(normalizedEmail);
    this.role =
      process.env.ADMIN_MAIL?.toLowerCase() === normalizedEmail
        ? "admin"
        : "user";
    this.status = "active";
  }

  generateUsername(email) {
    if (process.env.ADMIN_MAIL?.toLowerCase() === email) return "admin";

    const prefix = email.split("@")[0];
    const uniqueSuffix = Math.random().toString(36).substring(2, 8);
    return `${prefix.toLowerCase()}_${uniqueSuffix}`;
  }
}

module.exports = { Signup };
