import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/RenderBuilderContent";
import { API_KEY } from "@/constatnts";

builder.init(API_KEY);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Test(props: PageProps) {
  console.log('here?')
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
    <RenderBuilderContent content={content} />
  </>
  );
}