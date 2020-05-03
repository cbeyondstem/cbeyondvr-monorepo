/* eslint-disable react/jsx-props-no-spreading */
import * as _ from 'lodash'
import * as React from 'react'
import { uid } from 'react-uid'

import { makeStyles, Theme } from '@material-ui/core/styles'
import { Grid, Typography, CardMedia, useMediaQuery, Button } from '@material-ui/core'
import { CarouselView } from '@cbeyond/ui-kit'
import { orderedImages, imageInfoDict, categories, projects } from '../../assets/image-list'
import { renderHtml } from '../../layouts'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
    // paddingLeft: '0 !important',
    // paddingRight: '0 !important',
    // paddingBottom: `2rem`
  },
  iframe: {
    '& .vp-center': {
      justifyContent: 'flex-start !important'
    }
  },
  grid: {
    paddingLeft: '0 !important',
    paddingRight: '0 !important'
  },
  title: {
    paddingBottom: '2rem',
    paddingTop: '2rem',
    '& .MuiTypography-button': {
      fontSize: '130%'
    }
  }
}))

export interface ActivityDomainProps extends React.ComponentPropsWithRef<'div'> {
  category: string
  imgOrientation?: 'Responsive' | 'Landscape' | 'Portrait'
}
export const ActivityDomain: React.FunctionComponent<ActivityDomainProps> = props => {
  const classes = useStyles(props)
  const { category, imgOrientation } = props
  const activity = categories.filter(c => c.category === category)[0]
  const sm = useMediaQuery((t: Theme) => t.breakpoints.up('sm'))
  const md = useMediaQuery((t: Theme) => t.breakpoints.up('md'))
  let width = 600
  let height = 260

  if (md) {
    width = 1800
    height = 640
  } else if (sm) {
    width = 640
    height = 320
  }
  return (
    <Grid className={classes.root} container alignItems="center" justify="center" direction="row" spacing={3}>
      {activity.projects.map((project: string, projectIdx: number) => {
        const images = _.get(orderedImages, project, null)
        const projectInfo = projects.filter(p => p.folder === project)[0]
        if (!projectInfo) {
          window.alert(`project ${project} not found`)
          return null
        }
        const title = projectInfo.company ? `${projectInfo.project} (${projectInfo.company})` : projectInfo.project
        const caption: string = projectInfo.details
        return (
          <Grid item xs={12} lg={12} key={uid(project, projectIdx)}>
            <div className={classes.title}>
              <Typography variant="button" align="left">
                {renderHtml(title)}
              </Typography>
              <Typography variant="caption" align="left">
                {caption && renderHtml(caption, 1)}
              </Typography>
            </div>
            {project === 'art_aitken' ? (
              <CardMedia
                component="iframe"
                className={classes.iframe}
                title="Courouble Design & Engineering - Project Portfolio"
                image="https://player.vimeo.com/video/194116968?byline=false&portrait=false&title=false&fun=false&texttrack=false&autoplay=true&muted=true&loop=1"
                width={width}
                height={height}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <CarouselView images={images} renderHtml={renderHtml} imgOrientation={imgOrientation} captions />
            )}
          </Grid>
        )
      })}
    </Grid>
  )
}
export const ActivityUnified: React.FunctionComponent<ActivityDomainProps> = props => {
  const classes = useStyles(props)
  const { category, imgOrientation } = props
  const activity = categories.filter(c => c.category === category)[0]
  let images: string[] = []
  activity.projects.forEach((project: string) => {
    const img = _.get(orderedImages, project, [])
    images = images.concat(img)
  })
  return <CarouselView images={images} renderHtml={renderHtml} imgOrientation={imgOrientation} captions />
}
