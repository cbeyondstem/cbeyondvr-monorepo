/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import { uid } from 'react-uid'

import {
  useTheme,
  Grid,
  Typography,
  useMediaQuery,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar
} from '@material-ui/core'

import { CarouselImgProps, AllImgConsumer } from '@cbeyond/ui-kit'
import { FluidObject } from 'gatsby-image'
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
      height: '10vh',
      display: 'block'
    },
    detailsMd: {
      height: '14vh',
      display: 'block'
    },
    avatar: {
      backgroundColor: theme.palette.secondary.contrastText,
      color: theme.palette.primary.contrastText
    },
    modal: {
      // align: 'right',
      display: 'flex',
      '& div': {
        marginLeft: 'auto'
      }
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
  const { title, imageItem, avatar, details, carousel, imgOrientation } = props
  const CardMediaImage = React.lazy(() => import('../LazyCardMedia/CardMediaImage'))
  const isSSR = typeof window === 'undefined'

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
      {!isSSR && (
        <React.Suspense fallback={<div>loading...</div>}>
          <CardMediaImage className={classes.media} image={imageItem.desktop as ImageSharpFluid} title={title} />
        </React.Suspense>
      )}
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
      <CardActions disableSpacing className={classes.modal}>
        <CarouselModal title={title} titleNode={cardHeader} images={carousel} imgOrientation="Landscape" />{' '}
      </CardActions>
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
              <Grid item xs={12} md={4} lg={4} align="center" component="div" key={uid(card, cardIdx)}>
                <SkillCard imageItem={selectedImages[0]} {...card} />
              </Grid>
            )
          })}
        </Grid>
      )}
    </AllImgConsumer>
  )
}
