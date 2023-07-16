import { FC } from 'react';
import cls from './Component.module.scss';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}
export const Icon: FC<IconProps> = (props) => {
  const { Svg } = props;

  return (
    <div className={cls.check}>
      <Svg className={''} />
    </div>
  );
};
