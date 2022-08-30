type TrailerProps = {
  videoURL: string
}

export default function Trailer({ videoURL }: TrailerProps) {
  return (
    <div>
      <iframe
        width="100%"
        height="400"
        src={videoURL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
