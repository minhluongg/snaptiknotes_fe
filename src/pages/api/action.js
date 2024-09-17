// Album photo: https://www.threads.net/@pearlasnh/post/C-7NI4Nx8Al?xmt=AQGzO5SLT0PScAQeqGOQPEhEyMuCzWdHHtKFpbPXbomfWg
// Album video: https://www.threads.net/@britishbeekeepers/post/C-5kJiZoQQP?xmt=AQGz7hDI2axtC4fY16bWOgI9bOqnC9jmStkg0Uz-_YVyAA
import jwt from "jsonwebtoken";
import axios from "axios";

function getCdnLink(link, filename) {
  const key = "=^eGzr{8a6xjVQ{";
  const payload = {
    url: link,
    filename: "Snapsave.app_threads_" + filename,
  };
  const token = jwt.sign(payload, key, { algorithm: "HS256" });

  return `https://d.rapidcdn.app/snapinsta?token=${token}`;
}
function getFileName(url) {
  const urlPath = new URL(url).pathname;
  const fileInfo = urlPath.split("/").pop();
  const fileExtension = fileInfo.split(".").pop().toLowerCase();

  if (["webp", "mp4", "jpeg", "png", "jpg", "heic"].includes(fileExtension)) {
    return fileInfo;
  } else {
    return null;
  }
}

function handleGraphImage(item) {
  // let maxImage = item.items.reduce((max, image) => {
  //   if (image.width && image.height) {
  //     if (image.width * image.height > max.width * max.height) {
  //       return image;
  //     }
  //   }
  //   return max;
  // });
  // const urlCdn = getCdnLink(maxImage.url, getFileName(maxImage.url));
  // maxImage.url = urlCdn;
  // return { id: item.id, ...newItem };
  let firstImage = item.items[0]; // Get the first element
  const urlCdn = getCdnLink(firstImage.url, getFileName(firstImage.url));
  firstImage.url = urlCdn;
  return { id: item.id, ...firstImage };
}

function handleGraphVideo(item) {
  const display_url_cdn = getCdnLink(
    item.display_url,
    getFileName(item.display_url)
  );
  const video_url_cdn = getCdnLink(item.video_url, getFileName(item.video_url));
  return {
    id: item.id,
    __type: item.__type,
    display_url: item.display_url,
    display_url: display_url_cdn,
    video_url: video_url_cdn,
    video_duration: item.video_duration,
  };
}

function handleData(data) {
  // Extract postinfo from the owner property
  const avatarCdn = getCdnLink(
    data.owner.avatar_url,
    "avatar_" + data.owner.id
  );
  const postinfo = {
    id: data.owner.id,
    username: data.owner.username,
    avatar_url: avatarCdn,
    media_title: data.title,
    __type: data.__type,
  };
  let items = [];

  if (data.__type === "GraphSidecar") {
    items = data.items.map((item) => {
      if (item.__type === "GraphVideo") {
        return handleGraphVideo(item);
      }
      if (item.__type === "GraphImage") {
        const newImgItem = handleGraphImage(item);
        return newImgItem;
      }
    });
  }
  if (data.__type === "GraphVideo") {
    const newVideoItem = handleGraphVideo(data);
    items.push(newVideoItem);
  }
  if (data.__type === "GraphImage") {
    const newImgItem = handleGraphImage(data);
    items.push({
      __type: data.__type,
      ...newImgItem,
    });
  }

  return { postinfo, items, status_code: 0 };
}

export default async function handler(req, res) {
  try {
    // Lấy thông tin URL từ query parameters
    let { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }
    if (typeof url === "object") {
      url = url[0];
    }

    // Gửi request đến API gốc
    const response = await axios.get(
      `http://104.248.99.47:3003/threads/v1?url=${url}`
    );

    // res.status(200).json(response.data);

    if (response.data.status_code === 0) {
      const processedData = handleData(response.data.data);
      res.status(200).json(processedData);
    } else {
      res.status(200).json(response.data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
