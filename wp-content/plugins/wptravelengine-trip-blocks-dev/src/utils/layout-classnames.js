export default function layoutClassnames(layout) {
    if (!layout) return
    const { justifyContent } = layout
    return {
        'flex': layout.type === 'flex',
        'justify-center': justifyContent === 'center',
        'justify-start': justifyContent === 'left',
        'justify-end': justifyContent === 'right',
        'justify-between': justifyContent === 'space-between',
    }
}