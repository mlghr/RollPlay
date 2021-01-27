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

  /** returns all of user's matches (evaluation == 'accepted') */

  static async getUserMatches(username) {
    let res = await this.request(`evaluations/${username}`);
    return res;
  }

  /** Get random user from randomuser.me API */
  static async getUserRandomMe(){ 
    // The information returned can be altered in the params if needed
    let randomMeRes = await axios.get(`${RU_API}/?inc=name,location,dob,login,picture,email,id&results=1`);
    const randomUser = randomMeRes.data.results[0];

    return randomUser;
  }

  static async getRandomUser(){
    let res = await axios.get(`${BASE_URL}/users/random`)
    console.log(res);
    return res;
  }

  /** Create new match for a user --> args are user viewing profiles and the profile the user is viewing */

  static async createEvaluation(userEvaluating, userEvaluated) {
    let res = await this.request(`evaluations/create`, {userEvaluating, userEvaluated}, "post");
    return res.user;
  }

  /** get random user from database */


  /** Get companies (filtered by name if not undefined) */

  static async getCompanies(name) {
    let res = await this.request("companies", { name });
    return res.companies;
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get list of jobs (filtered by title if not undefined) */

  static async getJobs(title) {
    let res = await this.request("jobs", { title });
    return res.jobs;
  }

  /** Apply to a job */

  static async applyToJob(username, id) {
    await this.request(`users/${username}/jobs/${id}`, {}, "post");
  }

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
