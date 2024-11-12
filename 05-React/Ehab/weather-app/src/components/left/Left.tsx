import { memo, ReactNode, useCallback } from "react";
import './Left.css';
import { useUnitContext } from "../../contexts/Unit-Context";
import { UnitType } from "../../types/types";

function Left(): ReactNode {
    const { dispatch } = useUnitContext();
    
    const updateContext = useCallback(()=>{
        const selectedElements = document.getElementsByClassName('selected');
        if(selectedElements.length > 0){
            const unit: UnitType = {
                Celsius: false,
                Fahrenheit: false,
                KMs: false,
                Miles: false,
            };
            Array.from(selectedElements).forEach((element) => {
                if(element.id == 'c'){
                    unit.Celsius = true;
                }
                if(element.id == 'f'){
                    unit.Fahrenheit = true;
                }
                if(element.id == 'k'){
                    unit.KMs = true;
                }
                if(element.id == 'm'){
                    unit.Miles = true;
                }
            });
            dispatch(unit);
        }
    },[dispatch]);


    const unitClick = useCallback((id: string) => {
        const c = document.getElementById('c') as HTMLDivElement;
        const f = document.getElementById('f') as HTMLDivElement;
        const k = document.getElementById('k') as HTMLDivElement;
        const m = document.getElementById('m') as HTMLDivElement;
        switch(id){
            case 'c':
                c.classList.add('selected');
                f.classList.remove('selected');
                break;
            case 'f':
                f.classList.add('selected');
                c.classList.remove('selected');
                break;
            case 'k':
                k.classList.add('selected');
                m.classList.remove('selected');
                break;
            case 'm':
                m.classList.add('selected');
                k.classList.remove('selected');
                break;
            default:
                break;
        }
        updateContext();
    }, [updateContext]);


    return(
        <div className="parent">
            <div className="logo">
                <img src="https://www.clipartmax.com/png/full/142-1427402_weather-weather-forecast-logo.png" />
            </div>
            <div className="child">
                <div id='c' className="unit selected" onClick={()=> unitClick('c')}>°C</div>
                <div id='f' className="unit" onClick={()=> unitClick('f')}>°F</div>
            </div>
            <div className="child">
                <div id='k' className="unit selected" onClick={()=> unitClick('k')}>KMs</div>
                <div id='m' className="unit" onClick={()=> unitClick('m')}>Miles</div>
            </div>
        </div>
    );
}

export default memo(Left);