Write-Output "Build Initialized..."
Write-Output "[$env_STAGENAME] starting container"
docker build -t nannepagajoseph/bookstore_ui .
Write-Output "Build Finished..."