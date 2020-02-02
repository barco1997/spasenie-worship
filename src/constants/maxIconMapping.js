import React from "react";
import LargeIcon from "../components/LargeIcon";
import vk from "../static/img/vk.png";
import instagram from "../static/img/instagram.png";
import facebook from "../static/img/facebook.png";
import spotify from "../static/img/spotify.png";
import youtube from "../static/img/youtube-button.png";
import apple from "../static/img/apple-large.png";
import download from "../static/img/download.png";
export const maxIconMapping = {
  vk: <LargeIcon src={vk} href="https://vk.com/wall-139844456_154" />,
  instagram: (
    <LargeIcon
      src={instagram}
      href="https://www.instagram.com/spasenieworship/"
    />
  ),
  facebook: (
    <LargeIcon
      src={facebook}
      href="https://www.facebook.com/spasenieworship/"
    />
  ),
  youtube: (
    <LargeIcon
      src={youtube}
      href="https://www.youtube.com/channel/UCeNFk3pmgz1TUAEzPyc8kiQ?view_as=subscriber"
    />
  ),
  apple: (
    <LargeIcon
      src={apple}
      href="https://music.apple.com/pl/artist/spasenie-worship/1497058463"
    />
  ),
  spotify: (
    <LargeIcon
      src={spotify}
      href="https://open.spotify.com/artist/3tTgKds3k5j5BPVsPyLDju?si=zJkm01QLQHewNkzmw4IFfA"
    />
  ),
  download: (
    <LargeIcon
      src={download}
      href="https://drive.google.com/drive/folders/11Kudd4atJOgjuEckCxiYsaRVza-0rNjy?usp=sharing"
    />
  )
};
