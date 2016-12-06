import React from 'react'
import { SuccessIcon, PlusIcon, MinusIcon,
         XIcon, BangIcon, QuestionIcon } from '../Icons/Icons'

/*
**
* Success / Tooltip
*
<div class="relative eh-text-field-wrapper">
  <input type="password" class="" value="********">

  <div class="absolute br-pill flex justify-center items-center green eh-input-status-icon">
    <i class="fa fa-check-circle"></i>
  </div>

  <!-- PASSWORD STRENGTH TOOLTIP -->
  <div class="absolute db br2 w-100 mt4 pa3 sans-serif navy bg-white eh-input-tooltip">
    <h5 class="f5 normal ma0 mb3">Password Strength: <strong class="fw-5">Good</strong></h5>
    <div class="w-100 mb3 br-pill overflow-hidden bg-light-gray">
      <div class="bg-blue pa1 w-50"></div>
    </div>
    <div class="f6 lh-copy">Use at least 8 characters. Don’t use a password from another site, or somethings too obvious like your pet’s name. <a href="#" class="orange mh1">Why?</a></div>
    </div>
</div>

*/

const commonClasses = 'db w-100 pl3 pr5 pv3 lh-copy br2 bg-dark-navy ba eh-text-field'
const standardClasses = 'white b--gray focus-b-gray'
const errorClasses = 'red b--red focus-b--red'
const errMsgClases = 'db red f5 sans-serif mt3'
const successClasses = 'white b--green focus-b--green'
const disabledClasses = 'disabled'

const Input = ({type='text', placeholder, required=false, error=false,
                errMsg, disabled=false, value, icon}) => {
  let inputStyles = standardClasses

  // If field is required, set style to error or success
  if (required) {
    inputStyles = error ? errorClasses : successClasses
  }

  return (
    <div className='relative eh-text-field-wrapper'>
      <input type={type} placeholder={placeholder} required={required} disabled={disabled} defaultValue={value}
        className={`${commonClasses} ${inputStyles} ${disabled ? disabledClasses : ''}`}
      />
      {icon}
      {errMsg
        ? <div className={errMsgClases}>{errMsg}</div>
        : null 
      }
    </div>
  )
}

Input.propTypes = {
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  required: React.PropTypes.bool,
  error: React.PropTypes.bool,
  errMsg: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  defaultValue: React.PropTypes.string
}

/**
* Input Examples for Style Guide 
*/
export const InputExamples = () => {
  const Header = ({title}) => (
    <span className='db f4 fw5 lh-copy mb2'>{title}</span>
  )

  const exampleLayoutClasses = 'w-100 w-50-m w-33-l pr3-m pl4-l mt4'
  
  return(
    <div className='flex flex-row justify-center flex-wrap items-center'>

      <div className={exampleLayoutClasses}>
        <Header title='Empty Field' />
        <Input />
      </div>

      <div className={exampleLayoutClasses}>
        <Header title='Field with Placeholder' />
        <Input placeholder='Placeholder' />
      </div>

      <div className={exampleLayoutClasses}>
        <Header title='Disabled Field' />
        <Input value='Egghead' disabled />
      </div>

      <div className={exampleLayoutClasses}>
        <Header title='Error*' />
        <Input value='Egghead' required error
          errMsg='Password must contain at least 8 characters.'
          icon={<XIcon />}
          value='With Error'
        />
      </div>

      <div className={exampleLayoutClasses}>
        <Header title='Success*' />
        <Input value='Egghead' required
          icon={<SuccessIcon />}
          value='password'
          type='password'
        />
      </div>
    </div>
  )
}

export default Input
