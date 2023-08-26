import { Entity } from "./entity";
import bcrypt from "bcryptjs";
import { AppError, HttpCode } from "@/libs/exceptions/app-error";
import { IMulterFile } from "@/presentation/validation/types";

export enum EUserRole {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",
    INSPECTOR = "INSPECTOR",
}

export interface IUser {
    id?: string;
    email: string;
    password?: string | null;
    name: string;
    nik: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export class User extends Entity<IUser> {
    private constructor(props: IUser) {
        const { id, ...data } = props;
        super(data, id);
    }

    public static create(props: IUser): User {
        const instance = new User(props);
        return instance;
    }

    public unmarshal(): IUser {
        return {
            id: this._id,
            email: this.email,
            password: this.password,
            name: this.name,
            nik: this.nik,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }

    public verifyPassword(password: string): boolean {
        if (this.password) {
            return bcrypt.compareSync(password, this.password);
        }
        return false;
    }

    get id(): string {
        return this._id;
    }
    get email(): string {
        return this.props.email;
    }
    get password(): string | undefined | null {
        return this.props.password;
    }
    set password(val: string | undefined | null) {
        if (val && val !== "") {
            this.props.password = bcrypt.hashSync(val, 10);
        } else {
            throw new AppError({
                statusCode: HttpCode.VALIDATION_ERROR,
                description: "Password is required",
            });
        }
    }
    get name(): string {
        return this.props.name;
    }
    get nik(): string {
        return this.props.nik;
    }

    get createdAt(): Date | undefined {
        return this.props.createdAt;
    }
    get updatedAt(): Date | undefined {
        return this.props.updatedAt;
    }
    get deletedAt(): Date | undefined {
        return this.props.deletedAt;
    }
}
