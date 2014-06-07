#!/bin/sh
cd "$1"
pdflatex --halt-on-error *.tex
cd -
