import styles from './Link.module.scss';

interface LinkProps {
  name: string;
  href: string;
  label: string;
  icon: string;
}

const Link = (props: LinkProps) => {
  return (
    <>
      <div className={styles.link__container}>
        <div className={styles.link__centered}>
          <a className={styles.link} href={props.href}>
            {props.label}
            &nbsp;
            {props.icon ? (
              <span>
                <img className={styles.link__icon} src={props.icon} alt='gatito' />
              </span>
            ) : (
              ''
            )}
          </a>
        </div>
      </div>
    </>
  );
};

export { Link };
