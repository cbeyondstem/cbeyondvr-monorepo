git checkout -b netlify-villa-clementine
git merge --no-commit --no-ff merge
git reset HEAD -- .travis.yml
git commit -m "Merge from master"
git push
git checkout master
