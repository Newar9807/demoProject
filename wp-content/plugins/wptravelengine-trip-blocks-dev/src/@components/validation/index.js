import { isString } from 'lodash'

const isValidUnit = (unit) => {
    if (isString(unit)) {
        return unit?.match(/(\px|em|pt|vw|vh|rem|%|cm|mm|Q|in|pc)/g) ?? []
    }
    return unit
}
export const unitRegex = new RegExp(/(-?\d+)(px|em|pt|vw|vh|rem|%|cm|mm|Q|in|pc)?/)

export { isValidUnit }