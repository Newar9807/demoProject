import styled from "@emotion/styled"

const ControlTitle = styled.div`
    padding: 8px 16px;
    font-size: 12px;
    color: #717578;
    background-color: #F6F6F6;
`

export default ({title}) => {
    return <ControlTitle className="cw__control-title">{title}</ControlTitle>
}
