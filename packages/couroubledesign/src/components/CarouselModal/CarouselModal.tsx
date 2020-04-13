import * as React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Modal, Backdrop, Fade, IconButton } from '@material-ui/core'
import { CarouselView } from '@cbeyond/ui-kit'
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded'
import { renderHtml } from '../../layouts'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 0
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      // border: '2px solid #000',
      // boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      minWidth: '70vw',
      minHeight: '70vh',
      // outline: 'none',
      '&:focus': {
        outline: `none` // `2px solid ${theme.palette.secondary.contrastText}`
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
  titleNode?: React.ReactNode
  images: string[]
  imgOrientation?: 'Responsive' | 'Landscape' | 'Portrait'
}

export function CarouselModal(props: CarouselModelProps) {
  const classes = useStyles(props)
  const [open, setOpen] = React.useState(false)
  const { title, titleNode, images, imgOrientation } = props
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <IconButton className={classes.button} onClick={handleOpen} aria-expanded={open} aria-label="show more">
        <PlayArrowRoundedIcon titleAccess={`play ${title}`} />
      </IconButton>{' '}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{titleNode || title}</h2>
            <CarouselView
              images={images}
              renderHtml={renderHtml}
              imgOrientation={imgOrientation}
              // showPlayButton={false}
              thumb={false}
              captions
              autoplay
            />{' '}
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
