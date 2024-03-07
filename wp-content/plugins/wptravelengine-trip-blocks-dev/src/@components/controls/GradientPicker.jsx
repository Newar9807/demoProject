import React, { useState } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'

const GradientPicker = ({ value, onChange }) => {
  const [color, setColor] = useState("linear-gradient(90deg, transparent 0%)");
  return <ColorPicker
    value={value}
    onChange={onChange}
  />
}

export default GradientPicker