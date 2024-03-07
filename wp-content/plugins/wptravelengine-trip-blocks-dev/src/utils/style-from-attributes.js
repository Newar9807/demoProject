export default function styleFromAttributes(attributes, styles = {}) {
    const { textColor, background: backgroundColor, link: { initial, hover } } = attributes

    return {
        color: textColor,
        backgroundColor,
        '--link-color': initial || 'inherit',
        '--link-hover-color': hover || 'inherit',
        ...styles,
    }
}
