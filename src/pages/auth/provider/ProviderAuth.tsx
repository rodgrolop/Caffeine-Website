import { default as Grid } from "@mui/material/Unstable_Grid2";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "wouter-preact";
import { useT } from "talkr";
import { AuthPageContainer, DocumentHead } from "@components";
import { useProviderAuthentication } from "@api";

import type { VNode } from "preact";

import { styles } from "./styles";

const getProviderLogo = (provider?: string): VNode | null => {
  switch (provider) {
    case "google":
      return <GoogleIcon fontSize="large" />;
    default:
      return null;
  }
};

const ProviderAuth = ({ provider }: { provider: string }): VNode => {
  const { T } = useT();
  const searchParams = new URLSearchParams(window.location.search);
  const token = searchParams.get("access_token");
  const { error, isFetching, providerError } = useProviderAuthentication(
    token,
    provider as string
  );

  return (
    <AuthPageContainer>
      <DocumentHead>
        <title>
          {`🔓 Login with ${provider} | Rodrigo Gross Lopez - Senior React Developer`}
        </title>
      </DocumentHead>
      <Grid
        container={true}
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={styles.formContainer}
        spacing={2}
      >
        <Grid>{getProviderLogo(provider)}</Grid>
        <Grid>
          {error?.message || providerError?.message ? (
            <Typography variant="h5" component="div">
              {T("somethingHappened")}
            </Typography>
          ) : (
            <Typography variant="h5" component="div">
              {T("authenticating")}
            </Typography>
          )}
        </Grid>
        <Grid>
          {isFetching ? <CircularProgress color="secondary" /> : null}
        </Grid>
        {error?.message || providerError?.message ? (
          <>
            <Grid>
              <Typography variant="caption" gutterBottom component="div">
                {error?.message ?? providerError?.message}
              </Typography>
            </Grid>
            <Grid>
              <Link href="/auth/login">
                <Button variant="contained" color="secondary">
                  {T("backLogin")}
                </Button>
              </Link>
            </Grid>
          </>
        ) : null}
      </Grid>
    </AuthPageContainer>
  );
};

export default ProviderAuth;
