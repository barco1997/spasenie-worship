import React from "react";
import SmallIcon from "../components/SmallIcon";
import vk from "../static/img/vk.png";
import instagram from "../static/img/instagram.png";
import facebook from "../static/img/facebook.png";
import spotify from "../static/img/spotify.png";
import youtube from "../static/img/youtube-button.png";
import apple from "../static/img/apple-large.png";
export const minIconMapping = {
  vk: <SmallIcon src={vk} href="https://vk.com/wall-139844456_154" />,
  instagram: (
    <SmallIcon
      src={instagram}
      href="https://www.instagram.com/spasenieworship/"
    />
  ),
  facebook: (
    <SmallIcon
      src={facebook}
      href="https://www.facebook.com/spasenieworship/"
    />
  ),
  youtube: (
    <SmallIcon
      src={youtube}
      href="https://www.youtube.com/channel/UCeNFk3pmgz1TUAEzPyc8kiQ?view_as=subscriber"
    />
  ),
  apple: (
    <SmallIcon
      src={apple}
      href="https://music.apple.com/pl/artist/spasenie-worship/1497058463"
    />
  ),
  spotify: (
    <SmallIcon
      src={spotify}
      href="https://open.spotify.com/artist/3tTgKds3k5j5BPVsPyLDju?si=zJkm01QLQHewNkzmw4IFfA"
    />
  )
};
