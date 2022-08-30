type StreamingListProps = {
  streaming: {
    name: string
    url: string
  }[]
}

export default function StreamingList({ streaming }: StreamingListProps) {
  return (
    <div>
      <h3>Where to watch</h3>
      <ul>
        {streaming.map(({ name, url }) => {
          return (
            <li key={name}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </li>
          )
        })}
      </ul>

      <p>*Some titles may not be available in your country</p>
    </div>
  )
}
