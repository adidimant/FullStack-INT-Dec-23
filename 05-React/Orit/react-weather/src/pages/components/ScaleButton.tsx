import { memo, ReactNode, useCallback, useMemo } from "react";
import { useScaleContext } from "../../context/ScaleContext";
import './ScaleButton.css'

function ScaleButton(): ReactNode {
    const { tempScale, distScale, setTempScale, setDistScale } = useScaleContext();
    const faren = useMemo(() => tempScale === 'F', [tempScale]);
    const miles = useMemo(() => distScale === 'Miles', [distScale]);

    const changeTempScale = useCallback(() => {
        if (setTempScale) {
            setTempScale(faren ? 'C' : 'F');
        }
    }, [faren, setTempScale]);

    const changeDistScale = useCallback(() => {
        if (setDistScale) {
            setDistScale(miles ? 'Km' : 'Miles');
        }
    }, [miles, setDistScale]);


    return (
        <div className="scale-toggle-container">
            <p>Change scale:&nbsp;
                <button onClick={changeTempScale}>
                    {faren ? "Switch to Celsius" : "Switch to Fahrenheit"}
                </button>&nbsp;
                <button onClick={changeDistScale}>
                    {miles ? "Switch to Km" : "Switch to Miles"}
                </button>
            </p>
        </div>
    );
}

export default memo(ScaleButton);
