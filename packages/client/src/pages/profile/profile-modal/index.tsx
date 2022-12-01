import { Modal } from '@/shared/ui/Modal'
import styles from '@/pages/profile/profile-modal/styles.module.scss'
import { Button } from '@/shared/ui/Button'
import { ChangeEvent, FC, useState } from 'react'
import { ModalProps } from '@/shared/ui/Modal/ui/Modal'
import { User } from '@/shared/api/swagger/models'
import { AuthAPI, SigninData } from '@/shared/api/swagger/auth'
import { PasswordUpdate, ProfileAPI } from '@/shared/api/swagger/user'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/shared/api/swagger/api'

type ProfileModalProps = {
  login: string
}

type newPasswordProps = {
  old: string,
  new: string,
  confirm: string
}

export const ProfileModal: FC<Omit<ModalProps, 'children' | 'title'> & ProfileModalProps> = (props) => {
  const {
    show,
    setModalActive,
    login
  } = props;

  const [password, setPassword] = useState<newPasswordProps>({
    old: '',
    new: '',
    confirm: ''
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as keyof User;
    setPassword((prevState) => ({
      ...prevState,
      [name]: event.target.value
    }))
  }

  const updatePassword = () => {
    // TODO pass error to inputs
    if (password.new !== password.confirm) {
      return;
    }
    const data: PasswordUpdate = {
      oldPassword: password.old,
      newPassword: password.new
    }

    ProfileAPI.updatePassword(data).then(() => {
      setModalActive(false);
      alert('Password is changed')
    }).catch((err: AxiosError<ErrorResponse>) => {
      alert(err.response?.data.reason || err.message)
    })
  }

  return (
    <Modal show={show} setModalActive={setModalActive} title={"Change password"}>
      {/* TODO change to global input */}
      <div className={styles.profile__modal_fields}>
        <input type='password' name={'old'} placeholder='Old password' onChange={handleChange}/>
        <input type='password' name={'new'} placeholder='New password' onChange={handleChange}/>
        <input type='password' name={'confirm'} placeholder='Confirm password' onChange={handleChange}/>
      </div>
      <div className={styles.profile__modal_footer}>
        <Button size='small'
                color='secondary'
                onClick={() => {
                  setModalActive(false)
                }}
        >Cancel</Button>
        <Button size='small'
                color='success'
                onClick={updatePassword}
        >Save</Button>
      </div>
    </Modal>
  )
}
