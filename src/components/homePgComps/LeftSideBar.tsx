import React, { useRef, useState, useEffect } from 'react'
import { Grid, Paper, Typography, Theme, makeStyles, createStyles, ListSubheader, ListItemIcon, ListItemText, ListItem, List, Collapse, Divider } from '@material-ui/core'
import { push } from 'gatsby'
import { nestedItems } from '../../staticData'

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

// [order downward, level]


const NestedItem = ({ collectionNested, marginLeft, nestedOpen, onClickHandler }) => {
  const classes = useStyles()
  const ref = useRef(null)
  const ref2 = useRef(null)
  useEffect(() => {
    setTimeout(() => {
      console.log(ref)
      // console.log(ref2)
    }, 2000);
  }, [])

  return (
    <>
      <div ref={ref2} />
      <Collapse timeout="auto" unmountOnExit>
        <List ref={ref} component="div" disablePadding>
          <ListItem button onClick={() => onClickHandler('@')}>
            <ListItemText style={{ marginLeft: marginLeft }} />
          </ListItem>
        </List>
      </Collapse>
      {collectionNested.map((collection, index) => {
        // const returnWeatherNestedIsOpen = (whatItem, whatNestedItem) => {
        //   if (nestedOpen[whatItem]) {
        //     if (nestedOpen[whatItem][whatNestedItem]) {
        //       return true
        //     } else return false

        //   } else return false
        // }
        return (
          <>
            <Collapse timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button onClick={() => onClickHandler('@')}>
                  <ListItemText primary={collection.item} style={{ marginLeft: marginLeft }} />
                </ListItem>
              </List>
            </Collapse>
            {collection.nested &&
              // <div style={{ marginLeft: 20 }}>
              <NestedItem
                onClickHandler={onClickHandler}
                // whatItem={whatItemInCollection}
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
  const [nestedOpen, setNestedOpen] = useState<any>(nestedItems)

  const sidebarClasses = useSidebarStyles()
  const classes = useStyles()

  // let whereAt = []
  const onClickHandler = (ref) => console.log('toggleButtonByRef')

  const getObjWithToggleHierarchy = () => {

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
        {nestedItems.map((collection, index) => {
          // const whatItemInCollection = [index]
          return (
            <div key={collection.id}>
              <ListItem button onClick={() => onClickHandler('@')}>
                <ListItemText primary={collection.item} />
              </ListItem>
              {collection.nested &&
                <NestedItem
                  onClickHandler={onClickHandler}
                  // whatItem={[index]}
                  nestedOpen={nestedOpen}
                  collectionNested={collection.nested}
                  marginLeft={mlNestedItem}
                />
              }
              <Divider />
            </div>
          )
        })}

      </List>

    </Paper>
  )
}

export default LeftSideBar
