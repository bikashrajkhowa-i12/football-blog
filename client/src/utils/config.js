export const APP_CONFIG = {
  app_name: "FootScribe90",
  app_domain: "footscribe90.com", //temp domain

  admin: {
    views: ["dashboard", "content-management", "users", "settings"],
  },

  auth: {
    views: ["login", "signup", "forgot_password"],
    login: {
      title: "Login to FootScribe90",
      prompt:
        "Welcome back! Log in to catch up on the latest sports stories and updates.",
      error: "Invalid email or password. Please try again.",
      success: "Login successful! Redirecting to the action...",
    },
    signup: {
      title: "Sign up to FootScribe90",
      prompt:
        "Be part of the fan squad. Sign up to follow your favorite teams and never miss a match update.",
      success: "Your account has been created. Welcome aboard!",
      error: "Sign up failed. Please check your details and try again.",
      existing_account: "Already have an account?",
    },
    forgot_password: {
      title: "Password Recovery",
      prompt:
        "Enter the email associated with your account, and we’ll send you a link to reset your password.",
      not_found: "We couldn't find an account with that email address.",
      too_soon:
        "You've recently requested a password reset. Please check your email or try again later.",
      success:
        "If an account with that email exists, a reset link has been sent. Please check your inbox and spam folder.",
    },
  },
};
