'use strict';

const Permission = require('../../models/Permission');
const PermissionRole = require('../../models/PermissionRole');
const Role = require('../../models/Role');
const UserRole = require('../../models/UserRole');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable(Role.tableName, Role.tableAttributes);
     await queryInterface.createTable(Permission.tableName, Permission.tableAttributes);
     await queryInterface.createTable(UserRole.tableName, UserRole.tableAttributes);
     await queryInterface.createTable(PermissionRole.tableName, PermissionRole.tableAttributes);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(Role.tableName); 
    await queryInterface.dropTable(Permission.tableName); 
    await queryInterface.dropTable(UserRole.tableName); 
    await queryInterface.dropTable(PermissionRole.tableName); 
  }
};
