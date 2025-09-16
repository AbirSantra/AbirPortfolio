"use client";

import { getHeroContent } from "@/lib/hero-data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const heroFormSchema = z.object({
  headline1: z.string().min(1, "Headline 1 is required"),
  headline2: z.string().min(1, "Headline 2 is required"),
  description: z.string().min(1, "Description is required"),
  about: z.string().min(1, "About is required"),
});

const HeroForm = () => {
  const heroContent = getHeroContent();

  const heroForm = useForm<z.infer<typeof heroFormSchema>>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: {
      headline1: heroContent.headline1 || "",
      headline2: heroContent.headline2 || "",
      description: heroContent.description || "",
      about: heroContent.about || "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: z.infer<typeof heroFormSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/hero-content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to update hero content");
      }

      console.log("Hero content updated successfully");
      toast("Hero content updated successfully!");
    } catch (error) {
      console.error("Error updating hero content:", error);
      toast.error("Failed to update hero content");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <Form {...heroForm}>
        <form onSubmit={heroForm.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={heroForm.control}
            name="headline1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Headline 1</FormLabel>
                <FormControl>
                  <Input placeholder="Enter headline 1" {...field} />
                </FormControl>
                <FormDescription>
                  This is the first line of the hero headline.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={heroForm.control}
            name="headline2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Headline 2</FormLabel>
                <FormControl>
                  <Input placeholder="Enter headline 2" {...field} />
                </FormControl>
                <FormDescription>
                  This is the second line of the hero headline.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={heroForm.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="min-h-24"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is a short description that appears in the hero section.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="hover:cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save Hero"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default HeroForm;
