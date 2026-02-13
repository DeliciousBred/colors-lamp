# Colors Lamp Website

## Description
This is an open-source respository for a website that that allows users to login to an account, where they can add colors to their own personalized list of colors and search for any colors they saved.

## Technologies Used
Below are the following Technologies used to run this website:
- Operating System: Ubuntu 24.04.3 LTS 
- Apache 2.4.58 (Ubuntu)
- PHP 8.4.15
- MySQL 8.0.45-0ubuntu0.24.04.1 (Ubuntu)

## Setup Instructions
1. Ensure that you are using the correct operating system and have the applications listed above installed. It is possible to get this website running on other operating systems, but the setup steps below may differ significantly.
2. Open the file `code.js` located in `public/js/` and replace the domain in `urlBase` with the your domain.
3. Open each php file located at `public/LAMPAPI` and replace the initial empty string variables (`$host`, `$user`, `$password`, and `$database`) with their appropertiate credentials to login to the SQL database you would like to use.
4. Open the Apache configuration file `000-default.conf` located in `/etc/apache2/sites-available/` and ensure that `DocumentRoot` is set to the path of the folder `public` located in the repository. Also ensure that the following configuration directives are set for the document root's path:
```
Options Indexes FollowSymLinks
AllowOverride All
Require all granted
```
5. Create a database in MySQL if you have not already with the query `CREATE DATABASE COP4331;`. Ensure that you are using this database in each of the php files located in `public/LAMPAPI/`. Then use the following query to select this database `USE COP4331;`
6. Create a user which the website will use to access the database with the following queries:
```
CREATE USER 'TheBeast' IDENTIFIED BY 'WeLoveCOP4331';
GRANT ALL PRIVILEGES ON COP4331.* TO 'TheBeast'@'%';
```
If you have not already, do not forget to replace the credentials in the php files located in `public/LAMPAPI/` in order for the server to properly connect to the database.
7. Create the tables needed with the following MySQL queries:
```
CREATE TABLE `COP4331`.`Users`
(
    `ID` INT NOT NULL AUTO_INCREMENT ,
    `FirstName` VARCHAR(50) NOT NULL DEFAULT '' ,
    `LastName` VARCHAR(50) NOT NULL DEFAULT '' ,
    `Login` VARCHAR(50) NOT NULL DEFAULT '' ,
    `Password` VARCHAR(50) NOT NULL DEFAULT '' ,
    PRIMARY KEY (`ID`)
) ENGINE = InnoDB;

CREATE TABLE `COP4331`.`Colors`
(
    `ID` INT NOT NULL AUTO_INCREMENT ,
    `Name` VARCHAR(50) NOT NULL DEFAULT '' ,
    `UserID` INT NOT NULL DEFAULT '0' ,
    PRIMARY KEY (`ID`)
) ENGINE = InnoDB;

CREATE TABLE `COP4331`.`Contacts`
(
    `ID` INT NOT NULL AUTO_INCREMENT ,
    `FirstName` VARCHAR(50) NOT NULL DEFAULT '' ,
    `LastName` VARCHAR(50) NOT NULL DEFAULT '' ,
    `Phone` VARCHAR(50) NOT NULL DEFAULT '' ,
    `Email` VARCHAR(50) NOT NULL DEFAULT '' ,
    `UserID` INT NOT NULL DEFAULT '0' ,
    PRIMARY KEY (`ID`)
) ENGINE = InnoDB;
```
7. Populate the `Users` table with the account you would like to be avaliable for the website with the following query: 
(You may change any of this information to your liking.)
```
insert into Users (FirstName,LastName,Login,Password) VALUES ('First','Last','User','Test');
```
8. Finally, in order to ensure that Apache and MySQL are running on your server, run `sudo systemctl start apache2` and `sudo systemctl restart mysql`. Once that is complete your website should be functioning properly.

## How to Use

### Logging In
When you enter the site you will be brought to a login page titled "COP 4331 LAMP Stack Demo". In order to login you must enter the username and password of the account you would like to login to, and click the "Do It" button. If you would like to log out you can click the "Log Out" button near the top of the screen after you have logged in.

### Adding Colors
Once you have lave logged in, you may add colors by typing a color into the "Color To Add" input box and clicking the "Add Color" button. Any colors you add while logged in will stay saved onto your account, so if you loggin later you will be able to search for these colors.

### Searching Colors
In order to search for any color(s) you have in your account's colors list, you need to type the name (or a part of it) into the "Color To Search For" input box and click the "Search Color" button. The search mechanism of this website include partial searching, meaning that you do not need to type the entire color's name in order to search for it. Once you have clicked the "Search Color" button, a list of your colors that contain the input search query will appear on the screen.

