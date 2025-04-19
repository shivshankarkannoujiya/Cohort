class ApiClient {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1";
    this.defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  // Custom fetch Method
  async customFetch(endpoint, options = {}) {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const headers = { ...this.defaultHeaders, ...options?.headers };

      const config = {
        ...options,
        headers,
        credentials: "include", // important for cookies
      };

      console.log(`Fetching: ${url}`);
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API Error: ", error);
    }
  }

  /**
   * @description Auth endpoints
   */
  async signup(name, email, password) {
    return this.customFetch("/users/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
  }

  async login(email, password) {
    return this.customFetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  }

  async getProfile() {
    return this.customFetch("/users/me");
  }
}

/**
 * @description
 * Singleton: Only one `Instance` banega.
 * After that we do not need to create `Instance` again and again in each component.
 * Import the `Instance` and use it.
 */

const apiClient = new ApiClient();

export default apiClient;
