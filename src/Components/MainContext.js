import React,{ useState, createContext, useEffect } from 'react';


export const MainContext = createContext();
const DataContext = (props) => {
    const [data, setData] = useState([]); 
    useEffect(() => {
        async function BackendData () {
            let content = await fetch("https://backenddatablog.herokuapp.com/api/home");
            content = await content.json();
            console.log(content);
            setData(content);
        }
        BackendData()
    },[]);

    return (
        <>
        {
            <MainContext.Provider value={[data, setData]}>
               {props.children}
            </MainContext.Provider>
        }
        
        </>
    )
}

export default DataContext;




// import React,{ useState, createContext } from 'react';

// export const MainContext = createContext();

// export const DataContext = (props) => {
    
//     const [Data, setData] = useState([
//         // Keeping data here, when there is no backend
//     ]);

//     return (
//         <>
//             <MainContext.Provider value={[Data, setData]}>
//                 {props.children}
//             </MainContext.Provider>
//         </>
//     )
// }