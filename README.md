# contacts-list

A simple contacts list app

## Notes

1-please note that the Get All User Contacts api is paginated 2 elements per page for the purpose of simplifying
the integration tests (not to add huge amounts of data to go over small number of pages)

2-please note that the api docs are found by calling the following api GET http://127.0.0.1:2000/api/docs/ after running the app

3-please note that the authorization,devicetoken,fingerprint are different from the ones found in the task pdf
because i wasn't able to copy them (represented as an image) and also because i needed to encrypt in the token
the primary key identifier for faster databases lookups to check the request claims

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

first deployment option

1-docker must be installed on your machine (linux os is prefered)

second deployment option

1-node and npm must be installed on your machine

### Installing

first deployment option

1-Open a terminal window and type

  sudo apt-get update

2-Uninstall Old Versions of Docker

  sudo apt-get remove docker docker-engine docker.io

3-Install Docker

  sudo apt install docker.io

4-Start and Automate Docker

  sudo systemctl start docker
  sudo systemctl enable docker

5-docker --version

second deployment option

1-Open a terminal window and type:

  cd /path-of-the-project

2-install dependencies

  npm install


## Deployment

first deployment option

1-npm run deploydev 

second deployment option

1-use the visual studio code debugger

## Running the tests

1- cd  ./the-project-path 

npm run test

## Testing app manually
the easiest way to test the apis is by using the docs testing feature http://127.0.0.1:2000/api/docs/ after
running the app

## Authors

* **Thomas Erian** - *Initial work* - [thomaserian](https://github.com/thomaserian)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details