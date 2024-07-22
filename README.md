# Rogers Wildlife Center

```graphql
query ImageGallery {
    assets(orderBy: publishedAt_DESC) {
        imagesImageGallery {
            image {
                fileName
                url
            }
            description
        }
    }
}
```
