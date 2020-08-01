import axios from "axios";

// function used by Form to fetch data from the github api passing the userName typed by the user
const getUsers = async (userName) => {
  try {
    // console.log(`username submitted: ${userName}`);
    const resp = await axios.get(`https://api.github.com/users/${userName}`);
    // console.log(resp.data);
    return resp.data;
  } catch (err) {
    return { error: err.message };
  }
};

export default getUsers;