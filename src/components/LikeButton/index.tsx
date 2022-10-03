/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Heart } from '../../assets/heart-solid.svg'

interface LikeButtonProps {
  liked: boolean
  handleLike: () => void
}

export default function LikeButton({ liked, handleLike }: LikeButtonProps) {
  return (
    <Heart
      width="30px"
      height="30px"
      fill={liked ? 'tomato' : 'gray'}
      stroke="black"
      strokeWidth="10px"
      onClick={handleLike}
    />
  )
}
