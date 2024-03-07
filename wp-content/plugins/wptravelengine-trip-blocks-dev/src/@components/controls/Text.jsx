import ControlContainer from "../containers/ControlContainer";
const Text = ({onChange, ...ControlContainer}) => {
    return <input type="text" onChange={(e) => onChange(e.target.value)} {...ControlContainer} />
}

export default (props) => {
    return ControlContainer(Text)(props)
}