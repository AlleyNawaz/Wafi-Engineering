"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useActionState, useEffect, useRef } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const initialState = {
  errors: {},
  success: false,
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendEmail,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6">
      {state.success && (
        <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-lg flex items-center">
          <CheckCircle2 className="w-5 h-5 mr-3 shrink-0" />
          <p>Message sent successfully! We'll get back to you soon.</p>
        </div>
      )}

      {state.errors?._form && (
        <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 mr-3 shrink-0" />
          <p>{state.errors._form}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-300">
            Name
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your Name"
            required
            aria-describedby="name-error"
          />
          {state.errors?.name && (
            <p id="name-error" className="text-sm text-red-500">
              {state.errors.name[0]}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            aria-describedby="email-error"
          />
          {state.errors?.email && (
            <p id="email-error" className="text-sm text-red-500">
              {state.errors.email[0]}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-slate-300">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="Project Inquiry"
          required
          aria-describedby="subject-error"
        />
        {state.errors?.subject && (
          <p id="subject-error" className="text-sm text-red-500">
            {state.errors.subject[0]}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-300">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          className="min-h-[150px]"
          required
          aria-describedby="message-error"
        />
        {state.errors?.message && (
          <p id="message-error" className="text-sm text-red-500">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
