import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story image="https://cdn.codechef.com/sites/default/files/uploads/pictures/487a521907c444de8d23258ea5aa4baa.JPG" ProfileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWCl-m1VLTC5QNdWTkX5Rhp0HhNW-mshltj4nrU6UHsQ&s" title= "Juhaib Khan" />
      <Story image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FBL-XVi2ZUG9ooarpW5gth25c_hsE0IRJraPTZjRGw&s"  ProfileSrc="https://media.licdn.com/dms/image/C5603AQHzqeJ6woCvqg/profile-displayphoto-shrink_200_200/0/1517562612878?e=1703721600&v=beta&t=7LYhdK_66qlVLcSd6EcTeaVeP_KCp5AZUgoS7aX5NS8" title= "Tariq Husain Khan" />
      <Story image="https://media.licdn.com/dms/image/C4D22AQENUhqdhVojpA/feedshare-shrink_800/0/1677938580723?e=1702512000&v=beta&t=3W6gmDl4eYY8SKavO1-o15_U6_86M_KmDfKIiwVTsPY" ProfileSrc="https://cdn.insideiim.com/wp-content/uploads/2020/07/05115905/pic3-scaled.jpg"  title= "Sana Azeem" />
      <Story image="https://i1.rgstatic.net/ii/profile.image/321779115986944-1453729527516_Q512/Ayyaz-Siddique.jpg" ProfileSrc="https://media.licdn.com/dms/image/C5603AQF1xtjEi6OKwQ/profile-displayphoto-shrink_800_800/0/1651010645371?e=2147483647&v=beta&t=XrEfehT6D7mc3wJ2jOJlvGhQ52Hz90svviCeak2XuoU" title= "Ayyaz Siddiqui" />
      <Story image="https://radianceweekly.in/portal/assets/Firdaus-Khan.jpg" ProfileSrc="https://qph.cf2.quoracdn.net/main-thumb-87195513-200-fuzioxiymjtsxmsiyqftdsvhcylvbbky.jpeg" title= "Firdaus Khan" />
      {/* <Story image="https://www.indianbureaucracy.com/wp-content/uploads/2020/04/rahul-kumar-gupta-IAS-AM-2019.jpg" ProfileSrc="https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2019/04/sshot1.jpeg?fit=708%2C405&ssl=1" title= "Rahul Kumar Gupta" /> */}
    
    </div>
  )
}

export default StoryReel