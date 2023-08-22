import {  IStatus } from "@/interfaces";
import { api } from "./api";

export async function GetStatusService(): Promise<IStatus[]>{
    const response = await api.get(`/launches/stats`).then((response) => response);
    const data: IStatus[] = response.data

    return data;
}
