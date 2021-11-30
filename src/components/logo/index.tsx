import { Image } from 'antd';

interface Props {
  src: string;
  canPreview?: boolean;
}

export const Logo: React.FC<Props> = ({ src, canPreview }) => (
  <Image src={src} preview={canPreview} />
);
