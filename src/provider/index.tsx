import { GetLaunchesService } from "@/api/getLauncherService";
import { GetRocketsService } from "@/api/getRocketsService";
import { GetStatusService } from "@/api/getStatusService";
import { ILauncher, IRockets, IStatus } from "@/interfaces";
import { createContext,  Dispatch,  ReactNode, SetStateAction, useState } from "react";

export type ContextProps = {
    getLauncher(page: number): Promise<ILauncher[] | void>
    getRocket(): Promise<IRockets[] | void>;
    getStatus(): Promise<IStatus[] | void>;
    launchers: ILauncher[];
    rockets: IRockets[];
    status: IStatus[] | undefined,
    page: number,
    setPage: Dispatch<SetStateAction<number>>,
    finalPage: number
};

export type ProviderType = {
    children: ReactNode;
};



export const Context = createContext<ContextProps>({} as ContextProps);

export function Provider({ children }: ProviderType) {

    const [page, setPage] = useState(1)
    const [finalPage, setFinalPage] = useState(0)
    const [launchers, setLaunchers] = useState<ILauncher[]>([])
    const [rockets, setRockets] = useState<IRockets[]>([])
    const [status, setStatus] = useState<IStatus[]>([])


    async function getLauncher(pagina:number): Promise<ILauncher[] | void> {
        try {
            const data = await GetLaunchesService(pagina)
            console.log(data)
            const launches: ILauncher[] = data.results
            setLaunchers(launches)
            setFinalPage(data.totalPages)
            return launches
        } catch (error) {
            console.error(error)
            return
        }
    }

    async function getRocket(): Promise<IRockets[] | void>{
        try {
            const rockets = await GetRocketsService()
            setRockets(rockets)
            return rockets
        } catch (error) {
            console.error(error)
            return
        }
    }

    async function getStatus(): Promise<IStatus[] | void>{
        try {
            const status = await GetStatusService()
            setStatus(status)
            return status

        } catch (error) {
            console.error(error)
            return
        }
    }



    return (
        <Context.Provider value={{
            getLauncher,
            getRocket,
            getStatus,
            launchers,
            rockets,
            status,
            page,
            setPage,
            finalPage
        }}>
            {children}
        </Context.Provider>
    );
}
