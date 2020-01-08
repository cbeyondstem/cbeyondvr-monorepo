git checkout netlify-villa-clementine
git merge --no-commit --no-ff master
git checkout --ours -- .travis.yml
git add --all
git commit -m "Merge from master"
git push
git checkout master
