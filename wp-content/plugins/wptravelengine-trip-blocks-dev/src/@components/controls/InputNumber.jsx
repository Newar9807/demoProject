import styled from "@emotion/styled";
import ControlContainer from "../containers/ControlContainer";
import Icons from "../assets/Icons";

const NumberStyles = styled.div`
    display: inline-flex;
    background-color: var(--cw__background-color);
    border-radius: var(--cw__border-radius);
    input[type=number]{
        padding: 4px !important;
        border: none !important;
        background: none !important;
        text-align: center;
        width: 40px !important;
        -moz-appearance: textfield;
        -moz-appearance: textfield;
        &::-webkit-outer-spin-button, &::-webkit-inner-spin-button{
            -webkit-appearance: none;
        }
    }
    button{
        border: none;
        background: none;
        padding: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        &:hover{
            color: var(--cw__secondary-color);
        }
        &:disabled{
            cursor: not-allowed;
            pointer-event: none;
            color: var(--cw__inactive-color);
            opacity: .5;
        }
    }
`

const InputNumber = ({value, min, max, onChange, step, ...ControlContainer}) => {
    const checkType = typeof value === "number";
    const updateStep = step || 1;

    const handleDecrease = () => {
        onChange(+value-updateStep)
    }

    const handleIncrease = () => {
        onChange(+value+updateStep)
    }

    return <NumberStyles className="cw__input-number-wrapper">
        <button disabled={min >= value} type="button" onClick={handleDecrease}>
            {Icons.minus}
        </button>
        <input
            type="number"
            value={+value}
            onChange={(e) => onChange(e.target.value)}
            min={min}
            max={max}
            {...ControlContainer}
         />
        <button disabled={max <= value} type="button" onClick={handleIncrease}>
            {Icons.plus}
        </button>
    </NumberStyles>
}

export default (props) => {
    return ControlContainer(InputNumber)({...props, direction: "horizontal"})
}
