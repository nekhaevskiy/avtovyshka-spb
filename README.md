# Notes

## Using `next/image` for SVG files

We don't use `next/image` for SVG files for the following reasons:

- we are using Cloudinary for hosting images
- we don't want to host SVG-files in Cloudinary because loses of quality
- we can't use next/image because of non-default loader ('cloudinary')

## Environment variables

The following environment variables should be available:

- NEXT_PUBLIC_CLOUDINARY_URL
- NEXT_PUBLIC_EMAILJS_USER_ID
- NEXT_PUBLIC_EMAILJS_SERVICE_ID
- NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
