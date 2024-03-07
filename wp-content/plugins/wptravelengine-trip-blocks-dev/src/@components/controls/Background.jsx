import styled from "@emotion/styled"
import { useRef } from "@wordpress/element"
import { __ } from '@wordpress/i18n'
import _ from 'lodash'
import ColorPicker from "react-best-gradient-color-picker"
import { RangeSlider, Select, SelectButtonGroup } from "../"
import Icons from "../assets/Icons"
import { Popover, PopoverButton } from "../components"
import ControlContainer from "../containers/ControlContainer"
import SingleColorPicker from "./color-picker/SingleColorPicker"

const BackgroundStyles = styled.div`
    display: inline-flex;
    gap: 8px;
`

const UploaderStyles = styled.div`
    border: 2px dashed var(--cw__secondary-color);
    border-radius: var(--cw__border-radius);
    background-color: #F6F6F6;
    width: 100%;
    min-height: 100px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: all .3s ease;
    &:hover{
        background-color: var(--cw__background-color);
    }
    >button{
        padding: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #ffffff;
        font-size: 24px;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .3s ease;
        svg{
            width: 1em;
            height: 1em;
        }
        &:hover{
            background-color: var(--cw__secondary-color);
            color: #ffffff;
        }
    }
    input[type="file"]{
        visibility: hidden;
        position: absolute;
        top: -9999999px;
        width: 0;
        height: 0;
    }
`

const RemoveButton = styled.button`
    border: 1px solid #bb2124;
    color: #bb2124;
    padding: 2px 16px;
    text-align: center;
    border-radius: 4px;
    font-size: 14px;
    margin-top: 6px;
    cursor: pointer;
    width: 100%;
    &:hover{
        background-color: #bb2124;
        color: #ffffff;
    }
`

const GradientPickerStyles = styled.div`
    > div, canvas{
        max-width: 100%;
    }
    #gradient-bar{
        div{
            max-width: 100%;
        }
    }
    #rbgcp-wrapper{
        > div{
            gap: 8px;
        }
    }
`

const ImageUploader = (props) => {
    return ControlContainer(({ value, onChange, wpMediaUploader, backgroundStyles }) => {
        const frameRef = useRef(null)

        const handleChange = () => {
            const attachment = frameRef.current.state().get('selection').first().toJSON()

            const { sizes, id, width, height } = attachment

            let url = sizes.full.url
            if (width < 700) {
                url = _.maxBy(Object.values(_.omit(sizes, 'large')), 'width').url
            }

            const _value = {
                ...(value || {}),
                attachment_id: attachment.id,
                url: url,
            }

            typeof onChange === 'function' && onChange({ ...value, ..._value })
            frameRef.current.close()
        }

        const handleFrameClose = () => {
            typeof wpMediaUploader.onFrameClose === 'function' && wpMediaUploader.onFrameClose()
        }

        const handleClick = () => {
            frameRef.current = wp.media({
                button: {
                    text: 'Select',
                    close: false,
                },
                states: [
                    new wp.media.controller.Library({
                        title: __('Select logo', 'rishi'),
                        library: wp.media.query({
                            type: wpMediaUploader.mediaType || 'image',
                        }),
                        multiple: false,
                        date: false,
                        priority: 20,
                        suggestedWidth: wpMediaUploader.media.width,
                        suggestedHeight: wpMediaUploader.media.height,
                    }),
                ],
            })

            frameRef.current.on('select', handleChange)
            frameRef.current.on('close', handleFrameClose)

            frameRef.current.setState('library').open()

            typeof wpMediaUploader.onClick === 'function' && wpMediaUploader.onClick(frameRef.current)
        }

        const handleRemoveImage = () => {
            const _value = {
                url: '',
                id: '',
                attachment_id: ''
            }

            typeof onChange === 'function' && onChange({ ...value, ..._value })
        }

        let _value;
        if (value) {
            ({ _value } = value);
        }
        const { url, x, y } = value;
        const { repeat, attachment, size } = backgroundStyles;
        return <div>
            <UploaderStyles
                style={{
                    background: `url('${url}') ${x}% ${y}%`,
                    backgroundRepeat: repeat,
                    backgroundAttachment: attachment,
                    backgroundSize: size
                }}
                onClick={handleClick}
            >
                <button type="button">{Icons.plus}</button>
            </UploaderStyles>
            <RemoveButton type="button" onClick={handleRemoveImage}>
                Remove Image
            </RemoveButton>
        </div>
    })(props)
}

