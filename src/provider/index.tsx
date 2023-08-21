import { GetLaunchesService } from "@/api/getLauncherService";
import { GetRocketsService } from "@/api/getRocketsService";
import { GetStatusService } from "@/api/getStatusService";
import { errorAlert, successAlert } from "@/components/alert";
import { ILauncher, IRockets, IStatus } from "@/interfaces";
import { createContext,  ReactNode, useState } from "react";

export type ContextProps = {
    getLauncher(): Promise<ILauncher[] | void>;
    getRocket(): Promise<IRockets[] | void>;
    getStatus(): Promise<IStatus | void>;
    ignite(): Promise<void>;
    launchers: ILauncher[];
    rockets: IRockets[];
    status: IStatus | undefined
};

export type ProviderType = {
    children: ReactNode;
};



export const Context = createContext<ContextProps>({} as ContextProps);

export function Provider({ children }: ProviderType) {

    const [page, setPage] = useState(1)
    const [launchers, setLaunchers] = useState<ILauncher[]>([])
    const [rockets, setRockets] = useState<IRockets[]>([])
    const [status, setStatus] = useState<IStatus>()

    async function ignite():Promise<void>{
        await getLauncher()
        console.log('ignite')
        await getRocket()
        await getStatus()
    }


    async function getLauncher(): Promise<ILauncher[] | void> {
        try {
            const data = await GetLaunchesService(page)
            const launches: ILauncher[] = data.results
            console.log(launches)
            setLaunchers(launches)
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

    async function getStatus(): Promise<IStatus | void>{
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
            ignite,
            launchers,
            rockets,
            status
        }}>
            {children}
        </Context.Provider>
    );
}
