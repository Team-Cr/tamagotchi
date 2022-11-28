import { Button } from '@/shared/ui/Button';
import styles from './styles.module.scss';
import { ProfileAvatar } from '@/pages/profile/profile-avatar'
import { ProfileInput } from '@/pages/profile/profile-input'
import React from 'react'
import { Modal } from '@/shared/ui/Modal'

export const Profile = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // TODO add default layout
  return (
    <div className={styles.root}>
      <div className={styles.profile__container}>

        <ProfileAvatar/>

        <Button
          size={'small'}
          onClick={() => {setIsOpen(true)}}
        >Change password</Button>

        <div className={styles.profile__fields}>
          <ProfileInput name='name'/>
          <ProfileInput name='Surname'/>
          <ProfileInput name='Cat name'/>
          <ProfileInput name='Email'/>
          <ProfileInput name='Number'/>
        </div>

        <Button color='success'>Save changes</Button>

      </div>

      <Modal show={modalIsOpen} setModalActive={setIsOpen} title={"Change password"}>
        {/*TODO change to global input*/}
        <div className={styles.profile__modal_fields}>
          <input type='text' placeholder='Old password'/>
          <input type='text' placeholder='New password'/>
          <input type='text' placeholder='Confirm password'/>
        </div>
        <div className={styles.profile__modal_footer}>
          <Button size='small'
                  color='secondary'
                  onClick={() => {setIsOpen(false)}}
          >Cancel</Button>
          <Button size='small'
                  color='success'
                  onClick={() => {setIsOpen(false)}}
          >Save</Button>
        </div>
      </Modal>
    </div>
  )
}
