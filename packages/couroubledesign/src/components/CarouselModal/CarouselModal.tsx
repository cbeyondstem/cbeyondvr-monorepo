import * as React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Modal, Backdrop, Fade, IconButton, Button, Box, Typography } from '@material-ui/core'
import { CarouselView } from '@cbeyond/ui-kit'
// import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded'
import OpenWithIcon from '@material-ui/icons/OpenWith'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { primaryFont, secondaryFont } from '../../layouts'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 0,
      [theme.breakpoints.down('sm')]: {
        alignItems: 'flex-end'
      }
    },
    title: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '95%'
      },
      [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(4),
        wordSpacing: theme.spacing(0.9)
        // paddingBottom: theme.spacing(2)
      }
    },
    desc: {
      // [theme.breakpoints.down('sm')]: {
      //   fontSize: '95%'
      // },
      fontFamily: secondaryFont,
      // fontSize: '20px',
      [theme.breakpoints.up('lg')]: {
        maxWidth: '60%'
      },
      paddingBottom: theme.spacing(4)
    },
    paper: {
      backgroundColor: theme.palette.primary.main,
      // border: '2px solid #000',
      // boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 5),
      minWidth: '60vw',
      minHeight: '60vh',
      [theme.breakpoints.down('sm')]: {
        minWidth: '100vw',
        minHeight: '88vh',
        padding: theme.spacing(2, 2, 3)
      },
      // outline: 'none',
      '&:focus': {
        outline: `none` // `2px solid ${theme.palette.secondary.contrastText}`
      }
    },
    carousel: {
      fontSize: '140%',
      textAlign: 'left',
      [theme.breakpoints.down('sm')]: {
        fontSize: '110%'
      }
    },
    button: {
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
    }
  })
)

export interface CarouselModelProps extends React.ComponentPropsWithRef<'div'> {
  title: string
  open: boolean
  onClose: () => void
  titleNode?: React.ReactNode
  desc?: string
  descNode?: React.ReactNode
  images: string[]
  imgOrientation?: 'Responsive' | 'Landscape' | 'Portrait'
}

export function CarouselModal(props: CarouselModelProps) {
  const classes = useStyles(props)
  const { title, titleNode, desc, descNode, images, imgOrientation, open: openExternal, onClose } = props
  const [open, setOpen] = React.useState(false)
  const [close, setClose] = React.useState(false)
  React.useEffect(() => {
    setClose(false)
  }, [openExternal])
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setClose(true)
    onClose()
  }
  const renderHtmlCarousel = (rawHTML: string, idx?: number, key?: string) =>
    React.createElement('div', {
      key,
      dangerouslySetInnerHTML: { __html: rawHTML },
      className: classes.carousel,
      style: idx > 0 ? { fontFamily: secondaryFont } : { fontFamily: primaryFont, fontWeight: 300 }
    })
  const combinedOpen = close ? false : open || openExternal
  console.log(`Modal open=${combinedOpen}`)
  return (
    <>
      <IconButton
        className={classes.button}
        onClick={handleOpen}
        aria-expanded={combinedOpen}
        aria-label="expand modal"
      >
        <OpenWithIcon titleAccess={`Expand ${title}`} />
      </IconButton>
      <Modal
        aria-labelledby="carousel-modal-title"
        aria-describedby="carousel-modal-description"
        className={classes.modal}
        open={combinedOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={combinedOpen}>
          <Box
            display="flex"
            className={classes.paper}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1" id="carousel-modal-title" className={classes.title}>
              {titleNode || title}
            </Typography>
            <Typography variant="subtitle1" className={classes.desc}>
              {descNode || desc}
            </Typography>
            <CarouselView
              images={images}
              renderHtml={renderHtmlCarousel}
              imgOrientation={imgOrientation}
              showPlayButton={false}
              thumb={false}
              captions
              // autoplay
            />{' '}
            <IconButton
              className={classes.button}
              onClick={handleClose}
              aria-expanded={combinedOpen}
              aria-label="show more"
            >
              <CloseRoundedIcon titleAccess={`close modal ${title}`} />
            </IconButton>{' '}
          </Box>
        </Fade>
      </Modal>
    </>
  )
}
