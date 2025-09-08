import { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={['container mx-auto', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
}


