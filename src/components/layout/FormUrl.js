import React, { useEffect, useState } from "react";
import IconLink from "../icon/IconLink";
import * as yup from "yup";
import { useResult } from "@/contexts/resultContext";
import { useForm } from "react-hook-form";
import InputForm from "../input/InputForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "next-i18next";
import IconPaste from "../icon/IconPaste";
import IconClear from "../icon/IconClear";
import IconDownload from "../icon/IconDownload";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import classNames from "@/hooks/classNames";
import useGAEvent from "@/hooks/useGAEvent";
import { gaEvent } from "@/constants/ga";

const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+(threads\.net)(\/.*)?$/;

const FormUrl = () => {
  const [url, setUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPasted, setIsPasted] = useState(false);
  const { t } = useTranslation("common");
  const ga = useGAEvent();

  const schema = yup.object({
    url: yup
      .string()
      .required(t("downloader.errorinputempty"))
      .url(t("downloader.errornoturl"))
      .matches(urlRegex, t("downloader.errorlinkthreads")),
  });

  const { formResult, setFormResult, setErrorMessage, errorMessage } =
    useResult();
  const handlePaste = async () => {
    if (isPasted) {
      setValue("url", "");
      setIsPasted(false);
    } else {
      try {
        const text = await navigator.clipboard.readText();
        setValue("url", text);
        setIsPasted(true);
      } catch (err) {
        console.error("Failed to read clipboard contents: ", err);
      }
    }
  };
  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const inputUrl = watch("url");

  useEffect(() => {
    if (inputUrl && inputUrl.length > 0) {
      setIsPasted(true);
    } else {
      setIsPasted(false);
    }
    setErrorMessage("");
  }, [inputUrl]);

  const mutation = useMutation({
    mutationFn: async (data) => {
      setIsSubmitting(true);
      try {
        // Chuyển đổi object data thành query string
        const params = new URLSearchParams(data).toString();

        // Gửi request GET với các tham số từ query string
        const response = await axios.get(
          `/api/action?url=${encodeURIComponent(data.url)}&${params}`
        );
        setIsSubmitting(false);
        return response.data;
      } catch (error) {
        setIsSubmitting(false);
        throw new Error(error.response?.data ?? error.message);
      }
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.status_code === 0) {
        setFormResult({ postinfo: data.postinfo, items: data.items });
        ga.event({ action: gaEvent.GET_VIDEO_SUSCCESS });
        reset();
      } else {
        setErrorMessage(t("downloader.errorapi"));
        ga.event({ action: gaEvent.GET_VIDEO_FAILED });
      }
      // Xử lý dữ liệu phản hồi từ server nếu cần
    },
    onError: (error) => {
      console.error("Có lỗi xảy ra:", error);
      setErrorMessage(t("downloader.errorapi"));
      ga.event({ action: gaEvent.GET_VIDEO_FAILED });
      // Xử lý lỗi nếu có
    },
  });

  const onSubmit = (data) => {
    // console.log(errors);
    // if (!isValid) return;
    ga.event({ action: gaEvent.GET_VIDEO_START });
    mutation.mutate(data);
    console.log(isValid);
  };

  return (
    <form className="mt-4 md:mt-12" onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor="video-url"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        {t("downloader.downvid")}
      </label>
      {errorMessage && (
        <div
          className="p-3 mb-3 text-sm text-left text-red-800 rounded-lg bg-red-50"
          role="alert"
        >
          <span className="font-medium">Error!</span> {errorMessage}
        </div>
      )}
      <div className="flex flex-col md:gap-3 md:flex-row">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 flex items-center text-gray-600 pointer-events-none start-0 ps-3">
            <IconLink></IconLink>
          </div>
          <InputForm
            placeholder={t("downloader.placeholder")}
            name="url"
            control={control}
          ></InputForm>
          <button
            type="button"
            onClick={handlePaste}
            className="absolute px-4 py-2 text-sm font-medium text-white rounded-full end-1 bottom-1 md:end-1.5 md:bottom-1.5 bg-slate-600 focus:ring-4 focus:outline-none focus:ring-slate-300 flex gap-1 items-center"
          >
            {isPasted ? (
              <>
                <IconClear /> {t("clear")}
              </>
            ) : (
              <>
                <IconPaste /> {t("paste")}
              </>
            )}
          </button>
        </div>
        {errors && errors.url && (
          <div className="block mt-1 text-sm text-red-700 md:hidden text-start">
            {" "}
            {errors.url.message}
          </div>
        )}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 px-4 py-2 mt-3 font-medium text-white rounded-full bg-primary focus:ring-4 focus:outline-none focus:ring-green-300 md:px-8 h-11 md:h-12 md:mt-0 disabled:cursor-not-allowed disabled:opacity-60 min-w-44"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="block w-4 h-4 border-2 rounded-full border-r-transparent animate-spin"></span>
            </>
          ) : (
            <>
              <IconDownload className="w-4 h-4"></IconDownload> {t("download")}
            </>
          )}
        </button>
      </div>
      {errors && errors.url && (
        <div className="hidden mt-2 text-sm text-red-700 text-start md:block">
          {" "}
          {errors.url.message}
        </div>
      )}
    </form>
  );
};

export default FormUrl;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // Will be passed to the page component as props
    },
  };
}
