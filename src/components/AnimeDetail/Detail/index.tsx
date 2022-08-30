type DetailProps = {
  title: string
  episodeCount: number
  status: string
}

export default function Detail({ title, episodeCount, status }: DetailProps) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <div>
          {episodeCount} - {status}
        </div>
      </div>
    </div>
  )
}
