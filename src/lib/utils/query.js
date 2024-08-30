import { gql } from "graphql-request";

export const GET_IMAGES = gql`
    query Gallery {
        assets(orderBy: publishedAt_DESC) {
            url
            fileName
            imageGallery {
                bird_story
                image_description
                name
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
            "bird_story": null,
            "image_description": "An image of a hawk"
          }
        ]
      },
    */
