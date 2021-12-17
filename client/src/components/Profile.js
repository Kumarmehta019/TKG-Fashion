import React from 'react'
import { Breadcrumb, Segment } from 'semantic-ui-react'

const Profile = () => {

  const myDate = new Date(null)
  const hrs = myDate.getHours(null)

  let greet = null

  if (hrs < 12) {
    greet = '🌞 Good Morning,'
  } else if (hrs >= 12 && hrs <= 17) {
    greet = '☀️ Good Afternoon,'
  } else if (hrs >= 17 && hrs <= 24) {
    greet = '🌜 Good Evening,'
  }




  return (
    <section id='profile-section'>
      <Segment secondary textAlign='center' size='mini' inverted color='grey'>
        <Breadcrumb>
          <Breadcrumb.Section link href='/'>Home</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section link href='/'>Registration</Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>Profile</Breadcrumb.Section>
        </Breadcrumb>
      </Segment>
      <div >
        <h1>{greet}</h1>
      </div>
    </section>


  )
}

export default Profile