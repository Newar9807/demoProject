import ControlContainer from "../containers/ControlContainer";
const Textarea = ({onChange, ...ControlContainer}) => {
    return <textarea onChange={(e) => onChange(e.target.value)} {...ControlContainer} />
}

export default (props) => {
    return ControlContainer(Textarea)(props)
}