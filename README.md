# Apollo Fitness
A nutrition and hydration tracking app that monitors your mood to personalize your experience. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

To create your development environment, you'll need to install these:
```
Node 12
npm 6
Yarn 1.21
react-native-cli 2
expo-cli 3
```

### Installation

First, install node, npm, and yarn through apt (or your preferred package manager).
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt update && sudo apt install -y yarn nodejs
```

Next, use npm to install node packages globally.
```
sudo npm install -g react-native-cli expo-cli
```

After, clone the repository to get a local version of the app.
```
git clone https://github.com/babytire/Das-Technik.git
```

Once the cloning is done, navigate to `Das-Technik/ApolloFitness` and run `npm install` to install project dependencies.

Now your environment should be set up! Run `yarn start` to start the metro bundler.

## Working on an Issue

First, assign the issue to yourself and move the issue to the in-progress pipeline on the [Zenhub](https://www.zenhub.com/) project board.

Next, you'll need to set up a local git branch to start development. 
```
git pull
git checkout -b XX-DESCRIPTIVE-NAME
```
Where XX is the Zenhub issue number.

Now that you're on a new branch, push the branch onto github.
```
git push -u origin XX-DESCRIPTIVE-NAME
```

You may now make changes to your local branch. To add, commit, and push them, use
```
git add FILEPATH/FILENAME
git commit -m "Descriptive commit message that describes your changes"
git push
```

### Making a Pull Request 

Once you have completed your work on the issue, you will need to create a pull request to allow the other team members to review your changes. You should only create a request when your work is ready to be merged into the master branch. Commits on the development branch should never be squashed when merged onto master. Once the request has been merged, the development branch should be deleted.
