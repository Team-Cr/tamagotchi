import './LevelOrHpBar.scss';

type LevelOrHpBarProps = {
  state: number;
  maxState: number;
  theme: 'level' | 'hp';
  label: number | string;
};
export const LevelOrHpBar = (props: LevelOrHpBarProps) => {
  const { label, theme, state, maxState } = props;

  const percent = 100 - state / (maxState / 100);

  return (
    <div className={`info-line ${theme}`}>
      <p className={`info-line__text ${theme}`}>{label}</p>
      <div className='info-line__empty' style={{ width: `${percent}%` }}></div>
    </div>
  );
};
