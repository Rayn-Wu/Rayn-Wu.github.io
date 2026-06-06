$env:Path = "C:\Ruby27-x64\bin;" + $env:Path
$env:JEKYLL_NO_BUNDLER_REQUIRE = "true"
$env:RUBYOPT = "-rtzinfo -rtzinfo/data"

C:\Ruby27-x64\bin\jekyll.bat serve --host 127.0.0.1 --port 4000 --no-watch
