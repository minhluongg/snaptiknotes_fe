// Album photo: https://www.threads.net/@pearlasnh/post/C-7NI4Nx8Al?xmt=AQGzO5SLT0PScAQeqGOQPEhEyMuCzWdHHtKFpbPXbomfWg
// Album video: https://www.threads.net/@britishbeekeepers/post/C-5kJiZoQQP?xmt=AQGz7hDI2axtC4fY16bWOgI9bOqnC9jmStkg0Uz-_YVyAA
import jwt from "jsonwebtoken";
import axios from "axios";
import fetch from "node-fetch";

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

function getPhotoId(url) {
  const regex = /photo\/(\d+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function getItems(data) {
  const jpegUrls = [];

  data.forEach((item) => {
    const thumbnailUrls = item.thumbnail.url_list;
    const imgCdn = getCdnLink(thumbnailUrls[1], getFileName(thumbnailUrls[1]));
    // console.log(thumbnailUrls[1]);
    jpegUrls.push(imgCdn);
    // thumbnailUrls.forEach((url) => {
    //   if (url.endsWith(".jpeg")) {
    //     jpegUrls.push(url);
    //   }
    // });
  });

  return jpegUrls;
}

function handleData(data) {
  // Extract postinfo from the owner property
  // const avatarCdn = getCdnLink(
  //   data["aweme_detail"]["author"]["avatar_thumb"]["url_list"][0],
  //   data["aweme_detail"]["author"]["avatar_thumb"]["url_list"][0]
  // );
  const postinfo = {
    uid: data.aweme_detail.author.uid,
    unique_id: data.aweme_detail.author.unique_id,
    username: data.aweme_detail.author.unique_id,
    avatar_url: data["aweme_detail"]["author"]["avatar_thumb"]["url_list"][0],
    media_title: data.aweme_detail.desc,
    // __type: "data.__type",
  };
  // const postinfo = data.aweme_detail.author;
  let items = getItems(data["aweme_detail"]["image_post_info"]["images"]);
  // return data;
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

    const isFinalLink = url.includes("photo");
    if (!isFinalLink) {
      const redirectResponse = await axios.head(url, {
        maxRedirects: 0, // Không tự động theo dõi redirect
        validateStatus: (status) => status >= 300 && status < 400, // Chỉ chấp nhận các mã phản hồi trong khoảng redirect
      });

      // Lấy link redirect từ header 'location'
      const redirectUrl = redirectResponse.headers.location;

      if (redirectUrl) {
        url = redirectUrl; // Cập nhật URL để tiếp tục xử lý với link mới
      } else {
        return res.status(400).json({ error: "No redirect found" });
      }
    }

    if (!url.includes("photo")) {
      return res.status(400).json({ error: "Không lấy được ID Video" });
    }

    const awemeId = getPhotoId(url);
    // Gửi request đến API gốc
    const response = await axios.get(
      `http://174.138.19.186:3008/tiktok/spark/aweme/detail?aweme_id=${awemeId}`
    );
    // res.status(200).json(response.data);
    // console.log(response);

    if (response.data.status_code === 0) {
      const processedData = handleData(response.data);
      res.status(200).json(processedData);
    } else {
      res.status(200).json(response.data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
