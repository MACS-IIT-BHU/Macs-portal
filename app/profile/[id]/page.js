import React from 'react'

const UserProfilePage = ({params}) => {
  return (
    <div className='h-[80vh] pt-20'>
      ProfilePage
      <h1>This is the id of the user, we can do anything by using this id {params.id}</h1>
    </div>
  )
}

export default UserProfilePage