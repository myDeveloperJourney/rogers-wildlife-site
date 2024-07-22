import { gql } from "graphql-request";

export const GET_IMAGES = gql`
    query Gallery {
        assets(orderBy: publishedAt_DESC) {
            url
            fileName
            imageSingle {
                description
            }
        }
    }
`;

/*
    example data:
{
  "data": {
    "assets": [
      {
        "url": "url_here",
        "fileName": "birb.jpg",
        "imageSingle": [
          {
            "description": "side view of some kind of blue bird"
          }
        ]
      },
    */
