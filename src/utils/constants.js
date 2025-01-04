import InputIcon from "@mui/icons-material/Input";
import OutputIcon from "@mui/icons-material/Output";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import ImageIcon from "@mui/icons-material/Image";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LanguageIcon from "@mui/icons-material/Language";

export const NodesArray = [
  {
    type: "customInput",
    label: "Input",
    component: InputIcon,
  },
  {
    type: "customOutput",
    label: "Output",
    component: OutputIcon,
  },
  {
    type: "text",
    label: "Text",
    component: TextSnippetOutlinedIcon,
  },
  {
    type: "llm",
    label: "LLM",
    component: LanguageIcon,
  },
  {
    type: "search",
    label: "Search",
    component: SearchIcon,
  },
  {
    type: "gmail",
    label: "Gmail",
    component: EmailIcon,
  },
  {
    type: "csv",
    label: "CSV",
    component: DashboardIcon,
  },
  {
    type: "urlLoader",
    label: "URL",
    component: LinkOutlinedIcon,
  },
  {
    type: "youtubeLoader",
    label: "YouTube",
    component: YouTubeIcon,
  },
  {
    type: "image",
    label: "Image Gen",
    component: ImageIcon,
  },
  {
    type: "texttofile",
    label: "Text to File",
    component: InsertDriveFileIcon,
  },
];
