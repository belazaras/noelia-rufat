import clsx from 'clsx';

export function Grid({
  as: Component = 'div',
  className,
  flow = 'row',
  gap = 'default',
  items = 3,
  layout = 'default',
  ...props
}) {
  const layouts = {
    default: `grid-cols-1 ${items === 2 && 'md:grid-cols-2'}  ${items === 3 && 'sm:grid-cols-3'
      } ${items > 3 && 'md:grid-cols-3'} ${items >= 3 && 'lg:grid-cols-3'}`,
    products: `grid-cols-2 ${items >= 3 && 'md:grid-cols-3'} ${items >= 4 && 'lg:grid-cols-4'
      }`,
    auto: 'auto-cols-auto',
    blog: 'grid-cols-1 md:grid-cols-2',
    home: 'grid-cols-1 md:grid-cols-3 lg:grid-cols-4',
  };

  const gaps = {
    default: 'grid gap-2 gap-y-6 md:gap-4 lg:gap-6',
    blog: 'grid gap-6',
    home: 'grid gap-8',
  };

  const flows = {
    row: 'grid-flow-row',
    col: 'grid-flow-col',
  };

  const styles = clsx(flows[flow], gaps[gap], layouts[layout], className);

  return <Component {...props} className={styles} />;
}
