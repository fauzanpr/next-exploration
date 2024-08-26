import { atom } from "jotai";
import { PromptsModel } from "./models/promptModel";

export const PromptsAtom = atom<PromptsModel[]>([
    {
        id: 1,
        title: "Example Title",
        prompts: [
            {
                id: 1,
                prompt: "Buatkan sebuah example prompt"
            },
            {
                id: 2,
                prompt: "Ini adalah contoh prompt"
            }
        ]
    }
]);