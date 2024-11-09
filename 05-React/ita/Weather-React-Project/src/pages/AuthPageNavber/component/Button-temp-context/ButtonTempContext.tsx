import { memo, useCallback } from "react";
import { useTempContext } from "../../../../context/temp-context";
import Button from "../button/button";

function ButtonTempContext() {
    const { temp, dispatch } = useTempContext(); // Use dispatch

    const changeTempUnit = useCallback(() => {
        if (dispatch) {
            dispatch(temp === 'C' ? 'F' : 'C');
        }
    }, [temp, dispatch]);

    return (
        <Button  onClick={changeTempUnit} width={"60px"}>
            °{temp === 'C' ? 'F' : 'C'}
        </Button>  
    );
}

export default memo(ButtonTempContext);
