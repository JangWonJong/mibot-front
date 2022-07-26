export interface User {
    userId?: number,
    username? : string,
    password?: string,
    email?: string,
    name?: string,
    tel?:string,
    birth?:string,
    address?: string
    roles?: any,
    check? :boolean
}

export interface UserLoginInput{
    username: string,
    password: string
}
export interface LoginUser{ 
    username:string, password:string, email:string, name:string,
    tel:string, birth:string, userId? : number,
    token: any, roles: any    
}

export interface UserInfo{
    username:string, password:string, email:string, name:string,
    tel:string, birth:string, userId? : number,
    token: any, roles: any   
}

export interface UserInfoState{
    data: UserInfo[]
    isloggined: boolean
}

export interface UserState{
    data: User[]
    status: 'idle' | 'loading' | 'failed'
    token?: null,
    isLoggined: boolean,
    error : null;
    loginedUser: null,
    check: boolean
}

/** 
export interface ImageInput{
    item : string
    color: string
}
*/
/**
export interface Image {
    picture : any
}
 */
export interface InputImage{
    imageId : number
    imageName : string
    image : string
    size : number
}

export interface Image {    
    picture: any
    image: InputImage
}


export interface ImageState{
    data: {
        picture: any
        image?: InputImage
    }
    status: 'successed' | 'loading' | 'failed'
}