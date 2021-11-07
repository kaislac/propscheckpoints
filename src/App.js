import './App.css'
import Profile from './profile/Profile'
import image from './imageInSrc.jpg'

function App() {
  const person = {
    fullName: 'kais lachaal',
    bio: 'M',
    profession: 'Ingeneer',
    img: image,
  }
  const handleName = () => {
    alert(person.fullName)
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <Profile person={person} onClick={() => handleName()} />
      </header>
    </div>
  )
}

export default App
