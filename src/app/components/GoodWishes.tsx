"use client";
import Image from "next/image";
import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { END_POINT } from "@/config";
import { toast } from "sonner";

type FormData = {
  name: string;
  message: string;
};

function GoodWishes() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (loading) return; // prevent double submit
    setLoading(true);

    try {
      await axios.post(`${END_POINT}/laura-santos/good-wishes`, data);

      toast.success("Thank you for your good wishes!");
      reset();
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative w-screen h-screen flex bg-[#b19671] overflow-hidden
      max-lg:flex-col max-lg:h-auto"
    >
      <Image
        className="w-6/10 h-full sticky top-0 max-lg:w-full max-lg:h-[50vh]"
        src="/img/05.jpg"
        alt="Photo"
        width={1000}
        height={1000}
      />

      <div className="animation-scroll w-4/10 h-full p-4 flex items-center max-lg:w-full">
        <div className="w-full pt-6 pb-10 text-[#b19671] bg-[url(/img/hoja.webp)] bg-cover bg-no-repeat bg-center text-center p-4 space-y-2">
          <h2 className="animate-on-scroll font-[extraCursive] text-8xl max-lg:text-6xl">
            Good
          </h2>
          <h3 className="animate-on-scroll text-4xl -mt-4 max-lg:text-2xl">
            WISHES
          </h3>
          <p className="animate-on-scroll text-2xl max-lg:text-xl">
            We wish you the best in this new chapter, may God bless you greatly.
          </p>
          <h4 className="animate-on-scroll font-[extraCursive] text-4xl">
            Carol Rodrigez
          </h4>

          <button
            onClick={() => setOpen(true)}
            className="animate-on-scroll w-fit m-auto mt-6 flex items-center justify-center gap-2 text-2xl border border-[#b19671] px-4 py-1 hover:bg-[#b19671] hover:text-white cursor-pointer transition max-lg:text-xl"
          >
            Send Good Wishes
          </button>
        </div>
      </div>

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg">
            <h3 className="text-2xl mb-4 text-[#b19671] font-bold">
              Send your good wishes
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <input
                {...register("name", { required: true })}
                placeholder="Your name"
                className="border border-gray-300 p-2 rounded-lg"
                disabled={loading}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}

              <textarea
                {...register("message", { required: true })}
                placeholder="Your message"
                rows={4}
                className="border border-gray-300 p-2 rounded-lg"
                disabled={loading}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  Message is required
                </span>
              )}

              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  disabled={loading}
                  className="px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-100 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 rounded-lg bg-[#b19671] text-white hover:bg-[#9a7b55] flex items-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4"></span>
                  ) : null}
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default memo(GoodWishes);
