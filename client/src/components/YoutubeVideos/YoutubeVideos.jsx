import { useEffect } from 'react';
import styles from '../../styles/YoutubeVideos.module.css';
import { useState } from 'react';

const API_KEY = 'Replace your api key';

// https://youtube.googleapis.com/youtube/v3/channels?part=id&forUsername=apple&key=AIzaSyDEt1Dm_EFnohkYxrQeosHuEOxW8BPa8lI



const Apple_Channel_ID = 'UCE_M8A5yxnLfW0KghEeajjw';

// const Channel_ID =' https://youtube.googleapis.com/youtube/v3/channels?part=id&forUsername=apple&key=AIzaSyDEt1Dm_EFnohkYxrQeosHuEOxW8BPa8lI';

// const video_url ='https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyDEt1Dm_EFnohkYxrQeosHuEOxW8BPa8lI';

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const res = await fetch(
        'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyCVyrQqzpuaXePM55C9cpsYSq-0MIoj95s'
      );
      const data = await res.json();
      setVideos(data.items);
    }
    fetchVideos();
  }, []);

  return (
    <div className={styles.container}>
      {videos?.map((video) => {
        let vidId = video.id.videoId;
        let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
        let thumb = video.snippet.thumbnails.high.url;
        let title = video.snippet.title;
        let desc = video.snippet.description;

        // Format the ISO date
        let rawDate = video.snippet.publishedAt;
        let formattedDate = new Date(rawDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
        return (
          <Video
            thumb={thumb}
            videoLink={vidLink}
            title={title}
            desc={desc}
            date={formattedDate}
          />
        );
      })}
    </div>
  );
}

function Video({ thumb, title, desc, videoLink, date }) {
  return (
    <div className={styles.video}>
      <a href={videoLink} target="blank" className={styles.link}>
        <img src={thumb} alt="" />
      </a>
      <div className={styles.subCon}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
}

export default YoutubeVideos;
