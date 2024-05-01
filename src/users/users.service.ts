import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

var userSql:User[] =[] 

@Injectable()
export class UsersService {
  create(createUserInput: CreateUserInput) {
    var user = new User();
    user.exampleField = createUserInput.exampleField;
    userSql.push(user)
    return user;
  }

  findAll() {
    return userSql;
  }

  findOne(id: number) {
    return userSql.find(u=> u.exampleField === id);
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    var userold = userSql.find(u=> u.exampleField === id);
    userold.exampleField = updateUserInput.exampleField
    return userold;
  }

  remove(id: number) {
    var userdel = userSql.find(u=> u.exampleField === id);
    userSql.splice(userSql.indexOf(userdel),1);
    return `This action removes a #${id} user`;
  }
}
