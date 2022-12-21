import React from 'react';

type SidebarProps = {
  closeSidebar: () => void;
};
export default ({ closeSidebar }: SidebarProps) => {
  return (
    <>
      <h1>Sidebar</h1>
      <button onClick={closeSidebar}>Close Sidebar</button>
    </>
  );
};
