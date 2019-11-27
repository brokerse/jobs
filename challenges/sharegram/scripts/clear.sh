#!/bin/sh

while read line; do    
    rm -rf $line
done < .gitignore