import {  IRockets } from "@/interfaces";
import { api } from "./api";

export async function GetRocketsService():Promise<IRockets[]> {
    const response = await api.get(`/rockets`).then((response) => response);
    const data: IRockets[] = response.data

    return data;
}
