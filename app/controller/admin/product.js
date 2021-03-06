'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    this.ctx.body = { message: 'admin_product' };
  }

  async create() {
    this.ctx.body = { message: 'admin_product_create' };
  }

  async patch() {
    this.ctx.body = { message: 'admin_product_patch' };
  }

  async remove() {
    this.ctx.body = { message: 'admin_product_remove' };
  }

  async fetch() {
    this.ctx.body = { message: 'admin_product_fetch' };
  }
}

module.exports = ProductController;
