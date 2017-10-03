# MongoDB in Python
OC Python Meetup
Presented by Cody Fletcher
October 2017

## Prerequisite Steps (to Run Project)

1. **A MongoDB Server**

    a. **Docker** - Install [Docker](https://www.docker.com/) locally (to run MongoDB locally)
    b. **Online #1** - 500 MB Free at [mLab.com](https://mlab.com)
    c. **Online #2** - Start free using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

2. **Jupyter Notebook** - Install Jupyter Notebook globally for running notebooks in this repo

## Steps to Setup Project

1. Clone this repository

        # Via HTTPS ...
        git clone https://github.com/OCPython/meetup-2017-10-mongodb.git

        # ... or Via SSH
        git clone git@github.com:OCPython/meetup-2017-10-mongodb.git

2. Enter project directory:

        cd meetup-2017-10-mongodb/

3. Create virtual environment

        pipenv --three

4. Activate virtual environment

        pipenv shell

5. Install python requirements (see: requirements.txt)

        pip install -r requirements.txt

6. Create a kernel for Jupyter Notebook (have it use the virtual environment)

        python -m ipykernel install --user --name=mongodb-kernel

7. Run jupyter notebook (should open your browser automatically)

        jupyter notebook

8. Open any notebook and **make sure to select the newly created kernel "mongodb-kernel"**

    Select from menu: Kernel » Change Kernal » mongodb-kernel

## Tools

1. [Robo 3T](https://robomongo.org/) - MongoDB GUI


## Packages

1. PyMongo - Python API for MongoDB ([docs](https://api.mongodb.com/python/current/))
2. Mongo Engine - MongoDB ODM ([site](http://mongoengine.org/), [docs](http://docs.mongoengine.org/))
3. mongoaudit - Security Auditing Python Package ([github](https://github.com/stampery/mongoaudit))

