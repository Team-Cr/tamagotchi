import styles from './styles.module.scss';
import { ChangeEvent } from 'react'

export type ProfileInputProps = {
  label: string,
  name?: string,
  value?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const ProfileInput = ({ name, value, onChange, label }: ProfileInputProps) => {
  return (
    <label className={styles.input}>
      <span>{label}</span>
      <input defaultValue={value} name={name} type='text' className={styles.input__value} onChange={onChange}/>
    </label>
  )
}
