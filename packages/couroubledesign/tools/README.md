# Content preprocessing for courouble design website

following scripts shall be executed in order:

1. update-pix

this script reads the latest image-list.js file and update each project / activity folder:

- add new images from the the raw directory - images extension will be fixed at this occasion
- warn about unused images

2. metadata

this script reads the latest image-list.js file and for each project/activity
update the image metadata with updated copyright information

3. aspect-ratio

finally the aspect-ratio script creates two sets of images: landscape and portrait.
