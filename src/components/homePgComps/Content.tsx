import React from 'react'
import { Grid, Paper, Typography, Box, useTheme, Button, createStyles, makeStyles, Theme } from '@material-ui/core'
import { Title } from '@material-ui/icons'
import { ContentT } from '../../pages/HomeBlogPage'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    indentation: { textIndent: 20 },
    info: { marginBottom: 20, },
    row: { flexDirection: 'row', display: 'flex', justifyContent: 'space-between',  },
  })
)

function Content({ data }: { data: ContentT }) {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <Paper style={{ padding: theme.spacing(2), marginBottom: theme.spacing(2) }}>
      <div className={classes.info}>
        <div className={classes.row}>
          <Typography variant='h4'>{data.title}</Typography>
          <Typography variant='subtitle2'>{data.datePublished}</Typography>
        </div>
        <Typography variant='subtitle2'>{data.subTitle}</Typography>
      </div>
      <Typography variant='body1' paragraph className={classes.indentation}>
        {data.content}
      </Typography>
    </Paper>
  )
}

export default Content
