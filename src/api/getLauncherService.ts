import {  IPage } from "@/interfaces";
import { api } from "./api";

export async function GetLaunchesService(page: number): Promise<IPage>{
    const response = await api.get(`/launches?page=${page}&limit=5`).then((response) => response);
    const data:IPage = response.data

    return data;
}
