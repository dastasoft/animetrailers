type SummaryProps = {
  synopsis: string
  genres: string[]
}

export default function Summary({ synopsis, genres }: SummaryProps) {
  return (
    <div>
      <h3>Summary</h3>
      <p>{synopsis}</p>
      {genres.map((genre) => {
        return <span key={genre}>{genre}</span>
      })}
    </div>
  )
}
