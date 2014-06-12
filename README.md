# texwatch

Simple watcher for LaTeX files. Compiler pdflatex will be runned if some *.tex file has changed in current directory.

## Installation

```
git clone git@bitbucket.org:fraszczakszymon/texwatch.git
cd texwatch
npm install
```

Add alias *texwatch* to your bash (file: ~/bashrc):

```
alias texwatch='grunt --gruntfile /path/to/texwatch/Gruntfile.js watch:src --basePath="`pwd`"'
```

## Dependencies

```
npm install -g grunt-cli
apt-get install texlive
```

## Usage

Just run command *texwatch* in directory where you are working on *.tex.