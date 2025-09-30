import SOC_PORTRAIT from "./stalker_soc_portrait.webp";
import CS_PORTRAIT from "./stalker_cs_portrait.webp";
import COP_PORTRAIT from "./stalker_cop_portrait.webp";
import { StaticImageData } from "next/image";

export interface ModsPortraitMetadata {
    id: number;
    title: string;
    srcPath: StaticImageData;
}

export const MODS_PORTRAITS: ModsPortraitMetadata[] = [
    {
        id: 1,
        title: 'STALKER Shadow of Chernobyl game portrait',
        srcPath: SOC_PORTRAIT
    },
    {
        id: 2,
        title: 'STALKER Clear Sky game portrait',
        srcPath: CS_PORTRAIT
    },
    {
        id: 3,
        title: 'STALKER Call of Prypiat game portrait',
        srcPath: COP_PORTRAIT
    }
];