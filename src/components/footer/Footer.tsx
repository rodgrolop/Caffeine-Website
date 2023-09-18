import { default as Grid } from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import { MainLogo } from "@components";
import { useT } from "talkr";
import { Link } from "wouter-preact";

import { footerImages, type FooterImageProps } from "./footer-images";
import type { VNode } from "preact";

import { styles } from "./styles";

const Footer = (): VNode => {
  const { T } = useT();

  return (
    <Grid
      container={true}
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={styles.footerContainer}
    >
      <Container maxWidth="xl">
        <Grid
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            paddingTop: 2,
          }}
        >
          <MainLogo styles={styles.mainLogo} />
        </Grid>
        <Grid
          container={true}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            paddingTop: 2,
            paddingBottom: 4,
          }}
        >
          {footerImages.map((image: FooterImageProps) => (
            <IconButton
              aria-label={image.name}
              key={image.name}
              size="large"
              onClick={() => window.open(image.link, "_blank")}
            >
              <SvgIcon>{image.icon}</SvgIcon>
            </IconButton>
          ))}
        </Grid>
        <Grid
          container={true}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            paddingBottom: 2,
          }}
        >
          <Link href="/privacy-policy" style={styles.footerLinks}>
            {T("privacyPolicy")}
          </Link>
          <Link href="/terms-of-service" style={styles.footerLinks}>
            {T("termsOfService")}
          </Link>
        </Grid>
        <Grid
          container={true}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            paddingBottom: 2,
          }}
        >
          <Typography align="center" variant="caption">
            © 2023 Rodrigo Gross López
          </Typography>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Footer;
