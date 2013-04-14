#!/bin/bash
rm tw/index.html
opencc -i cn/index.html -o tw/index.html -c zhs2zhtw_p.ini
# opencc -i tw/index.html -o cn/index.html -c zhtw2zhcn_s.ini
