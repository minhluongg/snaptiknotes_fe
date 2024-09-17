import { useResult } from "@/contexts/resultContext";
import React from "react";
import IconVideo from "../icon/IconVideo";
import IconPhoto from "../icon/IconPhoto";
import IconDownload from "../icon/IconDownload";

const ShowResult = () => {
  const { formResult } = useResult();
  return (
    <div className="mt-4 result">
      {formResult && formResult.postinfo && (
        <div className="flex items-center gap-4 p-3 rounded bg-slate-100 shadow user">
          <div className="w-16 h-16 rounded-full avatar">
            <img
              src={formResult.postinfo.avatar_url}
              alt={formResult.postinfo.username}
              className="object-cover w-16 h-16 rounded-full"
            />
          </div>
          <div className="userinfo">
            <h3 className="text-[#16161d] font-semibold mb-1">
              {formResult.postinfo.username}
            </h3>
            <p className="text-[#49495a]">{formResult.postinfo.media_title}</p>
          </div>
        </div>
      )}
      <div className="mt-4 media-items gap-x-4 gap-y-3">
        {formResult &&
          formResult.items &&
          formResult.items.map((item) => (
            <div className="p-2 rounded shadow-md" key={item.id}>
              <div className="overflow-hidden rounded item aspect-square relative">
                <img
                  src={item.url || item.display_url}
                  alt={item.id}
                  className="object-cover w-full rounded aspect-square"
                />
                {item.display_url ? <IconVideo /> : <IconPhoto />}
                {}
              </div>
              <a
                href={(item.video_url || item.url) + "&dl=1"}
                className="flex items-center justify-center gap-2 w-full p-2 mt-2 text-center text-white rounded bg-primary"
                type="button"
              >
                <IconDownload className="w-4 h-4"></IconDownload>{" "}
                {item.url ? "Download Photo" : "Download Video"}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShowResult;
