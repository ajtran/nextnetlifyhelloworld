echo "set NEXT_PUBLIC_SHA in .env.local"
echo NEXT_PUBLIC_SHA=$COMMIT_REF >> .env.local

echo "building and exporting"
yarn next build && yarn next export

# echo "upload sourcemaps to rollbar"
# npx rollbar-cli@0.1.0 upload-sourcemaps ./out \
# --access-token $ROLLBAR_SERVER_ACCESS_TOKEN \
# --code-version $COMMIT_REF \
# --url-prefix 'https://nostalgic-leavitt-673da8.netlify.app/' \
# --next
