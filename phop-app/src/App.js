import ProfileCard from'./componence/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'ปวรภพ  ตันไพบูลย์', nickname: 'ภพ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['เกม', 'แมว'] },
    { id: 1, name: 'ณัฐภูมิ เนืองเนตร', nickname: 'ภูมิ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['เกม', 'ไลฟ์สดเกม'] },
      { id: 1, name: 'อธิชา กิจเจริญ', nickname: 'แอน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['f1', 'แมนยู'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;