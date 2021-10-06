# How to Deploy This Angular App
*This is a step-by-step guide on how to deploy this app through AWS CodePipeline to an S3 bucket*

## Step 1: Add the  `buildspec.yml` file

1. Right click on the root directory of your Angular project > make a new file called `buildspec.yml`.  
> *This will be used by AWS CodeBuild in the pipeline to generate the deployable artifact by building it from your source code:*

<br>

```yml
version: 0.2

env:
    variables:
        CACHE_CONTROL: "86400"
        S3_BUCKET: "{{s3_bucket_url}}"
        # This is the folder where the "built" version of your src code will go
        BUILD_FOLDER: "dist"
phases:
  install:
    runtime-versions:
        # We need node to install all the dependencies and built the distributable artifact
        nodejs: 14
    commands:
        - echo Installing source NPM dependencies...
        - npm install
        - npm install -g @angular/cli
  build:
    commands:
        - echo Build started 
        # ng build is the command you use when you're ready to build your app 
        # and deploy it. The CLI will analyze the application and build the 
        # files, all while optimizing the application as best as it can.
        - ng build
artifacts:
    files:
        - '**/*'
        # The CLI will then output the files in the dist/your-project-name folder, 
        # ready to be placed on a server and ready to be visited.
    base-directory: 'dist*'
    discard-paths: yes
```

<br>

2. Save and commit your code to your repository.