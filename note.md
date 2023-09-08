### Repository to store source code.
- gitlab -> enterprise, company
- bitbucket -> enterprise, company
- github -> personal


### Ways to push code on github

#### Option 1 (clone a repository from github)

- go to github.com
- Create new a repository -> Click "New" button

```bash
$ git branch -> check name branch
$ git clone {link repository} -> pull code into your localhost
$ git status -> check status of files (add, modify, delete ...)
$ git add .  -> add all files to prepear to push.
$ git commit -m "..." -> to write message
$ git push -> push code on repository
```

#### Option 2 (create a new repository on the command line)

- go to your code
```bash
$ git init
$ git add .
$ git commit -m "..."
$ git branch -M main/master -> create branch
$ git remote add origin https://github.com/nhattruongniit/truong.git
$ git push -u origin main/master
```

git -> command