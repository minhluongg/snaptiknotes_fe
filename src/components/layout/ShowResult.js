import { useResult } from "@/contexts/resultContext";
import React from "react";
import IconVideo from "../icon/IconVideo";
import IconPhoto from "../icon/IconPhoto";
import IconDownload from "../icon/IconDownload";
import { v4 as uuidv4 } from "uuid";

const ShowResult = () => {
  const { formResult } = useResult();
  return (
    <div className="mt-4 result">
      {formResult && formResult.postinfo && (
        <div className="flex items-center gap-4 p-3 rounded shadow bg-slate-100 user">
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
            <div className="p-2 rounded shadow-md" key={uuidv4()}>
              <div className="relative overflow-hidden rounded item aspect-square">
                <img
                  src={item}
                  alt="Photo"
                  className="object-cover w-full rounded aspect-square"
                />
                <IconPhoto />
              </div>
              <a
                href={item + "&dl=1"}
                className="flex items-center justify-center w-full gap-2 p-2 mt-2 text-center text-white rounded bg-primary"
                type="button"
              >
                <IconDownload className="w-4 h-4"></IconDownload> Download Photo
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShowResult;
