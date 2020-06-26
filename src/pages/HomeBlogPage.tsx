import React from 'react'
import { Grid, Paper, useMediaQuery, Theme, makeStyles, createStyles, Typography, Button } from '@material-ui/core'
import Navbar from '../components/homePgComps/Navbar'
import RightSideBar from '../components/homePgComps/RightSideBar'
import Content from '../components/homePgComps/Content'
import LeftSideBar from '../components/homePgComps/LeftSideBar'
import '../styles/globalStyles.sass'
import '../styles/animations.sass'
//@ts-ignore
import mountains from '../images/mountainImg.jpg'
import gatsby from '../images/gatsby-icon.png';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

//Navbar sticky until reaches bottom of bg image... no navbar needed
//left right are to be fixed
//* see if you can achrive these results in sass. It's cleaner that way if it's possible
// add an interpolating text over background "Formidable Pencil" and interpolates downwards
// disable navbar on all screens beside sm where it becomes a hamburger. Put the navigation there.
// There's no need to crowed the webpage. The above todos will suffice

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    negativeMargin: { padding: 20 }
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
  return (
    <>
      <div className='blogMainPgLargeImg' alt="mountains">
        <Parallax className="parallaxBrandNameContainer"/*  y={[-300, 500]} */ y={["-200px", "200px"]} x={["1100px", "-800px"]} tagInner="figure">
          <Typography className="brandName" variant='h1'> Formidable Pencil</Typography>
        </Parallax>
      </div>
      <Navbar />
      <div className={classes.negativeMargin}>
        <Grid container spacing={5}>
          <Grid item justify="center" xs={2}>
            <LeftSideBar />
          </Grid>
          <Grid item justify="center" xs={8}>
            <p className='latestPosts'>
              Latest posts
            </p>
            {dynamicContent.map(data =>
              <Content data={data} />
            )}
          </Grid>
          <Grid item justify="center" xs={2}>
            <RightSideBar />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default HomeBlogPage
