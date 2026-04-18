"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitMessage } from "@/lib/api/endpoints/public-contact-api/public-contact-api";

import { useToast } from "@/components/ui/ToastContext";

const contactSchema = z.object({
  fullName: z.string().min(2, "Lütfen adınızı ve soyadınızı giriniz."),
  phone: z.string().optional(),
  email: z.string().email("Lütfen geçerli bir e-posta adresi giriniz."),
  message: z.string().min(1, "Lütfen mesajınızı giriniz."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { showToast } = useToast();
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const response = await submitMessage(data, {
        domain: "is-hukuku.com",
      });

      if (response.status === 200 || response.status === 201) {
        setStatus("success");
        showToast(
          "Mesajınız başarıyla iletildi. En kısa sürede size dönüş yapacağız.",
          "success",
        );
        reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      showToast(
        "Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.",
        "error",
      );
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="iletisim" className="py-24 md:py-32 bg-surface-container-low">
      <div className="mx-auto max-w-2xl px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-secondary font-sans font-bold tracking-widest uppercase text-sm mb-4">
            İletişim
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-8">
            Haklarınızı Savunmak İçin İlk Adımı Atın.
          </h2>
          <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
            Ön görüşme ve danışmanlık talepleriniz için bize ulaşabilirsiniz.
            Davanızı birlikte değerlendirelim ve en doğru stratejiyi
            belirleyelim.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-[0_20px_40px_rgba(13,28,50,0.03)] border border-outline-variant/10">
          <h3 className="font-display text-2xl font-bold text-on-surface mb-8 text-center">
            Bize Ulaşın
          </h3>

          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Full Name */}
            <div className="relative">
              <Controller
                name="fullName"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="fullName"
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 font-sans text-on-surface focus:outline-none focus:ring-0 focus:border-b-2 focus:border-secondary transition-colors placeholder-transparent"
                    placeholder="Adınız Soyadınız"
                  />
                )}
              />
              <label
                htmlFor="fullName"
                className="absolute left-0 -top-3.5 text-sm font-sans text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-secondary"
              >
                Adınız Soyadınız
              </label>
              {errors.fullName && (
                <p className="text-error text-xs mt-1 absolute">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="relative">
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="tel"
                    id="phone"
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 font-sans text-on-surface focus:outline-none focus:ring-0 focus:border-b-2 focus:border-secondary transition-colors placeholder-transparent"
                    placeholder="Telefon Numaranız"
                  />
                )}
              />
              <label
                htmlFor="phone"
                className="absolute left-0 -top-3.5 text-sm font-sans text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-secondary"
              >
                Telefon Numaranız
              </label>
              {errors.phone && (
                <p className="text-error text-xs mt-1 absolute">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    id="email"
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 font-sans text-on-surface focus:outline-none focus:ring-0 focus:border-b-2 focus:border-secondary transition-colors placeholder-transparent"
                    placeholder="E-Posta Adresiniz"
                  />
                )}
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-sm font-sans text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-secondary"
              >
                E-Posta Adresiniz
              </label>
              {errors.email && (
                <p className="text-error text-xs mt-1 absolute">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="relative mt-2">
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="message"
                    rows={4}
                    className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 font-sans text-on-surface focus:outline-none focus:ring-0 focus:border-b-2 focus:border-secondary transition-colors placeholder-transparent resize-none"
                    placeholder="Mesajınız (Kısaca konu nedir?)"
                  ></textarea>
                )}
              />
              <label
                htmlFor="message"
                className="absolute left-0 -top-3.5 text-sm font-sans text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-secondary"
              >
                Mesajınız (Kısaca konu nedir?)
              </label>
              {errors.message && (
                <p className="text-error text-xs mt-1 absolute">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`mt-4 px-8 py-4 rounded-md bg-gradient-to-r from-primary to-primary-container text-on-primary font-sans text-base font-medium flex items-center justify-center transition-all shadow-[0_20px_40px_rgba(13,28,50,0.06)] w-full ${
                  status === "loading"
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:-translate-y-1"
                }`}
              >
                {status === "loading" ? "Gönderiliyor..." : "Gönder"}
              </button>

              <p className="text-xs text-on-surface-variant text-center font-sans">
                Bilgileriniz kvkk kapsamında gizli tutulmaktadır.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
