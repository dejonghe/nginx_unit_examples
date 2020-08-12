# Unit Docker Environment Var Injection

When running unit in a container, the environment variables are available to Unit, and not the application which is configured by the unit config being placed in entrypoint.d/. To get around this, I modified the entrypoint script and templated out any config files with environment variables before the config is loaded into unit. 
