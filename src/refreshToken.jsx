import axios from "axios";

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  try {
    const response = await axios.post("your_refresh_token_endpoint", {
      refresh_token: refreshToken,
    });

    const newAccessToken = response.data.access_token;
    // Update the stored access token with the new one
    localStorage.setItem("accessToken", newAccessToken);

    return newAccessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    // Handle the error, e.g., redirect to login
    return null;
  }
};
