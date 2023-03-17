import { FC, useRef } from 'react';
import ReactHlsPlayer from 'react-hls-player';

type Props = {
  link: string;
};

export const VideoBlock: FC<Props> = ({ link }) => {
  const playerRef = useRef<HTMLVideoElement>(null);

  return (
    <ReactHlsPlayer
      playerRef={playerRef}
      src={link}
      autoPlay={false}
      controls={true}
      width="100%"
      height="auto"
    />
  );
};
