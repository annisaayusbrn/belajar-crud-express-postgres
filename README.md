# crud

## cara install
- membuat project baru 
    `mkdir server`
    `cd server`
- menginisialisasi npm
    `npm init`
- membuat file app.js
- install express,sequelize,pg
    `npm install --save express sequelize pg`
- inisialisasi sequelize
    `sequelize init`
- membuat database
    - pertama edit file config.json
    - kedua create database menggunakan sequelize
        `sequelize db:create`
    