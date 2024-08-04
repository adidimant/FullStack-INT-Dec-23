import { memo } from "react"
import "./Or.css"

function OrGlobal() {
    return (
        <div className="flex-item-wrapper">
            <div className="or-text">OR</div>
        </div>
    )
}

export default memo(OrGlobal)