import { callExternalApi } from "./external-api.service";

const apiServerUrl1 = process.env.REACT_APP_API_SERVER_1_URL;
const apiServerUrl2 = process.env.REACT_APP_API_SERVER_2_URL;

const apiServerUrls = [apiServerUrl1, apiServerUrl2];

export const getServerApproval = async (accessToken) => {
    const serverData = []
    const errorData = []
    for (let i = 0; i < apiServerUrls.length; i++) {
        const config = {
            url: `${apiServerUrls[i]}/dev/get_instructions`,
            method: "GET",
            headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            },
        };
        const { data, error } = await callExternalApi({ config });
        serverData.push(data)
        errorData.push(error)
    }



    return {
        data: serverData || null,
        errorData,
    };
};