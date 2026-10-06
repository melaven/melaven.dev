import { flushSync } from 'react-dom';
import { type MouseEvent, type ReactNode } from 'react';

interface AnimatedLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> {
  to: string;
  children: ReactNode;
  className?: string;
  onNavigate?: (to: string) => void;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export const AnimatedLink = ({ to, children, className, onNavigate, onClick, ...props }: AnimatedLinkProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented) return;

    event.preventDefault();

    if (!document.startViewTransition) {
      onNavigate ? onNavigate(to) : window.history.pushState({}, '', to);
      return;
    }

    const x = event.clientX;
    const y = event.clientY;

    document.documentElement.style.setProperty('--transition-origin-x', `${x}px`);
    document.documentElement.style.setProperty('--transition-origin-y', `${y}px`);

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        if (onNavigate) {
          onNavigate(to);
        } else {
          window.history.pushState({}, '', to);
        }
      });
    });

    transition.finished.finally(() => {
      document.documentElement.style.removeProperty('--transition-origin-x');
      document.documentElement.style.removeProperty('--transition-origin-y');
    });
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};
