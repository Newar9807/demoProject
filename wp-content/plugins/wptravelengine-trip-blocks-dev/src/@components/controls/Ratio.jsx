import styled from "@emotion/styled"
import { Popover } from "../components"
import ControlContainer from "../containers/ControlContainer"
import { SelectButtonGroup, Text } from ".."

const ratioTypes = [
    { value: "original", label: "Original" },
    { value: "predefined", label: "Predefined" },
    { value: "custom", label: "Custom" },
]

const ratios = [
    { value: "1:1", label: "1/1" },
    { value: "4:3", label: "4/3" },
    { value: "16:9", label: "16/9" },
    { value: "2:1", label: "2/1" },
]

const RatioInputWrapper = styled.div`
    padding: 10.5px 10px;
    border: 1px solid var(--cw__border-color);
    border-radius: var(--cw__border-radius);
    color: #2B3034;
    font-size: 14px;
    &:focus{
        border-color: var(--cw__secondary-color);
    }
    .cw__ratio-input{
        span{
            &:not(:last-of-type){
                border-right: 1px solid var(--cw__border-color);
                padding-right: 6px;
                margin-right: 6px;
            }
        }
    }
`

const CustomWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    .cw__control-item{
        margin: 0 !important;
        padding: 0 !important;
    }
`

const CustomRatio = ({ value, onChange, ...rest }) => {
    const [firstVal, secondVal] = value.split(":");
    return <CustomWrapper className="cw__custom-wrapper cw__control-item">
        <Text type="number" value={firstVal} onChange={f => onChange(`${f}:${secondVal}`)} {...rest} />
        <span>:</span>
        <Text type="number" value={secondVal} onChange={s => onChange(`${firstVal}:${s}`)} {...rest} />
    </CustomWrapper>
}

const PredefinedRatio = ({ value, onChange, ...rest }) => {
    return <div className="cw__predefined-wrapper cw__control-item">
        <SelectButtonGroup value={value} onChange={onChange} options={ratios} {...rest} />
    </div>
}

const PopoverContent = ({ value, onChange, ...rest }) => {
    const { ratioType, ratio, size } = value;
    return <>
        <SelectButtonGroup
            label="Position"
            value={ratioType}
            onChange={type => onChange({ ...value, ratioType: type })}
            options={ratioTypes}
            isChildren
        />
        {ratioType === "predefined" && <PredefinedRatio value={ratio} onChange={r => onChange({ ...value, ratio: r })} />}
        {ratioType === "custom" && <CustomRatio value={ratio} onChange={r => onChange({ ...value, ratio: r })} />}
        <Text
            type="number"
            label="Image Size"
            help="Lorem ipsum dolor sit amet consectetur adipiscing elit mollis consequat, sociosqu donec lobortis"
            description="Image height will be automatically calculated based on the image ratio."
            value={size}
            onChange={s => onChange({ ...value, size: s })}
        />
    </>
}

const Ratio = ({ value, ...ControlContainer }) => {
    const { ratioType, ratio, size } = value;
    const ratioLabel = ratioTypes.find(r => r.value === ratioType).label;
    return <Popover content={<PopoverContent value={value} {...ControlContainer} />}>
        <RatioInputWrapper tabIndex={0} className="cw__ratio-input-wrapper">
            <div className="cw__ratio-input">
                {ratioType && <span>{ratioLabel}</span>}
                {ratio && <span>{ratio}</span>}
                {size && <span>{size}</span>}
            </div>
        </RatioInputWrapper>
    </Popover>
}

export default (props) => {
    return ControlContainer(Ratio)(props)
}
