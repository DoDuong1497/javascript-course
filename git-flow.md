# Git cmd

```bash
cmd              working space          staging          origin/master
                 function.html      
$ git add .      function.html  
$ git commit -m  "add function.html"    function.html  
$ git push                                              function.html 

```

```bash
# add file

## add all files changed, removed, updated, added ...
$ git add .

## add file
$ git add {name file}

# check status file (add, modified, deleted ...)
$ git status

# commit message
$ git commit -m "{message}"

# push to remote

##  push files to current branch
$ git push 

### push set upstream
$ git push --set-upstream origin {name branch}

# check all branches
$ git branch -all

## check current branch
$ git branch --show-current

# pull latest code from current branch
$ git pull

# create branch from current branch
$ git checkout -b {name branch}

# switch branch
$ git checkout {name branch}

# merge branch
$ git merge {name branch}

# clone project from remote
$ git clone {url project}

```


# Git flow

```bash
# 1. clone project from remote
$ git clone {url project}

# 1.1  check current branch
$ git branch --show-current

# 2. create branch from main branch
$ git checkout -b feature/{name branch}

# 3. add file
$ git add .

# 4. commit message
$ git commit -m "{message}"

# 5. push to remote
$ git push --set-upstream origin feature/{name branch}

# 6. merge branch
$ git checkout main
$ git merge feature/{name branch}

```

## Step to step git flow when implement feature

```bash
# 1. create branch from main branch
$ git checkout -b feature/{name branch}

# 2. check status
$ git status

# 3. add file
$ git add .

# 4. commit message
$ git commit -m "{message}"

# 5. push to remote
$ git push --set-upstream origin feature/{name branch}

# 6. create a pull request (PR) to merge feature branch to main branch

```