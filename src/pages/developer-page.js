import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getPermissionsResource, apiServerUrls } from "../services/api.service";

export const DeveloperPage = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [accessToken, setAccessToken] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const getAccessToken = async () => {
      const accessToken = await getAccessTokenSilently();
      setAccessToken(accessToken);
    };

    getAccessToken();

  }, [getAccessTokenSilently]);

  useEffect(() => {
    const getPermission = async () => {
      const firstTimeAccessToken = await getAccessTokenSilently();
      const { data, error } = await getPermissionsResource(firstTimeAccessToken);
      const isAuthorized = data.permissions.indexOf("create:endpoint") > -1;
      setIsAuthorized(isAuthorized)
      
    };

    getPermission();

  }, []);

  let instructions = '';
  for (let i = 0; i < apiServerUrls.length; i++) {
    instructions += 'curl -X POST --location ' + apiServerUrls[i] + '/api/dev/create_endpoint \\\n';
    instructions += '--header \'Content-Type: application/json\' \\\n';
    instructions += '--header \'Authorization: Bearer ' + accessToken + '\' \\\n';
    instructions += '--data \'{\n';
    instructions += '    \"endpoint\": \"<endpoint name>\",\t## This can currently be either get_eta_data or post_eta_data\n';
    instructions += '    \"task\": \"<task>\",\t\t\t## This can currently be either get_eta_data or post_eta_data\n';
    instructions += '}\'\n\n';
  }

  if (!isAuthorized) {
    return (
      <PageLayout>
        <div className="content-layout">
          <h1 id="page-title" className="content__title">
            Protected Page
          </h1>
          <div className="content__body">
            <p id="page-description">
              <span>
              This page retrieves instructions that can be used to create the end points on Privacy Guradian.
              </span>
              <span>
              <strong>
                Only authenticated users with the{" "}
                <code>developer</code> role should access this
                page.
              </strong>
            </span>
            </p>
            <CodeSnippet title="Unauthorized!!!" code="You don't have permission to access this resource. Please contact the administrator." />
          </div>
        </div>
      </PageLayout>
    );

  } else {
    return (
      <PageLayout>
        <div className="content-layout">
          <h1 id="page-title" className="content__title">
            Developer Zone
          </h1>
          <div className="content__body">
            <p id="page-description">
              <span>
                Here are the instructions you can use to create end points on the Privacy Guardian.
              </span>
              <span>
                <strong>
                  Only authenticated users with the{" "}
                  <code>developer</code> role should access this
                  page.
                </strong>
              </span>
            </p>
            <CodeSnippet title="Instructions" code={instructions} />
          </div>
        </div>
      </PageLayout>
    );
  }
};
