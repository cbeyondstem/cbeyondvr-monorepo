/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { uid } from 'react-uid'

import {
  useTheme,
  Grid,
  Typography,
  CardMedia,
  useMediaQuery,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton
} from '@material-ui/core'

import { CarouselImgProps, CarouselView, AllImgConsumer } from '@cbeyond/ui-kit'
import Img, { FluidObject } from 'gatsby-image'
import { ImageSharpFluid } from '../../types/gatsby-graphql-types'
import { secondaryFont, renderHtml } from '../../layouts'
import { CarouselModal } from '../CarouselModal'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridRoot: {
      flexGrow: 1
    },
    root: {
      maxWidth: 500
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    header: {
      textTransform: 'uppercase',
      '& span': {
        fontSize: '100%'
      }
    },
    details: {
      fontFamily: secondaryFont,
      fontSize: '125%'
    },
    detailsLg: {
      height: '16vh',
      display: 'block'
    },
    detailsMd: {
      height: '20vh',
      display: 'block'
    },
    expand: {
      marginLeft: 'auto',
      '&:hover': {
        backgroundColor: theme.palette.secondary.contrastText,
        opacity: '80%'
      },
      // transform: 'rotate(0deg)',
      // transition: theme.transitions.create('transform', {
      //   duration: theme.transitions.duration.shortest
      // },
      // )
      '& span': {
        backgroundColor: `transparent`,
        fill: theme.palette.primary.contrastText
      }
    },
    // expandOpen: {
    //   transform: 'rotate(180deg)'
    // },
    avatar: {
      backgroundColor: theme.palette.secondary.contrastText,
      color: theme.palette.primary.contrastText
    }
  })
)

export interface SkillCardRawProps {
  title: string
  image: string
  avatar: string
  details: string
  carousel: string[]
  imgOrientation?: 'Responsive' | 'Landscape' | 'Portrait'
}

export interface SkillCardProps extends SkillCardRawProps {
  imageItem: CarouselImgProps
}

export function SkillCard(props: SkillCardProps) {
  const classes = useStyles(props)
  const theme = useTheme()
  const md = useMediaQuery((t: Theme) => t.breakpoints.up('md'))
  const lg = useMediaQuery((t: Theme) => t.breakpoints.up('lg'))
  const [expanded, setExpanded] = React.useState(false)
  const { title, imageItem, avatar, details, carousel, imgOrientation } = props
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const fixItem: (img: ImageSharpFluid) => FluidObject = img => {
    const { aspectRatio = 1.5, src = '', srcSet = '', sizes = '', ...fluid } = img
    return { aspectRatio, src, srcSet, sizes, ...fluid }
  }
  const cardHeader = (
    <CardHeader
      className={classes.header}
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          {avatar}
        </Avatar>
      }
      // titleTypographyProps={{ variant: 'h2' }}
      title={title}
      // subheader
    />
  )
  return (
    <Card className={classes.root}>
      {cardHeader}
      <CardMedia
        component={Img}
        className={classes.media}
        src={(imageItem.desktop as ImageSharpFluid).src}
        fluid={fixItem(imageItem.desktop as ImageSharpFluid)}
        title={title}
        alt={title}
        backgroundColor={theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark}
        style={{
          margin: '0 auto' // Used to center the image
        }}
      />
      <CardContent>
        <Typography
          className={classNames(classes.details, {
            [classes.detailsMd]: md && !lg,
            [classes.detailsLg]: lg
          })}
          variant="body2"
          component="div"
        >
          {renderHtml(details)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={classes.expand}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CarouselModal title={cardHeader} images={carousel} imgOrientation="Landscape" />{' '}
        </IconButton>
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CarouselView
            images={carousel}
            renderHtml={renderHtml}
            imgOrientation="Landscape"
            showPlayButton={false}
            thumb={false}
            captions
            autoplay
          />
        </CardContent>
      </Collapse> */}
    </Card>
  )
}

export interface SkillCardGridProps {
  cardList: SkillCardRawProps[]
}

export function SkillCardGrid(props: SkillCardGridProps) {
  const classes = useStyles(props)
  const { cardList } = props
  return (
    <AllImgConsumer>
      {({ images }) => (
        <Grid
          className={classes.gridRoot}
          container
          alignItems="flex-start"
          justify="center"
          direction="row"
          spacing={3}
        >
          {cardList.map((card: SkillCardRawProps, cardIdx) => {
            let selectedImages: CarouselImgProps[]
            if (card.image) {
              selectedImages = images.filter(img => img.path.search(card.image) > -1)
            }
            if (!selectedImages) {
              // eslint-disable-next-line no-alert
              alert(`SkillCardGrid image ${card.image} not found`)
              return null
            }
            return (
              <Grid item xs={12} md={3} lg={3} align="center" component="div" key={uid(card, cardIdx)}>
                <SkillCard imageItem={selectedImages[0]} {...card} />
              </Grid>
            )
          })}
        </Grid>
      )}
    </AllImgConsumer>
  )
}
