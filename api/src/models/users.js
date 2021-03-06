import { schemas } from './validation'

import BaseModel from './base'

export default class User extends BaseModel {
  static tableName = 'users'

  // eslint-disable-next-line class-methods-use-this
  type() {
    return 'User'
  }

  link() {
    return `/users/${this.id}`
  }

  static joiSchema = schemas.user

  static relationMappings = {
    roles: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: `${__dirname}/roles`,
      join: {
        from: 'users.id',
        through: {
          from: 'users_roles.user_id',
          to: 'users_roles.role_id'
        },
        to: 'roles.id'
      }
    }
  }
}

export class UserAdmin extends User {
  static joiSchema = schemas.userAdmin
}
