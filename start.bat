@echo off
title PHINIX NUKER

if exist node_modules\ (
  node index
  pause
) else (
  call npm i >> NUL
  node index
  pause
)