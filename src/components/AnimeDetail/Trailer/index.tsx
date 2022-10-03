import { ResponsiveContainer } from './ResponsiveContainer'

interface TrailerProps {
  videoURL: string
}

export default function Trailer({ videoURL }: TrailerProps) {
  return (
    <ResponsiveContainer>
      <iframe
        src={videoURL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </ResponsiveContainer>
  )
}
