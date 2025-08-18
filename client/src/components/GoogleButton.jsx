import { useEffect } from "react";

/**
  "signin_with" → Sign in with Google

  "signup_with" → Sign up with Google

  "continue_with" → Continue with Google

  "signin" -> Sign in
 */

function GoogleButton() {
  useEffect(() => {
    /* global google */
    //TODO: read client_id from .env through redux
    google.accounts.id.initialize({
      client_id:
        "92919536654-5gupl6m7p0h9jgn10vs8p0mq30mkmio6.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(document.getElementById("googleBtn"), {
      theme: "outline",
      size: "large",
      text: "continue_with",
    });
  }, []);

  const handleCredentialResponse = (response) => {
    // response.credential = JWT from Google
    fetch("/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credential: response.credential }),
    });
  };

  return <div id="googleBtn"></div>;
}

export default GoogleButton;
