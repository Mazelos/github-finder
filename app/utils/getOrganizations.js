import axios from "axios";

// get the organizations linked to the account 
const getOrganizations = async (organization_link) => {
  try {
    const resp = await axios.get(getOrganizations);
    console.log(resp.data);
    return resp.data;
  } catch (err) {
    return { error: err.message };
  }
};

export default getOrganizations;