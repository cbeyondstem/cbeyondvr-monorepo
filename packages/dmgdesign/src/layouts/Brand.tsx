import * as React from "react";

import {
  createStyles,
  Theme,
  makeStyles,
  useTheme
} from "@material-ui/core/styles";
import { SiteConfig, BrandProps } from "@cbeyond/ui-kit";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      color: theme.palette.primary.main,
      textTransform: "none",
      "& >svg:first-child": {
        marginBottom: theme.spacing(-0.5)
      },
      "& >svg:nth-child(2)": {
        fill: "#fcfcfc !important",
        stroke: "transparent !important",
        marginLeft: "1px",
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(0.5)
      }
    },
    footer: {
      "& >svg:first-child": {
        marginBottom: theme.spacing(-1)
      }
    }
  })
);
export const Brand = (props: BrandProps) => {
  const { type } = props;
  const classes = useStyles({});
  const theme = useTheme();

  return type === "header" ? (
    <span className={classes.header}>
      <SiteConfig.Icon width={theme.spacing(4)} height={theme.spacing(4)} />
      <SiteConfig.Logo viewBox="0 0 253.19 15.663" width="200" height="12" />
    </span>
  ) : (
    <span className={classes.footer}>
      <SiteConfig.Icon width={theme.spacing(3)} height={theme.spacing(3)} />
    </span>
  );
};
