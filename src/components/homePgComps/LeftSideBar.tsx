import React, { useRef, useState } from 'react'
import { Grid, Paper, Typography, Theme, makeStyles, createStyles, ListSubheader, ListItemIcon, ListItemText, ListItem, List, Collapse, Divider } from '@material-ui/core'

export const useSidebarStyles = makeStyles((theme: Theme) =>
  createStyles({
    sideBarContainer: { backgroundColor: 'rgba(255,255,255,.4)', height: "100%" },
  })
)

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    hierarchyList: {},
  })
)

const mlNestedItem = 20

const nestedItems = [
  {
    item: 'store', nested: [
      {
        item: 'milk', nested: [
          {
            item: 't23', nested: [
              { item: 'last', nested: null },
              {
                item: 'last', nested: [
                  { item: 'last', nested: null }
                ]
              }
            ]
          }
        ]
      },
      { item: 'cerial', nested: null },
      // {
      //   item: 'yogart', nested: [
      //     { item: 'dairy' },
      //     { item: 'cow' },
      //   ]
      // },
    ]
  },
  { item: 'freds' },
  {
    item: 'pc', nested: [
      { item: 'lol' },
      { item: 'MC' }
    ]
  },

]

const NestedItem = ({ collectionNested, marginLeft, nestedOpen, whatItem, onClickHandler }) => {
  const classes = useStyles()

  return (
    <>
      {collectionNested.map((collection, index) => {
        const returnWeatherNestedIsOpen = (whatItem, whatNestedItem) => {
          if (nestedOpen[whatItem]) {
            if (nestedOpen[whatItem][whatNestedItem]) {
              return true
            } else return false

          } else return false
        }
        return (
          <>
            <Collapse in={true} timeout="auto" unmountOnExit>
              {`${returnWeatherNestedIsOpen(whatItem, index)}+ 1`}
              sd
              <List component="div" disablePadding >
                <ListItem button onClick={() => onClickHandler(whatItem, index)}>
                  <ListItemText primary={collection.item} style={{ marginLeft: marginLeft }} />
                </ListItem>
              </List>
            </Collapse>
            {collection.nested &&
              // <div style={{ marginLeft: 20 }}>
              <NestedItem
                onClickHandler={onClickHandler}
                whatItem={whatItem + 1}
                collectionNested={collection.nested}
                marginLeft={marginLeft + mlNestedItem}
                nestedOpen={nestedOpen}
              />
              // </div>
            }
          </>
        )
      })}
    </>
  )
}

function LeftSideBar() {
  const [nestedOpen, setNestedOpen] = useState<any>([])

  const sidebarClasses = useSidebarStyles()
  const classes = useStyles()

  const onClickHandler = (whatItem, whatNestedItem) => {
    if (nestedOpen[whatItem]) {
      setNestedOpen({ ...nestedOpen, [whatItem]: { [whatNestedItem]: true } })
      if (nestedOpen[whatItem][whatNestedItem]) {
        setNestedOpen({ ...nestedOpen, [whatItem]: { [whatNestedItem]: !nestedOpen[whatItem][whatNestedItem] } })
      } else {
        setNestedOpen({ ...nestedOpen, [whatItem]: { [whatNestedItem]: true } })
      }
    }
  }

  return (
    <Paper className={sidebarClasses.sideBarContainer}>
      <div>hierarchy of blogs...</div>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
        className={classes.hierarchyList}
      >
        {nestedItems.map((collection, index) =>
          <>
            <ListItem button onClick={() => onClickHandler(index, 0)}>
              <ListItemText primary={collection.item} />
            </ListItem>
            {collection.nested &&
              <NestedItem
                onClickHandler={onClickHandler}
                whatItem={0}
                nestedOpen={nestedOpen}
                collectionNested={collection.nested}
                marginLeft={mlNestedItem}
              />
            }
            <Divider />
          </>
        )}

      </List>

    </Paper>
  )
}

export default LeftSideBar
