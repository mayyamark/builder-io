# Data fetching
## Client-side with generated queries
- Use Apollo Client to cache the queries
- Use Codegen to generate TS types and queries 
```javascript
import { useGetLinksQuery } from "@/graphql/queries/__generated__/GetLinks.types";

const Component = () => {
  const { data, loading } = useGetLinksQuery();

  if (loading) {
    return ...
  }

  return (
    <>
      {data.link.map((link) => ...)}
    </>
  )
}
```

## Server-side
### With Apollo's experimental Next.js 13 packages
- Use Apollo Client & the experimental packages to cache the queries
- Use Codegen to generate TS types and queries 
```javascript
// apollo.ts
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import 'dotenv/config'

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `https://cdn.builder.io/api/v1/graphql/${process.env.NEXT_PUBLIC_BUILDER_API_KEY!}`,
    }),
  });
});
```

```javascript
// src/app/.../page.tsx
import { getClient } from "@/apollo";
import { GetLinksDocument } from "@/graphql/queries/__generated__/GetLinks.types";

export const dynamic = "force-dynamic";

const Page async (props: PageProps) => {
  const data = await getClient().query<Response>({
    query: GetLinksDocument,
  });

  ...

  return (
    <RenderBuilderContent content={content} data={data} />
  )
}
```

```javascript
// src/components/.../index.tsx
const Component = (props: ComponentProps) => {
  const data = JSON.parse(JSON.stringify(props.builderState.state));

  if (data.loading) {
    return <div>Loading</div>
  }

  return (
    <>
      {data.data.link.map((link) => ...)}
    </>
  )
}
```

### Using just Fetch API
- Do not use Apollo at all
```javascript
// src/requests/getLinks.tsx
const getLinks = async () => {
  const response = await fetch(`https://cdn.builder.io/api/v1/graphql/${process.env.NEXT_PUBLIC_BUILDER_API_KEY!}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: `
      query GetLinks {
        link {
          data {
            href
            label
          }
        }
      }
      ` 
    }),
  });

  const links = await response.json();

  return links;
}
```

```javascript
// src/app/.../page.tsx
const Page async (props: PageProps) => {
  const data = await getLinks();

  ...

  return (
    <RenderBuilderContent content={content} data={data} />
  )
}
```

```javascript
// src/components/.../index.tsx
const Component = (props: ComponentProps) => {
  const data = JSON.parse(JSON.stringify(props.builderState.state));

  if (data.loading) {
    return <div>Loading</div>
  }

  return (
    <>
      {data.data.link.map((link) => ...)}
    </>
  )
}
```

#### Notes
Example of `ComponentProps`:
```json
{
  "builderState": {
      "context": {
          "apiKey": "991d115827054c99b26e22e9381d9cc0",
          "builderContent": {
              "lastUpdatedBy": "B77OfOJmNIWLIZ32pD5MaTZoplr2",
              "folders": [],
              "data": {
                  "inputs": [],
                  "themeId": false,
                  "title": "Test",
                  "blocks": [
                      {
                          "@type": "@builder.io/sdk:Element",
                          "@version": 2,
                          "id": "builder-6a75657ebec34deb93f12a2b6792054d",
                          "component": {
                              "name": "TechnologyConsultingSection",
                              "options": {}
                          },
                          "responsiveStyles": {
                              "large": {
                                  "display": "flex",
                                  "flexDirection": "column",
                                  "position": "relative",
                                  "flexShrink": "0",
                                  "boxSizing": "border-box",
                                  "marginTop": "20px"
                              }
                          }
                      },
                      {
                          "@type": "@builder.io/sdk:Element",
                          "@version": 2,
                          "id": "builder-1409c59c073b4804aeb26306a33fd240",
                          "component": {
                              "name": "ExpertServicesSection",
                              "options": {}
                          },
                          "responsiveStyles": {
                              "large": {
                                  "display": "flex",
                                  "flexDirection": "column",
                                  "position": "relative",
                                  "flexShrink": "0",
                                  "boxSizing": "border-box",
                                  "marginTop": "20px"
                              }
                          }
                      },
                      {
                          "@type": "@builder.io/sdk:Element",
                          "@version": 2,
                          "id": "builder-f5997340110943bab0f53426629428e7",
                          "component": {
                              "name": "PartnerSection",
                              "options": {}
                          },
                          "responsiveStyles": {
                              "large": {
                                  "display": "flex",
                                  "flexDirection": "column",
                                  "position": "relative",
                                  "flexShrink": "0",
                                  "boxSizing": "border-box",
                                  "marginTop": "20px"
                              }
                          }
                      },
                      {
                          "id": "builder-pixel-yw9g8g28hfq",
                          "@type": "@builder.io/sdk:Element",
                          "tagName": "img",
                          "properties": {
                              "src": "https://cdn.builder.io/api/v1/pixel?apiKey=991d115827054c99b26e22e9381d9cc0",
                              "aria-hidden": "true",
                              "alt": "",
                              "role": "presentation",
                              "width": "0",
                              "height": "0"
                          },
                          "responsiveStyles": {
                              "large": {
                                  "height": "0",
                                  "width": "0",
                                  "display": "inline-block",
                                  "opacity": "0",
                                  "overflow": "hidden",
                                  "pointerEvents": "none"
                              }
                          }
                      }
                  ],
                  "url": "/test",
                  "state": {
                      "deviceSize": "large",
                      "location": {
                          "pathname": "/test",
                          "path": [
                              "test"
                          ],
                          "query": {}
                      }
                  }
              },
              "modelId": "26039c799d974c8497c624ec454232df",
              "query": [
                  {
                      "@type": "@builder.io/core:Query",
                      "property": "urlPath",
                      "value": "/test",
                      "operator": "is"
                  }
              ],
              "published": "published",
              "screenshot": "https://cdn.builder.io/api/v1/image/assets%2F991d115827054c99b26e22e9381d9cc0%2F566890c688c0475bb8c48c314f585cf7",
              "firstPublished": 1707120891221,
              "testRatio": 1,
              "lastUpdated": 1707143856019,
              "createdDate": 1707120815854,
              "createdBy": "B77OfOJmNIWLIZ32pD5MaTZoplr2",
              "meta": {
                  "lastPreviewUrl": "http://localhost:3001/test?builder.space=991d115827054c99b26e22e9381d9cc0&builder.cachebust=true&builder.preview=page&builder.noCache=true&builder.allowTextEdit=true&__builder_editing__=true&builder.overrides.page=f6ac81ec74124a94a67ceda393c371fa&builder.overrides.f6ac81ec74124a94a67ceda393c371fa=f6ac81ec74124a94a67ceda393c371fa&builder.overrides.page:/test=f6ac81ec74124a94a67ceda393c371fa",
                  "kind": "page",
                  "hasLinks": false
              },
              "variations": {},
              "name": "Test",
              "id": "f6ac81ec74124a94a67ceda393c371fa",
              "rev": "e36uq3spz6",
              "variationId": null,
              "testVariationId": null,
              "testVariationName": ""
          }
      },
      "state": {
          "deviceSize": "large",
          "location": {
              "pathname": "/test",
              "path": [
                  "test"
              ],
              "query": {}
          },
          "data": {
              "link": [
                  {
                      "__typename": "Link",
                      "data": {
                          "__typename": "LinkData",
                          "href": "https://accedia.com/services/technology-consulting-services/cyber-security-services/",
                          "label": "Cyber Security"
                      }
                  },
                  {
                      "__typename": "Link",
                      "data": {
                          "__typename": "LinkData",
                          "href": "https://accedia.com/services/technology-consulting-services/technology-advisory-services/",
                          "label": "Technology Advisory"
                      }
                  },
                  {
                      "__typename": "Link",
                      "data": {
                          "__typename": "LinkData",
                          "href": "https://accedia.com/services/technology-consulting-services/solution-architecture-consulting/",
                          "label": "Solution Architecture"
                      }
                  },
                  {
                      "__typename": "Link",
                      "data": {
                          "__typename": "LinkData",
                          "href": "https://accedia.com/services/technology-consulting-services/ui-ux-design-services/",
                          "label": "UI/UX Design"
                      }
                  },
                  {
                      "__typename": "Link",
                      "data": {
                          "__typename": "LinkData",
                          "href": "https://accedia.com/services/technology-consulting-services/business-analysis-services/",
                          "label": "Business Analysis"
                      }
                  }
              ]
          },
          "loading": false,
          "networkStatus": 7,
          "isBrowser": true,
          "isServer": false,
          "device": "desktop"
      },
      "updates": 2,
      "key": 0,
      "rootState": {
          "deviceSize": "large",
          "location": {
              "pathname": "/test",
              "path": [
                  "test"
              ],
              "query": {}
          },
          "isBrowser": true,
          "isServer": false,
          "device": "desktop",
          "data": {
              "link": [
                  {
                      "__typename": "Link",
                      "data": {
                          "__typename": "LinkData",
                          "href": "https://accedia.com/services/technology-consulting-services/cyber-security-services/",
                          "label": "Cyber Security"
                      }
                  },
                  {
                      "__typename": "Link",
                      "data": {
                          "__typename": "LinkData",
                          "href": "https://accedia.com/services/technology-consulting-services/technology-advisory-services/",
                          "label": "Technology Advisory"
                      }
                  },
                  {
                      "__typename": "Link",
                      "data": {
                          "__typename": "LinkData",
                          "href": "https://accedia.com/services/technology-consulting-services/solution-architecture-consulting/",
                          "label": "Solution Architecture"
                      }
                  },
                  {
                      "__typename": "Link",
                      "data": {
                          "__typename": "LinkData",
                          "href": "https://accedia.com/services/technology-consulting-services/ui-ux-design-services/",
                          "label": "UI/UX Design"
                      }
                  },
                  {
                      "__typename": "Link",
                      "data": {
                          "__typename": "LinkData",
                          "href": "https://accedia.com/services/technology-consulting-services/business-analysis-services/",
                          "label": "Business Analysis"
                      }
                  }
              ]
          },
          "loading": false,
          "networkStatus": 7
      },
      "content": {
          "lastUpdatedBy": "B77OfOJmNIWLIZ32pD5MaTZoplr2",
          "folders": [],
          "data": {
              "inputs": [],
              "themeId": false,
              "title": "Test",
              "blocks": [
                  {
                      "@type": "@builder.io/sdk:Element",
                      "@version": 2,
                      "id": "builder-6a75657ebec34deb93f12a2b6792054d",
                      "component": {
                          "name": "TechnologyConsultingSection",
                          "options": {}
                      },
                      "responsiveStyles": {
                          "large": {
                              "display": "flex",
                              "flexDirection": "column",
                              "position": "relative",
                              "flexShrink": "0",
                              "boxSizing": "border-box",
                              "marginTop": "20px"
                          }
                      }
                  },
                  {
                      "@type": "@builder.io/sdk:Element",
                      "@version": 2,
                      "id": "builder-1409c59c073b4804aeb26306a33fd240",
                      "component": {
                          "name": "ExpertServicesSection",
                          "options": {}
                      },
                      "responsiveStyles": {
                          "large": {
                              "display": "flex",
                              "flexDirection": "column",
                              "position": "relative",
                              "flexShrink": "0",
                              "boxSizing": "border-box",
                              "marginTop": "20px"
                          }
                      }
                  },
                  {
                      "@type": "@builder.io/sdk:Element",
                      "@version": 2,
                      "id": "builder-f5997340110943bab0f53426629428e7",
                      "component": {
                          "name": "PartnerSection",
                          "options": {}
                      },
                      "responsiveStyles": {
                          "large": {
                              "display": "flex",
                              "flexDirection": "column",
                              "position": "relative",
                              "flexShrink": "0",
                              "boxSizing": "border-box",
                              "marginTop": "20px"
                          }
                      }
                  },
                  {
                      "id": "builder-pixel-yw9g8g28hfq",
                      "@type": "@builder.io/sdk:Element",
                      "tagName": "img",
                      "properties": {
                          "src": "https://cdn.builder.io/api/v1/pixel?apiKey=991d115827054c99b26e22e9381d9cc0",
                          "aria-hidden": "true",
                          "alt": "",
                          "role": "presentation",
                          "width": "0",
                          "height": "0"
                      },
                      "responsiveStyles": {
                          "large": {
                              "height": "0",
                              "width": "0",
                              "display": "inline-block",
                              "opacity": "0",
                              "overflow": "hidden",
                              "pointerEvents": "none"
                          }
                      }
                  }
              ],
              "url": "/test",
              "state": {
                  "deviceSize": "large",
                  "location": {
                      "pathname": "/test",
                      "path": [
                          "test"
                      ],
                      "query": {}
                  }
              }
          },
          "modelId": "26039c799d974c8497c624ec454232df",
          "query": [
              {
                  "@type": "@builder.io/core:Query",
                  "property": "urlPath",
                  "value": "/test",
                  "operator": "is"
              }
          ],
          "published": "published",
          "screenshot": "https://cdn.builder.io/api/v1/image/assets%2F991d115827054c99b26e22e9381d9cc0%2F566890c688c0475bb8c48c314f585cf7",
          "firstPublished": 1707120891221,
          "testRatio": 1,
          "lastUpdated": 1707143856019,
          "createdDate": 1707120815854,
          "createdBy": "B77OfOJmNIWLIZ32pD5MaTZoplr2",
          "meta": {
              "lastPreviewUrl": "http://localhost:3001/test?builder.space=991d115827054c99b26e22e9381d9cc0&builder.cachebust=true&builder.preview=page&builder.noCache=true&builder.allowTextEdit=true&__builder_editing__=true&builder.overrides.page=f6ac81ec74124a94a67ceda393c371fa&builder.overrides.f6ac81ec74124a94a67ceda393c371fa=f6ac81ec74124a94a67ceda393c371fa&builder.overrides.page:/test=f6ac81ec74124a94a67ceda393c371fa",
              "kind": "page",
              "hasLinks": false
          },
          "variations": {},
          "name": "Test",
          "id": "f6ac81ec74124a94a67ceda393c371fa",
          "rev": "e36uq3spz6",
          "variationId": null,
          "testVariationId": null,
          "testVariationName": ""
      }
  },
  "builderBlock": {
      "@type": "@builder.io/sdk:Element",
      "@version": 2,
      "id": "builder-1409c59c073b4804aeb26306a33fd240",
      "component": {
          "name": "ExpertServicesSection",
          "options": {}
      },
      "responsiveStyles": {
          "large": {
              "display": "flex",
              "flexDirection": "column",
              "position": "relative",
              "flexShrink": "0",
              "boxSizing": "border-box",
              "marginTop": "20px"
          }
      }
  }
}
```
