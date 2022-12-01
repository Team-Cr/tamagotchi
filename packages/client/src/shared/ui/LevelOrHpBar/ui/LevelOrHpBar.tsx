import './LevelOrHpBar.scss';

type LevelOrHpBarProps = {
  stat: number;
  theme: 'level' | 'hp';
  text: number | string;
};
export const LevelOrHpBar = (props: LevelOrHpBarProps) => {
  const { stat, text, theme } = props;
  return (
    <div className={`info-line ${theme}`}>
      <p className={`info-line__text ${theme}`}>{text}</p>
      <div className='info-line__empty' style={{ width: `${100 - stat}%` }}></div>
    </div>
  );
};
