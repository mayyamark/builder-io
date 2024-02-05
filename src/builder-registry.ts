"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import TechnologyConsultingSection from "./components/sections/TechnologyConsultingSection";
import ExpertServicesSection from "./components/sections/ExpertServicesSection";
import PartnerSection from "./components/sections/PartnerSection";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(TechnologyConsultingSection, {
  name: "TechnologyConsultingSection",
  inputs: [
    {
      name: "title",
      type: "text",
    },
  ],
});

Builder.registerComponent(ExpertServicesSection, {
  name: "ExpertServicesSection",
  inputs: [
    {
      name: "title",
      type: "text",
    },
  ],
});

Builder.registerComponent(PartnerSection, {
  name: "PartnerSection",
  inputs: [
    {
      name: "title",
      type: "text",
    },
  ],
});
