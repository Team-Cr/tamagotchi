import './ActionBlock.scss';
type ActionBlockType = {
  image: string;
  text: string;
};
export const ActionBlock = (props: ActionBlockType) => {
  const { image, text } = props;
  return (
    <div className='action-block'>
      <img className='action-block__image' src={image} alt={`Icon-${text}`} />
      <p className='action-block__text'>{text}</p>
    </div>
  );
};
