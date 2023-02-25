#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd dist

echo > .nojekyll


git init
git checkout -B gh-pages
git add -A
git commit --allow-empty -m 'deploy'

git push -f git@github.com:mo-shawa/react-kanban.git gh-pages

cd -