import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('username').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()
      
    
      table.text('bio').nullable()
      table.string('avatar').nullable()
      table.string('github_url').nullable()
      table.string('linkedin_url').nullable()
      table.string('portfolio_url').nullable()
      table.boolean('is_active').defaultTo(true)
      table.timestamp('last_login_at').nullable()

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}