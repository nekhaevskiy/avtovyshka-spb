# avtovyshka-spb.ru

## Development

Install `yarn`:

```
npm install -g yarn
```

Create file `.env.local` and set up environment variables in it:

- NEXT_PUBLIC_CLOUDINARY_URL
- NEXT_PUBLIC_EMAILJS_USER_ID
- NEXT_PUBLIC_EMAILJS_SERVICE_ID
- NEXT_PUBLIC_EMAILJS_TEMPLATE_ID

## Notes

### Using `next/image` for SVG files

We don't use `next/image` for SVG files for the following reasons:

- we are using Cloudinary for hosting images
- we don't want to host SVG-files in Cloudinary because loses of quality
- we can't use next/image because of non-default loader ('cloudinary')
