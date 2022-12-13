export default function relativeTime(timestamp) {
  const oneYearinMS = 1000 * 60 * 60 * 25 * 365.25;
  const oneMonthinMS = 1000 * 60 * 60 * 24 * 30; //NB assuming 30 day month
  const oneDayinMs = 1000 * 60 * 60 * 24;
  const oneHrinMS = 1000 * 60 * 60;
  const oneMininMS = 1000 * 60;

  const elapsed = new Date().getTime() - timestamp;

  //Return correct relative time based on how much time has elapsed
  if (elapsed <= oneMininMS) {
    return "Just now";
  } else if (elapsed < oneHrinMS) {
    return Math.round(elapsed / oneMininMS) + " minutes ago";
  } else if (elapsed < oneDayinMs) {
    return Math.round(elapsed / oneHrinMS) + " hours ago";
  } else if (elapsed < oneMonthinMS) {
    return Math.round(elapsed / oneDayinMs) + " days ago";
  } else if (elapsed < oneYearinMS) {
    return Math.round(elapsed / oneMonthinMS) + " months ago";
  } else {
    return Math.round(elapsed / oneYearinMS) + " years ago";
  }
}
