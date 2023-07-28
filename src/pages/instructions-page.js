import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { CodeSnippet } from "../components/code-snippet";
import { PageLayout } from "../components/page-layout";
import { getServerOneApproval } from "../services/server-one-approval";
import { getServerTwoApproval } from "../services/server-two-approval";

export const InstructionsPage = () => {
  const [message, setMessage] = useState("");
  const { getAccessTokenSilently } = useAuth0();
  const [title, setTitle] = useState("Instructions")

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const accessToken = await getAccessTokenSilently();
      const { dataServerOne, errorServerOne } = await getServerOneApproval(accessToken);
      const { dataServerTwo, errorServerTwo } = await getServerTwoApproval(accessToken);
    
      if (!isMounted) {
        return;
      }

      if (dataServerOne && dataServerTwo) {
        setMessage(JSON.stringify(dataServerOne, null, 2));
      }

      if (errorServerOne) {
        setMessage(JSON.stringify(errorServerOne, null, 2));
      }

      if (errorServerTwo) {
        setMessage(JSON.stringify(errorServerTwo, null, 2));
      }

      if (dataServerOne.message === "You don't have access to this resource") {
        setTitle("You don't have access to this resource")
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, [getAccessTokenSilently]);

  return (
    <PageLayout>
      <div className="content-layout">
        <h1 id="page-title" className="content__title">
          {title}
        </h1>
        <div className="content__body">
          <p id="page-description">
            <span>
              This page retrieves <strong>instructions</strong> from an
              external API.
            </span>
            <span>
              <strong>
                Only authenticated users with the{" "}
                <code>create:endpoint</code> permission should access this
                page.
              </strong>
            </span>
          </p>
          <CodeSnippet title="Instructions" code={message} />
        </div>
      </div>
    </PageLayout>
  );
};
