import { createContext, useState } from "react";
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
    // const [notify, setNotify] = useState("Notify")
    const errorMsg = (msg) => toast.error(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });

    const warnMsg = (msg) => toast.warn(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });

    const succesMsg = (msg) => toast.success(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });

    return (
        <NotificationContext.Provider value={{errorMsg, warnMsg, succesMsg}}>
            {children}
        </NotificationContext.Provider>
    )
}