import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface SidebarDrawerProviderProps{
    children: ReactNode;
}

type SidebarContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarContextData)

export function SidebarContextProvider({children}: SidebarDrawerProviderProps) {
    const disclosure = useDisclosure()
    
    return (
        <SidebarDrawerContext.Provider value={disclosure}>
            {children}
        </SidebarDrawerContext.Provider>
    )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)