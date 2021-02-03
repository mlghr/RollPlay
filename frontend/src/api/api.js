import axios from "axios";

const RU_API = "https://randomuser.me/api";
const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 *
 */

class RollplayApi {
  // the token for interacting with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${RollplayApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try { 
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get the current user. */

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Get random user from randomuser.me API */
  static async getUserRandomMe(){ 
    // The information returned can be altered in the params if needed
    let randomMeRes = await axios.get(`${RU_API}/?inc=name,location,dob,login,picture,email,id&results=1`);
    const randomUser = randomMeRes.data.results[0];

    return randomUser;
  }

  /** retrieve random user from DB */

  static async getRandomUser(){
    let res = await this.request(`matches/random`);

    return res.user;
  }

  // EVALUATION REQUESTS

  /** Create new match for a user --> args are user viewing profiles and the profile the user is viewing */

  static async createEvaluation(data) {
    console.log(data)
    let res = await this.request(`evaluations/create`, data, "post");
    return res.user;
  }

  /** returns all of user's matches (evaluation == 'accepted') */

  static async getUserMatches(username) {
    let res = await this.request(`evaluations/matches/${username}`);
    return res;
  }


  // AUTH REQUESTS

  /** Get token for login from username, password. */

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  /** Signup for site. */

  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }

  /** Save user profile page. */

  static async saveProfile(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}


export default RollplayApi;
