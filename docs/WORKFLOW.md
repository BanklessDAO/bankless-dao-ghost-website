## Main Git branches

These are the major branches for this project.

1. main

   - production branch.
   - commits are deployed by netlify.

2. develop

   - contains new features.
   - has code that is approved by reviewers.

3. feature/

   - new feature based on an issue or request.
   - should be created from the develop branch.
   - can be deleted.

4. release/

   - contains code ready for production.
   - Testers can be given access.
   - can be deployed to QA/UAT server.

5. hotfix/
   - in case a bug is found in production this is forked from main.
   - very small changes.
   - should be merged quickly directly to main once approval is completed.

## Contributor Workflow

### Create feature branch from develop

### Create PR from feature/my-new-feature -> develop

- PR reviews looks at code confirms it looks good
- developer test PR in local computer, their discord guild
- CI/CD will validate that all test cases are good
- PR reviewers test cases are created

### PR merged to develop

- CI/CD validate test and code is code
- deploy to test linux/ubuntu server
- deploy to shared test guild

## PR raised to release branch

- discord bot version release candiate
- CI/CD integration validation

## PR raised to main

- production release
- have a call with devs, SCOAP Squad, and relevant guild reps to make sure everything is smooth

https://nvie.com/posts/a-successful-git-branching-model/Create feature branch from develop
Create PR from feature/my-new-feature -> develop
PR reviews looks at code confirms it looks good
developer test PR in local computer, their discord guild
CI/CD will validate that all test cases are good
PR reviewers test cases are created
PR merged to develop
CI/CD validate test and code is code
deploy to test linux/ubuntu server
deploy to shared test guild
