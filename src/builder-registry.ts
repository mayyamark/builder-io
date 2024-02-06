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
  inputs: [{
    name: "title",
    type: "text",
  }, {
    name: "text",
    type: "text",
  }, {
    name: 'backgroundImage',
    type: 'string',
    regex: {
      // pattern to test; such as "^\/[a-z]$" 
      pattern: "https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)",
      // flags for the RegExp constructor; for example, "gi"  */
      options: "g",
      // message to display to end-users if the regex fails
      message: "Expected format: https://example.com"
    }
  }],
});

Builder.registerComponent(ExpertServicesSection, {
  name: "ExpertServicesSection",
  inputs: [{
    name: "title",
    type: "text",
  }],
});

Builder.registerComponent(PartnerSection, {
  name: "PartnerSection",
  inputs: [{
    name: "title",
    type: "text",
  }, {
    name: "text",
    type: "text",
  }, {
    name: "items",
    type: "list",
    subFields: [{
      name: 'title',
      type: 'string',
    }, {
      name: 'href',
      type: 'string',
    }]
  }],
});
