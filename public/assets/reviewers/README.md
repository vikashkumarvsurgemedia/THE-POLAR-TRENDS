# Reviewer photographs

Drop square crops here, then set the matching `image` field on each entry in
the `REVIEWS` array in `src/data/products.js`:

```js
image: '/assets/reviewers/aarav-sharma.jpg',
```

**Specs**

- **Square**, around 400×400 (they render at 62×62, so 400px covers retina)
- JPG or WebP, keep each under ~80 KB
- Crop to the face with a little headroom — they are displayed small

Until a file is set the component renders the reviewer's initials on paper at
exactly the same size, so adding the photographs later shifts nothing else on
the page.
