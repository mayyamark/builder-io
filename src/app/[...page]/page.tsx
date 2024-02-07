import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
// import { getClient } from "@/apollo";
// import { GetLinksDocument } from "@/graphql/queries/__generated__/GetLinks.types";

import 'dotenv/config'

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// export const dynamic = "force-dynamic";

interface PageProps {
  params: {
    page: string[];
  };
}

const getLinks = async () => {
  const response = await fetch(`https://cdn.builder.io/api/v1/graphql/${process.env.NEXT_PUBLIC_BUILDER_API_KEY!}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ 
      query: `
        query GetLinks {
          link {
            data {
              href
              label
            }
          }
        }
      ` 
    }
  ),
});

  const links = await response.json();

  return links;
}

export default async function Page(props: PageProps) {
  // const data = await getClient().query<Response>({
  //   query: GetLinksDocument,
  // });

  const data = await getLinks();

  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} data={data} />
    </>
  );
}
