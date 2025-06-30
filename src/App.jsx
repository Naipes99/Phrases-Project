import { useState } from "react"
import {randomItem} from './lib/utils'
import Card from "./components/Card"
import img1 from './assets/bg1.jpg'
import img2 from './assets/bg2.jpg'
import img3 from './assets/bg3.jpg'
import img4 from './assets/bg4.jpg'
import img5 from './assets/bg5.jpg'
import phrases from './data/phrases.json'
import './App.css'


const images = [img1, img2, img3, img4, img5]

function App() {
  const [phrase, setPhrase] = useState (randomItem(phrases))
  const [image, setImage] = useState (randomItem(images))

function btnChange (){
  setPhrase(randomItem(phrases))
  setImage(randomItem(images))
}

const styles = {
  backgroundImage: `url(${image})`,
}
  return (
    <div className="container" style={styles}>
      <Card phrase= {phrase} onChange= {btnChange}/>
    </div>
  )
}

export default App
