import React from 'react'
import { Breadcrumbs, Link, Typography } from '@material-ui/core'

function BreadCrumbComponent() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={() => console.log('object')}>
        Material-UI
      </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={() => console.log('object')}>
          Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
  )
}

export default BreadCrumbComponent
