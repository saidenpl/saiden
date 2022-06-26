#!/usr/bin/env bash

cp -Rav dist /tmp/dist
cd /tmp/dist
git init
echo 'saiden.pl' > CNAME
git add .
git commit -a -m"Update"
git remote add origin git@github.com:saidenpl/saidenpl.github.io.git
git push -f
rm -rf /tmp/dist