import { type FC, useState } from 'react';
import { Box } from '@mui/material';

import { useSectionRenderer } from '../../common/hook/useSectionRenderer';
import DashboardNav from './DashboardNav';
import ProfileTopSection from './ProfileTopSection';
import WorkspaceTopSection from './WorkspaceTopSection';
import WorkspaceUsersSection from './WorkspaceUsersSection';
import styles from './dashboardSection.module.scss';

export type DashboardTabId = 'profile' | 'workspace';

const DashboardSection: FC = () => {
  const [activeTab, setActiveTab] = useState<DashboardTabId>('profile');

  const topSection = useSectionRenderer<DashboardTabId>({
    activeId: activeTab,
    defaultId: 'profile',
    sections: {
      profile: <ProfileTopSection />,
      workspace: <WorkspaceTopSection />
    }
  });

  const bottomSection = useSectionRenderer<DashboardTabId>({
    activeId: activeTab,
    defaultId: 'profile',
    sections: {
      profile: null,
      workspace: <WorkspaceUsersSection />
    }
  });

  return (
    <Box className={styles.root}>
      <DashboardNav activeTab={activeTab} onChange={setActiveTab} />

      <Box className={styles.rightColumn}>
        <Box className={styles.topSection}>{topSection}</Box>
        {bottomSection && <Box className={styles.bottomSection}>{bottomSection}</Box>}
      </Box>
    </Box>
  );
};

export default DashboardSection;


