import {
  Children,
  isValidElement,
  type ComponentType,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode
} from 'react';
import { Box, CssBaseline } from '@mui/material';

import styles from './appLayout.module.scss';

type AppLayoutProps = {
  className?: string;
};

type SlotProps = { children?: ReactNode };

function createSlot() {
  return function Slot({ children }: SlotProps) {
    return <>{children}</>;
  };
}

const TopToolbar = createSlot();
const LeftSidebar = createSlot();
const RightBody = createSlot();

function AppLayout({ children, className }: PropsWithChildren<AppLayoutProps>) {
  const allChildren = Children.toArray(children) as ReactElement[];

  const getSlot = (slot: ComponentType<SlotProps>): ReactNode | undefined => {
    const el = allChildren.find(
      c => isValidElement(c) && c.type === slot
    ) as ReactElement<SlotProps> | undefined;

    return el?.props?.children;
  };

  const topToolbar = getSlot(TopToolbar);
  const leftSidebar = getSlot(LeftSidebar);
  const rightBody = getSlot(RightBody);

  return (
    <Box className={`${styles.appLayout} ${className ?? ''}`}>
      <CssBaseline />

      <Box component="aside" className={styles.leftSidebar}>
        {leftSidebar}
      </Box>

      <Box className={styles.rightPane}>
        <Box component="header" className={styles.topToolbar}>
          {topToolbar}
        </Box>

        <Box component="main" className={styles.rightBody}>
          {rightBody}
        </Box>
      </Box>
    </Box>
  );
}

type AppLayoutType = typeof AppLayout & {
  TopToolbar: typeof TopToolbar;
  LeftSidebar: typeof LeftSidebar;
  RightBody: typeof RightBody;
};

const Composed = AppLayout as AppLayoutType;

Composed.TopToolbar = TopToolbar;
Composed.LeftSidebar = LeftSidebar;
Composed.RightBody = RightBody;

export default Composed;


