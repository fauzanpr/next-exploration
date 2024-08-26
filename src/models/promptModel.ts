interface SinglePromptModel {
    id: number;
    prompt: string;
}

export interface PromptsModel {
    id: number;
    title: string;
    prompts: SinglePromptModel[];
}