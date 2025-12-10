import { type FC, useState } from 'react';
import { Box } from '@mui/material';

import { useSectionRenderer } from '../../common/hook/useSectionRenderer';
import MyAccountNav from './myAccountNav/MyAccountNav';
import ProfileTopSection from './profile/ProfileTopSection';
import WorkspaceTopSection from './workspace/WorkspaceTopSection';
import WorkspaceUsersSection from './workspace/WorkspaceUsersSection';
import styles from './myAccountSection.module.scss';
import BrandTopSection from './brand/BrandTopSection';

export type MyAccountTabId = 'profile' | 'workspace' | 'brand';

const MyAccountSection: FC = () => {
  const [activeTab, setActiveTab] = useState<MyAccountTabId>('profile');

  const topSection = useSectionRenderer<MyAccountTabId>({
    activeId: activeTab,
    defaultId: 'profile',
    sections: {
      profile: <ProfileTopSection />,
      workspace: <WorkspaceTopSection />,
      brand: <BrandTopSection />
    }
  });

  const bottomSection = useSectionRenderer<MyAccountTabId>({
    activeId: activeTab,
    defaultId: 'profile',
    sections: {
      profile: null,
      workspace: <WorkspaceUsersSection />,
      brand: null
    }
  });

  return (
    <Box className={styles.root}>
      <MyAccountNav activeTab={activeTab} onChange={setActiveTab} />

      <Box className={styles.rightColumn}>
        <Box className={styles.topSection}>{topSection}</Box>
        {bottomSection && <Box className={styles.bottomSection}>{bottomSection}</Box>}
      </Box>
    </Box>
  );
};

export default MyAccountSection;


