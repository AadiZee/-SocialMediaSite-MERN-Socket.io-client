export const imageSource = (user) => {
  if (user.image) {
    return user.image.url;
  } else {
    return "https://e7.pngegg.com/pngimages/926/34/png-clipart-computer-icons-user-profile-avatar-avatar-face-heroes.png";
  }
};
