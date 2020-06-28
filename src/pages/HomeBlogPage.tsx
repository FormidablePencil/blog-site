import React from 'react'
import { Grid, Paper, useMediaQuery, Theme, makeStyles, createStyles, Typography, Button, Link, useTheme } from '@material-ui/core'
import Navbar from '../components/homePgComps/Navbar'
import RightSideBar from '../components/homePgComps/RightSideBar'
import Content from '../components/homePgComps/Content'
import LeftSideBar from '../components/homePgComps/LeftSideBar'
import '../styles/globalStyles.sass'
import '../styles/animations.sass'
//@ts-ignore
import mountains from '../images/mountainImg.jpg'
import gatsby from '../images/gatsby-icon.png';
// import { Parallax, ParallaxBanner } from 'react-scroll-parallax'
import { Parallax, Background } from 'react-parallax';
import { Breadcrumbs } from '@material-ui/core';
import BreadCrumbComponent from '../components/homePgComps/BreadCrumbComponent'

// disable navbar on all screens beside sm where it becomes a hamburger. Put the navigation there.
//* this page will be the whole blogging site. When navigating from home page transition transition (css) out with bread crumbs and the wallpaper change out for another.
//*    put the general topic in place of brand name

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridContainer: { /* padding: 20, */ backgroundColor: theme.palette.grey[200] },
    horizontalMargins: { marginLeft: 40, marginRight: 40 },
  })
)

export interface ContentT {
  author: string
  title: string
  subTitle: string
  content: string
  datePublished: string //will be a number though
  tag?: string
}

const dynamicContent: ContentT[] = [ //WordPress will have it it's content different
  {
    author: 'Dennis Aleksandrov',
    title: 'Lorem Ipsum Title',
    subTitle: 'Lorem Ipsum subtitle',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam at modi autem voluptates, maiores hic deserunt aperiam perspiciatis harum nostrum! Minima iusto nihil eaque. Dolores eum maxime commodi. Quod exercitationem sit veritatis repudiandae soluta, laboriosam neque iste culpa, magni cupiditate assumenda. Omnis in, maxime voluptas iure quasi velit optio eveniet fugiat, mollitia quos, repellat voluptates iusto? Quaerat qui, quasi minus voluptate optio voluptatem deserunt labore iure asperiores distinctio sequi ut! Similique nihil, quibusdam repudiandae fugiat cupiditate animi ipsam exercitationem fuga in molestiae ab enim temporibus cum reiciendis modi at sit ex, alias soluta error omnis sapiente commodi! Similique debitis distinctio error repellendus laudantium repellat non nesciunt dolorem. Sunt, minus? Amet error ducimus voluptatibus quasi dignissimos adipisci, eum sapiente fuga nemo veniam ea optio minima. Laboriosam, aliquid vitae. Architecto ducimus quidem ut odit sequi aliquam? Id fugit nisi, unde quaerat architecto possimus facilis veniam commodi rerum, iste in quibusdam! Incidunt itaque ea expedita blanditiis quia saepe ducimus odio quas asperiores inventore veritatis ut tenetur est rem, rerum recusandae quasi accusamus earum ullam aspernatur quod! Necessitatibus, est dolorem a id recusandae fuga dolores nesciunt quo, ab non perspiciatis assumenda autem veniam sint! Autem nisi optio consectetur laboriosam velit veniam illum ex molestias.',
    datePublished: 'January 6th, 2000',
  },
]

function HomeBlogPage() {
  const classes = useStyles()
  // const bgColor = { backgroundColor: useTheme().palette.secondary2.main }
  const homePage = true
  // console.log(homePage);


  return (
    <>
      <Navbar />
      <div className='blogMainPgLargeImg' alt="mountains">
        <Parallax
          style={{ height: "100%" }}
          bgImage={'../images/mountainImg.jpg'}
          strength={100}
          renderLayer={percentage => {
            const x = 300
            const marginTop = 16 * (percentage * 100)
            return (
              <div
                style={{
                  marginTop,
                  position: 'absolute',
                  right: 100,
                  top: -960,
                  // transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <Typography className="brandName" variant='h1'>Formidable Pencil</Typography>
              </div>
            )
          }}
        >
        </Parallax>
      </div>

      <div className={classes.gridContainer}>

        <div className='thickDivider' />
        <Grid container>
          <Grid item justify="center" xs>
            <LeftSideBar />
          </Grid>
          <Grid item justify="center" className={classes.horizontalMargins} xs={7}>

            {homePage ? <p className='latestPosts'>Latest posts</p>
              : <BreadCrumbComponent />}

            {dynamicContent.map(data =>
              <Content data={data} />
            )}
          </Grid>
          <Grid item justify="center" xs>
            {/* <RightSideBar /> */}
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default HomeBlogPage
