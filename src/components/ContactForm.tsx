import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Send, MessageCircle, ShieldCheck } from "lucide-react";

const PHONE = "636144057";
const EMAIL = "cuidate@enfermeroencasa.com";

const contactSchema = z.object({
  name: z.string().trim().min(2, { message: "Indica tu nombre" }).max(80),
  phone: z
    .string()
    .trim()
    .min(9, { message: "Teléfono no válido" })
    .max(20)
    .regex(/^[0-9 +()-]+$/, { message: "Teléfono no válido" }),
  message: z.string().trim().min(5, { message: "Cuéntame brevemente qué necesitas" }).max(800),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar la política de privacidad" }),
  }),
});

type FormState = { name: string; phone: string; message: string; consent: boolean };

const initial: FormState = { name: "", phone: "", message: "", consent: false };

const buildBody = (data: { name: string; phone: string; message: string }) =>
  `Nombre: ${data.name}\nTeléfono: ${data.phone}\n\nMotivo de la consulta:\n${data.message}\n\n— Enviado desde enfermeroencasa.com`;

export const ContactForm = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      result.error.issues.forEach((i) => {
        const k = i.path[0] as keyof FormState;
        fieldErrors[k] = i.message;
      });
      setErrors(fieldErrors);
      return null;
    }
    return result.data;
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = validate();
    if (!data) return;
    const subject = encodeURIComponent(`Consulta web · ${data.name}`);
    const body = encodeURIComponent(buildBody({ name: data.name, phone: data.phone, message: data.message }));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast({
      title: "Abriendo tu correo…",
      description: "Si no se abre, escríbeme directamente a " + EMAIL,
    });
  };

  const handleWhatsapp = () => {
    const data = validate();
    if (!data) return;
    const text = encodeURIComponent(buildBody({ name: data.name, phone: data.phone, message: data.message }));
    window.open(`https://wa.me/34${PHONE}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleEmailSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="cf-name" className="text-brand-navy">Nombre</Label>
          <Input
            id="cf-name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Tu nombre"
            maxLength={80}
            aria-invalid={!!errors.name}
            className="mt-1.5"
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="cf-phone" className="text-brand-navy">Teléfono</Label>
          <Input
            id="cf-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="600 00 00 00"
            maxLength={20}
            aria-invalid={!!errors.phone}
            className="mt-1.5"
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="cf-msg" className="text-brand-navy">¿Qué necesitas?</Label>
        <Textarea
          id="cf-msg"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Cuéntame brevemente: cura, sondaje, inyectable, valoración, etc."
          rows={4}
          maxLength={800}
          aria-invalid={!!errors.message}
          className="mt-1.5 resize-none"
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>
      <label className="flex items-start gap-3 text-sm text-muted-foreground">
        <input
          id="contact-consent"
          type="checkbox"
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked as true)}
          className="mt-1 h-4 w-4 accent-brand-green"
          aria-invalid={!!errors.consent}
          aria-label="Acepto la política de privacidad"
        />
        <span>
          He leído y acepto que mis datos se traten de forma <strong className="text-foreground">confidencial</strong> únicamente para responder a esta consulta. No se comparten con terceros.
        </span>
      </label>
      {errors.consent && <p className="-mt-3 text-xs text-destructive">{errors.consent}</p>}

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" size="lg" className="rounded-full bg-brand-navy hover:bg-brand-navy/90">
          <Send className="h-4 w-4" /> Enviar por email
        </Button>
        <Button
          type="button"
          onClick={handleWhatsapp}
          size="lg"
          variant="outline"
          className="rounded-full border-brand-green/40 text-brand-green hover:bg-secondary"
        >
          <MessageCircle className="h-4 w-4" /> Enviar por WhatsApp
        </Button>
      </div>

      <div className="flex items-start gap-2 rounded-2xl bg-secondary/50 p-4 text-xs text-muted-foreground">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
        <span>
          Tus datos los recibo solo yo, Alejandro. Cumplimiento del <strong className="text-foreground">RGPD</strong> y secreto profesional sanitario. No envío publicidad ni comparto información con terceros.
        </span>
      </div>
    </form>
  );
};

export default ContactForm;
