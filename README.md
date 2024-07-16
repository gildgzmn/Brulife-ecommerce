# Laravel Project README

## Project Overview

This repository contains a Laravel project for local development setup.

## Requirements
  
Ensure you have the following applications installed on your local machine before proceeding:

- **XAMPP**: Localhost and Database
  - [Download XAMPP](https://www.apachefriends.org/download.html)

- **Composer**: Dependency Manager for PHP
  - [Install Composer](https://getcomposer.org/)
    
- **For IDE you can use PHP Storm, VSCode or any**


## Installation and Setup

1. **Install Laravel Installer**

   First, install Laravel globally using Composer if you haven't already:

   ```bash
   composer global require laravel/installer
   ```

## Clone the Repository
   ```bash
  git clone <repository_url>
  cd <project_folder>
  ```

## Install PHP Dependencies
  ```bash
  composer install
  ```

## .env file Configuration
Copy .env.example to .env and update the database configuration 
(DB_DATABASE, DB_USERNAME, DB_PASSWORD) in .env file according to your local setup.

DB_CONNECTION=mysql

DB_HOST=127.0.0.1

DB_PORT=3306

DB_DATABASE=your_database_name

DB_USERNAME=root

DB_PASSWORD=

## Generate Application Key
  ```bash
  php artisan key:generate
  ```
## Running the project

  1. Start Laravel's local development server:
     ```bash
     php artisan serve
     ```
  2. If you want to compile frontend assets (optional):
     ```bash
     npm install
     npm run dev
     ```

## Database setup:

  1. Create your database (PHPmyadmin recommended MySQL):
  2. Database migrations
     - After setting up your database, migrate tables using Artisan commands:
       ```bash
       php artisan migrate
       ```
  **note** If you have migrations with foreign keys, migrate them one by one using the
  --path optionn since mine failed when migrating the products
  
  *RUN THE ARTISAN COMMAND:*
  
php artisan migrate --path=[your_path]
  ```bash
php artisan migrate --path=database/migrations/2024_07_03_061350_create_discounts_table.php
php artisan migrate --path=database/migrations/2024_07_03_061341_create_product_inventories_table.php
php artisan migrate --path=database/migrations/2024_07_03_061333_create_product_categories_table.php
php artisan migrate --path=database/migrations/2024_07_03_060525_create_products_table.php
```


## Database Seeding
   - Seed your database with dummy data
  ```bash
  php artisan db:seed
  ```


 

 

