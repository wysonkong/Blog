import type {User} from "@/interface/User.tsx";

export interface Entry {
    id?: number,
    createdBy: User,
    title: string,
    message: string,
    images?: string[]
}