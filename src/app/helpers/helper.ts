import { UserInfoType } from "../types/user.type"

export const getUserLocal = (): UserInfoType => {
    const user = localStorage.getItem('user')
    return JSON.parse(user as string)
}