function GenreBox({ genre, onGenreChange, genres }) {
  return (
    <select value={genre} onChange={onGenreChange}>
      <option value="all">ทุกประเภท</option>
      {genres.map(g => (
        <option key={g} value={g}>{g}</option>
      ))}
    </select>
  )
}

export default GenreBox;