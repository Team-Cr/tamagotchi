import styles from './styles.module.scss';

export type ProfileInputProps = {
  name: string,
  value?: string
}

export const ProfileInput = ({ name, value }: ProfileInputProps) => {
  return (
    <label className={styles.input}>
      <span>{name}</span>
      <input dir="rtl" type='text' className={styles.input__value} value={value}/>
    </label>
  )
}
