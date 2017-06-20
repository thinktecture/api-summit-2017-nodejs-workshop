    @echo off
    IF "%SITE_FLAVOR%" == "server" (
      bash deploy.server.sh
    ) ELSE (
      IF "%SITE_FLAVOR%" == "app" (
        bash deploy.app.sh
      ) ELSE (
        echo You have to set SITE_FLAVOR setting to either "server" or "app"
        exit /b 1
      )
    )