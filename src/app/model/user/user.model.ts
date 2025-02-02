import { Menu } from "../system/system.model";


export class CurrentUser {
    public id: string;
    public userName: string;
    public password: string;
    public email: string;
    public roleId: number;
    public role: string[];
    public totalRecord: number;
}

export class Roles{
    public roleName: string;
    constructor(roleName: string) {
        this.roleName = roleName;
    }
}

export class TokenResponse {
    public token: string;
    // public id: string;
    // public studentId: string;
    // public userName: string;
    // public email: string;
    // public menuList: Menu[];
    // public roles: string[];
    public status: boolean;
}

export class LoginUser {
    public userId: number;
    public studentId: number;
    public userName: string;
    public role: string;
}