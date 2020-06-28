import React from 'react'
import { Paper, Grid } from '@material-ui/core'
import { useSidebarStyles } from './LeftSideBar'

function RightSideBar() {
  const sidebarClasses = useSidebarStyles()

  return (
    <Paper className={sidebarClasses.sideBarContainer}>
      <div>right row full of stuff
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque error nisi omnis aut quibusdam. Id cum incidunt, fuga eum quo nihil quibusdam. Sint exercitationem magni odit amet tempora, obcaecati porro.
    </div>
    </Paper>
  )
}

export default RightSideBar
