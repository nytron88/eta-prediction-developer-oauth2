import { callExternalApi } from "./external-api.service";

const apiServerUrl = process.env.REACT_APP_API_SERVER_2_URL;

export const getServerTwoApproval = async (accessToken) => {
  const config = {
    url: `${apiServerUrl}/dev/get_instructions`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data, error } = await callExternalApi({ config });

  const errorServerTwo = error;

  return {
    dataServerTwo: data || null,
    errorServerTwo,
  };
};
