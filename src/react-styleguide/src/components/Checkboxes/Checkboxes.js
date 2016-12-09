import React, { Component } from 'react'

const labelClasses = 'inline-flex v-top items-center lh-title f4 overflow-hidden pointer eh-checkbox'
const inputClasses = 'o-0 absolute left--1'
const boxClasses = 'mr3 br2 ba b--white hover-b--green eh-checkbox-icon'
const checkedClasses = ''
const disabledClasses = 'disabled'

class Checkbox extends Component {
  static propTypes = {
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    checked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onChange: React.PropTypes.func, // Called when user changes checked state
    onClick: React.PropTypes.func, // Called when checkbox is clicked
    radio: React.PropTypes.bool, // Should be rendered as a radio (exclusive option)
    toggle: React.PropTypes.bool // Should be rendered as a toggle (on or off)
  }

  constructor(props) {
    super(props)
  
    const checked = 'checked' in props ? props.checked : false

    this.state = { checked: checked }
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({ checked: nextProps.checked })
    }
  }

  canToggle = () => {
    const { disabled, radio } = this.props
    const { checked } = this.state

    console.log('Toggling')
    return !disabled && !(radio && checked)
  }

  handleChange = (e) => {
    console.log('Clicked!')
    const { onChange, onClick } = this.props
    const { checked } = this.state

    if (this.canToggle()) {
      if (onClick) {
        onClick(e, { ...this.props, checked: !!checked })
      }
      
      if (onChange) {
        onChange(e, { ...this.props, checked: !checked })
      }
      
      this.setState({ checked: !checked })
    }
  }

  render() {
    const { name, label, disabled, onChange, onClick } = this.props
    const { checked } = this.state
  
    return (
      <label name={name}
        className={`${labelClasses} ${checked ? checkedClasses : ''} ${disabled ? disabledClasses : ''}`}
      >
          <input type="checkbox" className={inputClasses} disabled={disabled} checked={checked}
            onClick={onClick} onChange={this.handleChange}
          />
          <i className={boxClasses} />
          {label}
      </label>
    )
  }
}

const checkboxExampleList = [
  {
    label: 'Checkbox'
  },
  {
    label: 'Checkbox',
    checked: true
  },
  {
    label: 'Checkbox',
    disabled: true
  },
  {
    label: 'Checkbox',
    checked: true,
    disabled: true
  }
]

/**
 * Checkbox Examples for Style Guide
 */
export const CheckboxExamples = () => {
  return (
    <div className='flex flex-row justify-center flex-wrap items-center'>
      {checkboxExampleList.map((checkbox, i) => {
        return (
          <div className='mb2 mh2' key={i}>
            <Checkbox {...checkbox} />
          </div>
        )
      })}
    </div>
  )
}

/**
 * Example Code for above Checkboxes
 */
export const CheckboxExampleCode = [
  `<Checkbox label='Checkbox' />`,
  `<Checkbox label='Checkbox' checked />`,
  `<Checkbox label='Checkbox' disabled />`,
  `<Checkbox label='Checkbox' checked disabled />`,
  
]

/**
* Prop information to be rendered into the table
*/
export const CheckboxPropsTable = [
  {
    prop: 'name',
    type: 'string',
    description: 'HTML input name'
  },
  {
    prop: 'label',
    type: 'string',
    description: 'Label to appear next to the checkbox'
  },
  {
    prop: 'checked',
    type: 'boolean (false by default)',
    description: 'Determines if checkbox is checked'
  },
  {
    prop: 'disabled',
    type: 'boolean (false by default)',
    description: 'Determines if checkbox is disabled'
  },
  {
    prop: 'onChange',
    type: 'function',
    description: 'Function called when user changes checked state'
  },
  {
    prop: 'onClick',
    type: 'function',
    description: 'Function called when checkbox or label is clicked'
  }
]

export default Checkbox

