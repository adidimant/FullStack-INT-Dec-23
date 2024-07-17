import { ReactNode } from "react";
import NavBar from './../NavBar/NavBar';

export default function Home():ReactNode {
    return(
        <>
        <NavBar/>
            <h1>This is the Home Page</h1>
        </>
    )
}
