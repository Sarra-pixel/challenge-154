import Card from './Card';
import Australia from '../assets/Australia.jpg';
import greece from '../assets/greece.jpg';
import turkye from '../assets/turkye.jpg';
import './Content.css'; // Import the CSS file

function Content() {
  const data = [
    { name: "Australia", img: Australia, liked: false },
    { name: "greece", img: greece, liked: true },
    { name: "Turkye", img: turkye, liked: false },
  ]

  return (
    <div className="content-container">
      {data.map((element, index) => (
        <Card
          key={index}
          element={element}
        />
      ))}
    </div>
  )
}

export default Content