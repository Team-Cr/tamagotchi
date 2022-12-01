import { Button } from '@/shared/ui/Button'
import styles from './styles.module.scss'
import { ProfileAvatar } from '@/pages/profile/profile-avatar'
import { ProfileInput } from '@/pages/profile/profile-input'
import React, { ChangeEvent, useCallback, useEffect } from 'react'
import { ProfileModal } from '@/pages/profile/profile-modal'
import { User } from '@/shared/api/swagger/models'
import { ProfileAPI } from '@/shared/api/swagger/user'
import { AuthAPI } from '@/shared/api/swagger/auth'

export const Profile = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [user, setUser] = React.useState<User>({
    id: -1,
    first_name: '',
    second_name: '',
    display_name: '',
    login: '',
    email: '',
    phone: ''
  });

  const fetchUser = async () => {
    return await AuthAPI.getUser();
  }

  const toggleModal = useCallback((isOpen: boolean) => {setIsOpen(isOpen)}, []);

  useEffect(() => {
    fetchUser()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }, [])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name as keyof User;
    setUser((prevState) => ({
      ...prevState,
      [name]: event.target.value
    }))
  }

  const saveChanges = useCallback(async () => {
    await ProfileAPI.updateData(user)
      .then(() => {
        alert('Profile is updated')
      }).catch((err) => console.error(err))
  }, [user])

  return (
    <div className={styles.root}>
      <div className={styles.profile__container}>
        <ProfileAvatar avatar={user.avatar}/>

        <Button
          size={'small'}
          onClick={ () => toggleModal(true) }
        >Change password</Button>

        <div className={styles.profile__fields}>
          <ProfileInput label='Name' name={'first_name'} value={user.first_name} onChange={handleChange}/>
          <ProfileInput label='Surname' name={'second_name'} value={user.second_name} onChange={handleChange}/>
          <ProfileInput label='Cat name' name={'display_name'} value={user.display_name} onChange={handleChange}/>
          <ProfileInput label='Email' name={'email'} value={user.email} onChange={handleChange}/>
          <ProfileInput label='Number' name={'phone'} value={user.phone} onChange={handleChange}/>
        </div>

        <Button color='success' onClick={saveChanges}>Save changes</Button>

        <ProfileModal login={user.login} show={modalIsOpen}  setModalActive={setIsOpen}/>
      </div>
    </div>
  )
}
