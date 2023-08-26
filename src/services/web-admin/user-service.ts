import { IUser, User } from "@/domain/models/user";
import { UserRepository } from "@/domain/service/user-repository";
import { TYPES } from "@/types";
import { inject, injectable } from "inversify";
import bcrypt from "bcryptjs";
import { ITableData } from "@/domain/models/table-data";
import { TDataTableParam } from "@/domain/service/types";
import { FileSystem } from "@/infrastructure/file-system";

@injectable()
export class UserService {
    constructor(
        @inject(TYPES.UserRepository) private _repository: UserRepository
    ) {}

    public async findAll(): Promise<IUser[]> {
        const users = await this._repository.findAll();
        console.log(users);
        const userDto = users.map((user) => user.unmarshal());
        return userDto;
    }

    public async findById(id: string): Promise<IUser> {
        const user = await this._repository.findById(id);
        return user.unmarshal();
    }

    public async store(_user: IUser): Promise<IUser> {
        const userData = User.create(_user);
        const user = await this._repository.store(
            User.create({
                email: _user.email,
                password: bcrypt.hashSync(_user.password || "", 10),
                name: _user.name,
                nik: _user.nik,
            })
        );
        return user.unmarshal();
    }

    public async update(id: string, _user: IUser): Promise<IUser> {
        const userData = await this._repository.findById(id);
        const userProps = User.create(_user);
        const toUpdateUser = User.create({
            id: _user.id,
            email: _user.email,
            password: _user.password
                ? bcrypt.hashSync(_user.password || "", 10)
                : undefined,
            name: _user.name,
            nik: _user.nik,
        });
        const user = await this._repository.update(id, toUpdateUser);
        return user.unmarshal();
    }

    public async destroy(id: string): Promise<boolean> {
        const userData = await this._repository.findById(id);
        await this._repository.destroy(id);
        return true;
    }

    public async getDataTable(
        param: TDataTableParam
    ): Promise<ITableData<IUser>> {
        const dataTable = await this._repository.getDataTable(param);

        return dataTable.unmarshal();
    }
}
