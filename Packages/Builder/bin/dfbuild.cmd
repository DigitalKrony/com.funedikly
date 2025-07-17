@IF EXIST "%~dp0/node.exe" (
  "%~dp0/node.exe"  "%~dp0/node_modules/@df/builder/bin/cli.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0/node_modules/@df/builder/bin/cli.js" %*
)