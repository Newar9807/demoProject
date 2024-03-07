export default function removeAnchorTag(value) {
    // To do: Refactor this to use rich text's removeFormat instead.
    return value.toString().replace(/<\/?a[^>]*>/g, '')
}