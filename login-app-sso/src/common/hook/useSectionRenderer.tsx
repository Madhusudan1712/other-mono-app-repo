import { useMemo, type ReactNode } from 'react';

type SectionConfigValue = ReactNode | (() => ReactNode);

export type SectionConfig<TSectionId extends string = string> = Record<TSectionId, SectionConfigValue>;

type UseSectionRendererParams<TSectionId extends string> = {
  activeId: TSectionId | null | undefined;
  sections: SectionConfig<TSectionId>;
  /**
   * Fallback section id to use when activeId is null/undefined
   * or does not exist in the sections map.
   */
  defaultId?: TSectionId;
};

export function useSectionRenderer<TSectionId extends string>({
  activeId,
  sections,
  defaultId
}: UseSectionRendererParams<TSectionId>): ReactNode {
  const resolvedKey = activeId && sections[activeId] ? activeId : defaultId;

  const content = useMemo<ReactNode>(() => {
    if (!resolvedKey) return null;

    const value = sections[resolvedKey];
    if (!value) return null;

    return typeof value === 'function' ? (value as () => ReactNode)() : value;
  }, [resolvedKey, sections]);

  return content;
}


