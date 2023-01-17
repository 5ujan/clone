import React, {useState,useContext} from "react";

const AppContext= React.createContext()

const AppProvider=({children})=>{
    const [zoomed, setZoomed] = useState(false)
    const [id, setId]=useState(0)
    const [researchId, setResearchId] = useState(0)
    const [blogId, setBlogId] = useState(0)
    const [projectId, setProjectId] = useState(0)


    return <AppContext.Provider value={
       {zoomed, setZoomed,
    id, setId,
    blogId, setBlogId,
    projectId, setProjectId,
    researchId, setResearchId}
    }>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext, AppProvider}