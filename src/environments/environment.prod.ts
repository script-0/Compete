export const environment = {
  production: true,
  expirationDelay : 20*60 ,//Durée exprimée en seconds
  delayBeforeInitiateGeolocalisation : 2000 , //En milli seconds
  delayAfterOperationConsideredAsFailed : 8000 , // En milli seconds
  delayAfterSnackBarDismiss : 3 , // En seconds
  delayAfterCloseAuthentificationFailedBox : 4000 , //En milli seconds

  GAME_COMPLETE : 'Completed',
  GAME_ALIVE : 'Alive',

  passwordValidtor : {
    strong : "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})",
    medium : "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
  }
};
