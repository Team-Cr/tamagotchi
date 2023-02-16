import MessageSrc from '@/shared/assets/images/comment.png';
import { Forum } from '@/shared/lib/api';
import { Link } from '@/shared/ui/Link';

import css from './ForumEntry.module.scss';

type ForumEntryProps = Forum & {
  state?: Record<string, unknown>;
  link?: string;
};

export const ForumEntry = (props: ForumEntryProps) => {
  const { title, id, link, state } = props;

  return (
    <div className={css.entry}>
      <div className={css.entry__group}>
        <img src={MessageSrc} alt='' className={css.entry__group__icon} />
        <Link href={link ?? id.toString()} className={css.entry__group__link} state={state}>
          {title}
        </Link>
      </div>
    </div>
  );
};
