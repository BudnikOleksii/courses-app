import { FC } from 'react';

type Props = {
  link: string;
};

export const VideoBlock: FC<Props> = ({ link }) => {
  console.log(link);
  return <div></div>;
};
