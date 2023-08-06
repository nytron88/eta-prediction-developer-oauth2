import { callExternalApi } from "./external-api.service";

const apiServer1Url = process.env.REACT_APP_R_SERVER_URL;
const apiServer2Url = process.env.REACT_APP_X_R_SERVER_URL;
export const apiServerUrls = [apiServer1Url, apiServer2Url];

export const getPermissionsResource = async (accessToken) => {
  //console.log("Getting permissions")
  const config = {
    url: `${apiServerUrls[0]}/api/all/get_permissions`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  //console.log("Calling external API: " + config)

  const { data, error } = await callExternalApi({ config });

  //console.log(data)
  //console.log(error)

  return {
    data: data || null,
    error,
  };
};