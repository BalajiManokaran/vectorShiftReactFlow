import { createNode } from "./nodefactory";
import { TextComponent } from "../components/NodeComponents/TextComponent";
import { InputOutputComponent } from "../components/NodeComponents/InputOutputComponent";
import { GmailComponent } from "../components/NodeComponents/GmailComponent";
import { SearchComponent } from "../components/NodeComponents/SearchComponent";
import { TextToFileComponent } from "../components/NodeComponents/TextToFileComponent";
import { ImageGenerationComponent } from "../components/NodeComponents/ImageGenerationComponent";
import { DataLoaderComponent } from "../components/NodeComponents/DataLoaderComponent";

export const InputNode = createNode(
  "Input",
  [],
  [""],
  {
    width: "250px",
    height: "auto",
  },
  InputOutputComponent
);

export const OutputNode = createNode(
  "Output",
  [""],
  [],
  {
    width: "250px",
    height: "auto",
  },
  InputOutputComponent
);

export const TextNode = createNode(
  "Text",
  [],
  ["output"],
  {
    width: "250px",
    height: "auto",
  },
  TextComponent
);

export const LLMNode = createNode("LLM", ["", ""], [""], {
  width: "200px",
  height: "100px",
});

export const SearchNode = createNode(
  "Semantic Search",
  ["query", "documents"],
  ["result"],
  {
    width: "320px",
    height: "auto",
  },
  SearchComponent
);

export const GmailNode = createNode(
  "Gmail",
  [],
  [],
  {
    width: "300px",
    height: "auto",
  },
  GmailComponent
);

export const CSVQueryLoaderNode = createNode(
  "CSV Query Loader",
  ["query", "CSV"],
  ["output"],
  {
    width: "200px",
    height: "auto",
  },
  DataLoaderComponent,
  { label: "Query", description: "Queries a CSV for a specific result." }
);

export const URLLoaderNode = createNode(
  "URL Loader",
  ["url"],
  ["output"],
  {},
  DataLoaderComponent,
  { label: "URL", description: "Reads data from a URL." }
);

export const YouTubeLoaderNode = createNode(
  "YouTube Loader",
  ["url"],
  ["output"],
  {},
  DataLoaderComponent,
  { label: "URL", description: "Reads transcript from a YouTube video." }
);

export const ImageGenerationNode = createNode(
  "Image Generation",
  ["prompt"],
  ["images"],
  {
    width: "300px",
    height: "auto",
  },
  ImageGenerationComponent
);

export const TexttoFileGeneratorNode = createNode(
  "Text To File",
  ["Text"],
  ["File"],
  {
    width: "200px",
    height: "auto",
  },
  TextToFileComponent
);