const ImagePopover = ({ value, onChange }) => {

    const {
        backgroundColor,
        overlayColor,
        background_image: {
            url,
            x,
            y,
        },
        background_image,
        background_repeat,
        background_attachment,
        background_size
    } = value

    // value = {backgroundType: 'solid'}

    const handleOnChange = (key) => (value) => {
        onChange({
            background_type: 'image',
            [key]: value
        })
    }

    return <>
        <SingleColorPicker
            label="Color"
            value={backgroundColor}
            onChange={val => handleOnChange('backgroundColor')({ default: { color: val } })}
            direction="horizontal"
            interactive={true}
        />
        {"" != url && <SingleColorPicker
            label="Overlay Color"
            value={overlayColor}
            onChange={val => handleOnChange('overlayColor')({ default: { color: val } })}
            direction="horizontal"
            interactive={true}
            divider="bottom"
        />}
        <ImageUploader
            label="Image"
            value={background_image}
            onChange={handleOnChange('background_image')}
            wpMediaUploader={{
                mediaType: 'image',
                media: {
                    width: 'auto',
                    height: 'auto',
                    skipCrop: true,
                },
            }}
            backgroundStyles={
                {
                    repeat: background_repeat,
                    attachment: background_attachment,
                    size: background_size
                }
            }
        />
        {
            "" != url && <>
                <RangeSlider
                    label="X Position"
                    value={{ value: x || 0, unit: '%' }}
                    onChange={({ value: val }) => handleOnChange('background_image')({ ...background_image, x: val })}
                />
                <RangeSlider
                    label="Y Position"
                    value={{ value: y || 0, unit: '%' }}
                    onChange={({ value: val }) => handleOnChange('background_image')({ ...background_image, y: val })}
                />
                <Select
                    label="Repeat"
                    direction="horizontal"
                    value={background_repeat}
                    onChange={handleOnChange('background_repeat')}
                    options={[
                        { value: "default", label: "Default" },
                        { value: "no-repeat", label: "No-repeat" },
                        { value: "repeat", label: "Repeat" },
                        { value: "repeat-x", label: "Repeat-x" },
                        { value: "repeat-y", label: "Repeat-y" },
                    ]}
                    style={{ minWidth: "160px" }}
                    divider="bottom"
                />
                <SelectButtonGroup
                    label="Attachment"
                    value={background_attachment}
                    onChange={handleOnChange('background_attachment')}
                    options={[
                        { value: "default", label: "Default" },
                        { value: "scroll", label: "Scroll" },
                        { value: "fixed", label: "Fixed" },
                    ]}
                />
                <SelectButtonGroup
                    label="Size"
                    value={background_size}
                    onChange={handleOnChange('background_size')}
                    options={[
                        { value: "auto", label: "Auto" },
                        { value: "cover", label: "Cover" },
                        { value: "contain", label: "Contain" },
                    ]}
                />
            </>
        }
    </>
}

const GradientPopover = ({ value, onChange }) => {
    return <GradientPickerStyles>
        <ColorPicker
            value={value?.gradient || 'linear-gradient(90deg, rgba(96,93,93,1) 0%, rgba(255,255,255,1) 100%)'}
            onChange={val => onChange({ background_type: 'gradient', gradient: val })}
            hideAdvancedSliders
            hideColorGuide
            hideColorTypeBtns
            hideGradientStop
            hideInputs
            hideInputType
            hideEyeDrop
        />
    </GradientPickerStyles>
}


const Background = ({ value, onChange }) => {
    const handleOnChange = (val) => {
        onChange({ ...value, ...val })
    }
    return (
        <BackgroundStyles>
            <div id="gradient-handle-0"></div>
            <Popover content={<ImagePopover value={value} onChange={handleOnChange} />} placement="left" >
                <PopoverButton title="Background Image" className={'image' == value.background_type && 'changed'}>
                    {Icons.brush}
                </PopoverButton>
            </Popover>
            <Popover content={<GradientPopover value={value} onChange={handleOnChange} />} placement="left" >
                <PopoverButton title="Pick gradient color" className={'gradient' === value.background_type && 'changed'}>
                    {Icons.gradient}
                </PopoverButton>
            </Popover>
        </BackgroundStyles>
    )
}

export default (props) => {
    return ControlContainer(Background)(props)
}